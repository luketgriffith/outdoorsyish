import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import Api from '../../services/api';
import { browserHistory } from 'react-router';


function* signUp(action) {
  try {
    console.log('sagassssss', action)
    const profile = yield call(Api.signUp, action.payload)
    yield put({ 
      type: 'LOGIN_SUCCESS',
      user: profile
    });
    yield browserHistory.push('/profile/' + profile._id)
  } catch(err) {
    console.log('the error:', err);
    alert(err)
  }
}

function* login(action) {
  try {
    console.log('login saga', action)
    const profile = yield call(Api.login, action.payload)
    // yield alert('yayyyy you logged in dawg');
    yield put({ 
      type: 'LOGIN_SUCCESS',
      user: profile
    });
    yield browserHistory.push('/profile/' + profile._id)
  } catch(err) {
    alert(err);
  }
}

function* logout(action) {
  try{
    yield call(Api.logout);
    yield alert('you is now logged out');
    yield({ 
      type: 'LOGOUT'
    });
  } catch(err) {
    alert(err);
  }
}

function* getLocations(action) {
  try{
    const locations = yield call(Api.getLocations);
    yield put({ 
      type: 'GET_LOCATIONS_SUCCESS',
      locations: locations
    });
  } catch(err) {
    
  }
}

export function* watchSignup() {
  yield takeEvery('SIGN_UP', signUp);
}

export function* watchLogin() {
  yield takeEvery('LOGIN', login);
}
export function* watchLogout() {
  yield takeEvery('LOGOUT', logout);
}
export function* watchGetLocations() {
  yield takeEvery('GET_ALL_LOCATIONS', getLocations)
}

export default function* homeSaga() {
  yield [
    watchSignup(),
    watchLogin(),
    watchLogout(),
    watchGetLocations()
    // more sagas go here...
  ];
}