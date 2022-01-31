import "regenerator-runtime/runtime";
import { call, take, put, race, select } from 'redux-saga/effects'
import * as socketUtils from './websocket-utils'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export default function* cvWebSocketSaga() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}