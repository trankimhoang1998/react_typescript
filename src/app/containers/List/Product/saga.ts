import { takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

/**
 * request/response handler
 */
export function* getProductSaga() {
  console.log('connect Saga');
  yield;
  return;
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* productFormSaga() {
  yield takeLatest(actions.getProduct.type, getProductSaga);
}
