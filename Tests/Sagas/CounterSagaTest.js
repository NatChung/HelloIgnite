import { put, call } from 'redux-saga/effects'
import { incrementAsync, decrementAsync, delay } from '../../App/Sagas/CounterSaga'
import CounterActions from '../../App/Redux/CounterRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('saga increment async', () => {
    const step = stepper(incrementAsync())
    expect(step()).toEqual(call(delay, 1000))
    expect(step()).toEqual(put(CounterActions.syncIncrease()))
})

test('saga decrement async', () => {
    const step = stepper(decrementAsync())
    expect(step()).toEqual(call(delay, 1000))
    expect(step()).toEqual(put(CounterActions.syncDecrease()))
})