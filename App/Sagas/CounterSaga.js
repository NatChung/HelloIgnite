/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put, fork, take, cancel, takeEvery, takeLatest } from 'redux-saga/effects'
import CounterActions, { CounterTypes } from '../Redux/CounterRedux'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function *doDecrementAsync(){
  yield call(delay, 2000)
  yield put(CounterActions.syncDecrease())
}

export function * decrementAsync(){
  const task = yield fork(doDecrementAsync)
  yield fork(takeEvery, CounterTypes.STOP, cancelWorkerSaga, task)
}

function *doIncrementAsync(){
  yield call(delay, 2000)
  yield put(CounterActions.syncIncrease())
}

export function * incrementAsync() {
  const task = yield fork(doIncrementAsync)
  yield fork(takeLatest, CounterTypes.STOP, cancelWorkerSaga, task)
}

function* cancelWorkerSaga (task) {
  console.tron.display({
    name:`CounterTypes.STOP`,
    preview:``,
    value: ``
  })
  yield cancel(task)
}

