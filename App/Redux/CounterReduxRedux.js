import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  syncIncrease: null,
  syncDecrease: null
})

export const CounterReduxTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  value: 0
})

/* ------------- Reducers ------------- */

// request the data from an api
export const syncIncreaseReduce = (state) => state.merge({ value: state.value+1 })
export const syncDecreaseReduce = (state) => state.merge({ value: state.value-1 })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SYNC_INCREASE]: syncIncreaseReduce,
  [Types.SYNC_DECREASE]: syncDecreaseReduce
})
