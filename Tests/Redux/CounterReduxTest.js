import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CounterRedux'

test('syncIncreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.syncIncrease())
    expect(state.value).toBe(1)
})

test('syncDecreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.syncDecrease())
    expect(state.value).toBe(-1)
})

test('asyncIncreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.asyncIncrease())
    expect(state.value).toBe(0)
})

test('asyncDecreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.asyncDecrease())
    expect(state.value).toBe(0)
})