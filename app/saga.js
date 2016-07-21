//import sagas up here
import HomeSaga from './routes/Home/saga';
import LocationSaga from './routes/SingleLocation/saga';
import CreateLocation from './routes/CreateLocation/saga';

export default function* rootSaga() {
  yield [
    //call them here like so:
    HomeSaga(),
    LocationSaga(),
    CreateLocation()
  ];
}
