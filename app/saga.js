//import sagas up here
import HomeSaga from './routes/Home/saga';
import LocationSaga from './routes/SingleLocation/saga';

export default function* rootSaga() {
  yield [
    //call them here like so:
    HomeSaga(),
    LocationSaga()
  ];
}
