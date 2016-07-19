import jwt_decode from 'jwt-decode';

function getQueryString (field, url) {
  var href = url ? url : window.location.href,
    reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' ),
    string = reg.exec(href);

  return string ? string[1] : null;
}

function authenticateUser(dispatch) {
  let jwt = getQueryString('jwt');
  let session = localStorage.getItem('sessionID');
  if(!jwt && !session) {
    window.location.href = 'localhost:5001';
  } else {
    // Set jwt in localstorage as sessionID
    if(jwt) {
      localStorage.setItem('sessionID', jwt);

    let decoded = jwt_decode(localStorage.getItem('sessionID'));

      let userData = {
        // idToken: localStorage.getItem('sessionID'),
        id: decoded._id,
        email: decoded.email
      };
      // Set okta user data in state
      dispatch({
        type: 'SET_USER',
        payload: userData
      });
    } else {
      // token is expired, auto log user out
      logOutUser(dispatch);
    }
  }
}

export { authenticateUser };
