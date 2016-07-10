import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import Api from '../../services/api';


function* signUp(action) {
  try {
    console.log('sagassssss', action)
    yield call(Api.signUp, action.payload)
  } catch(err) {
    
  }
}

function* login(action) {
  try {
    console.log('login saga', action)
    yield call(Api.login, action.payload)
  } catch(err) {
    
  }
}

export function* watchSignup() {
  yield takeEvery('SIGN_UP', signUp);
}

export function* watchLogin() {
  yield takeEvery('LOGIN', login);
}

export default function* homeSaga() {
  yield [
    watchSignup(),
    watchLogin()
    // more sagas go here...
  ];
}