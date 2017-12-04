import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  syncIncrease: null,
  syncDecrease: null,
  asyncIncrease: null,
  asyncDecrease: null,
  stop: null,
  start: ['task']
})

export const CounterTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  value: 0,
  increaseTask: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const syncIncreaseReduce = (state) => state.merge({ value: state.value+1 })
export const syncDecreaseReduce = (state) => state.merge({ value: state.value-1 })
export const asyncIncreaseReduce = state => {
  return state
}
export const asyncDecreaseReduce = state => state
export const stopReduce = state => state
export const startReduce = (state, action) => {
  return state
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SYNC_INCREASE]: syncIncreaseReduce,
  [Types.SYNC_DECREASE]: syncDecreaseReduce,
  [Types.ASYNC_INCREASE]: asyncIncreaseReduce,
  [Types.ASYNC_DECREASE]: asyncDecreaseReduce,
  [Types.STOP]: stopReduce,
  [Types.START]: startReduce
})
