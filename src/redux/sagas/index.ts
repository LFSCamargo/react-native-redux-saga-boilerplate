import { all, spawn } from 'redux-saga/effects';
import { Saga } from 'redux-saga';

const allSagas: Saga[] = [
  // Sagas goes here and will be spawned
  // by the rootSaga
];

function* rootSaga() {
  yield all(allSagas.map((saga) => spawn(saga)))
}

export default rootSaga;