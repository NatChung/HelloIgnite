import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CounterReduxRedux'

test('syncIncreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.syncIncrease())
    expect(state.value).toBe(1)
})

test('syncDecreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.syncDecrease())
    expect(state.value).toBe(-1)
})