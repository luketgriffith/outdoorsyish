import { takeEvery, takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import Api from '../../services/api';
import { browserHistory } from 'react-router';

function* getLocation(action) {
  try {
    const location = yield call( Api.getSingleLocation, action.data.locationId )
    console.log('location: ', location)
    const user = yield call( Api.getUser, action.data.idToken, location.owner )
    console.log('user: ', user)
    yield put({
      type: 'GET_LOCATION_SUCCESS',
      location: {
        location: location,
        user: user
      }
    })
  } catch(err) {
    console.log('fatal error dude')
  }
}


export function* watchGetSingleLocation() {
  yield takeEvery('GET_SINGLE_LOCATION', getLocation);
}


export default function* singleLocationSaga() {
  yield [
    watchGetSingleLocation()
    // more sagas go here...
  ];
}
