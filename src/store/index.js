import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call } from 'redux-saga/effects';


import { reducer } from "./reducer";
import { registerSaga } from './saga';

function* rootSaga() {
  yield call(registerSaga)
}

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
