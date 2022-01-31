import cvWebSocketSaga from './cvWebSocket'
import { fork, all } from 'redux-saga/effects'

export default function* allSagas() {
  yield all([
    fork(cvWebSocketSaga)
  ])
}