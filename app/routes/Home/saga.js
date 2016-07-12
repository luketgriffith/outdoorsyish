import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import Api from '../../services/api';


function* signUp(action) {
  try {
    console.log('sagassssss', action)
    yield call(Api.signUp, action.payload)
    yield alert('Success!')
  } catch(err) {
    console.log('the error:', err);
    alert(err)
  }
}

function* login(action) {
  try {
    console.log('login saga', action)
    yield call(Api.login, action.payload)
    yield alert('yayyyy you logged in dawg');
  } catch(err) {
    alert(err);
  }
}

function* logout(action) {
  try{
    yield call(Api.logout);
    yield alert('you is now logged out');
  } catch(err) {
    alert(err);
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

export default function* homeSaga() {
  yield [
    watchSignup(),
    watchLogin(),
    watchLogout()
    // more sagas go here...
  ];
}