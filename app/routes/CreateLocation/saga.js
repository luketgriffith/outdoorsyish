import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import Api from '../../services/api';
import { browserHistory } from 'react-router';

function* createLocation(action) {
  try {
    const location = yield call( Api.createLocation, action.location)
    console.log('created? ', location);
    yield browserHistory.push('/')
  } catch(err) {
    console.log('fatal error dude')
  }
}

function* watchCreateLocations() {
  yield* takeEvery('CREATE_LOCATION', createLocation)
}

export default function* homeSaga() {
  yield [
    watchCreateLocations()
    // more sagas go here...
  ];
}
