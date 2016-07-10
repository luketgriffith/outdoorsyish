//import sagas up here
import HomeSaga from './routes/Home/saga';

export default function* rootSaga() {
  yield [
    //call them here like so:
    HomeSaga()
  ];
}