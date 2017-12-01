#  HelloIgnite
This is a practice project for [Ignite](https://github.com/infinitered/ignite) generated react native project. In this project, I will add a counterexample to test redux/saga from Ignite generate command also include generating container

## Ignite generate command
Simple type ignite generate will show list blew

```makefile
✨ Type ignite generate ________ to run one of these generators:

  component   Generates a component, styles, and an optional test.
  container   Generates a redux smart component.
  listview    Deprecated - Use `list`
  list        Generates a screen with a ListView/Flatlist/SectionList + walkthrough.
  redux       Generates a action/creator/reducer set for Redux.
  saga        Generates a saga with an optional test.
  screen      Generates an opinionated container.

  --------------------------------------------------------------------------
  Check out https://github.com/infinitered/ignite for instructions on how to
  install some or how to build some for yourself.
```
## Create a Components with Storybook
Using [storybook](https://github.com/storybooks/storybook) to create component with its test

### Run component
```sh
$ npm run storybook
$ react ntive run-ios
```
### Open http://localhost:7007/
### Create componet
```sh
$ ignite generate component Counter
✔︎ App/Components/Counter.js
✔︎ App/Components/Styles/CounterStyle.js
```
### Create Counter.story.js
```sh
$ touch App/Components/Counter.story.js
```
### Add this code in Counter.sotry.js
```javascript
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import Counter from './Counter'

storiesOf('Counter')
  .add('Default', () => (
    <Counter/>
  ))
```
### Import the story file to Stories.js
``` javascript
import './Counter.story'
```
### Implement the component
```javascript
render = () => (
  <View style={styles.container}>

    <View style={styles.syncButton} >
      <BlueButton text='SYNC+' onPress={this.props.onSyncIncrease} />
      <RedButton text='SYNC-' onPress={this.props.onSyncDecrease} />
    </View>

    <Text style={styles.resultText}>{this.props.value}</Text>

    <View style={styles.asyncButton} >
      <BlueButton text='ASYN+' onPress={this.props.onAsyncIncrease} />
      <RedButton text='ASYN-' onPress={this.props.onAsyncDecrease} />
    </View>

  </View>
)
```
### Test on Counter.Story.js
```javascript
storiesOf('Counter')
  .add('Default', () => (
    <Counter 
        value={9}
        onSyncIncrease={action('onSyncIncrease')} 
        onSyncDecrease={action('onSyncDecrease')}
        onAsyncIncrease={action('onAsyncIncrease')}
        onAsyncDecrease={action('onAsyncDecrease')}
        />
  ))
```

### Jest component
###### Test render with match snapshort
```javascript
test('Counter component renders correctly', () => {
  const tree = renderer.create(<Counter
      value={9}
      onSyncIncrease={() => { }}
      onSyncDecrease={() => { }}
      onAsyncIncrease={() => { }}
      onAsyncDecrease={() => { }}
  />).toJSON()
  expect(tree).toMatchSnapshot()
})
  ```
###### Test props.value
```javascript
test('setValue', () => {
  const wrapperPress = shallow(<Counter value={13} />)
  expect(wrapperPress.find('Text').prop('children')).toBe(13)
})
```
###### Test earch onPress
  ```javascript
  test('onSyncIncrease', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter onSyncIncrease={onPress} />)

    expect(wrapperPress.find('BlueButton').at(0).prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    wrapperPress.find('BlueButton').at(0).simulate('press')
    expect(i).toBe(1)
})

test('onSyncDecrease', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter onSyncDecrease={onPress} />)

    expect(wrapperPress.find('RedButton').at(0).prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    wrapperPress.find('RedButton').at(0).simulate('press')
    expect(i).toBe(1)
})

test('onAsyncIncrease', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter onAsyncIncrease={onPress} />)

    expect(wrapperPress.find('BlueButton').at(1).prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    wrapperPress.find('BlueButton').at(1).simulate('press')
    expect(i).toBe(1)
})

test('onAsyncDecrease', () => {
    let i = 0 // i guess i could have used sinon here too... less is more i guess
    const onPress = () => ++i
    const wrapperPress = shallow(<Counter onAsyncDecrease={onPress} />)

    expect(wrapperPress.find('RedButton').at(1).prop('onPress')).toBe(onPress) // uses the right handler
    expect(i).toBe(0)
    wrapperPress.find('RedButton').at(1).simulate('press')
    expect(i).toBe(1)
})
```

## Reactotron (Debug tools)
I added this snippet for better log with [Reactotorn](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md)
```json
"Print to reactotron": {
  "prefix": "tron",
  "body": [
    "console.tron.display({\n\tname:`$1`,\n\tpreview:`$2`,\n\tvalue: `$3`\n})"
  ],
  "description" : "Log ouput to reactotron"
}
```

## Create a CounterContainers with CounterRedux

### Create container
```sh
$ ignite generate container CounterContainer

✔︎ App/Containers/CounterContainer.js
✔︎ App/Containers/Styles/CounterContainerStyle.js
```

### Add Counter component 
```javascript
render = () => (
  <ScrollView style={styles.container}>
    <Counter value={this.state.value} />
  </ScrollView>
)
```

### Chnage initiaRouteName in AppNavigation
```javascript
initialRouteName: 'CounterContainer',
```

### Create a redux
```sh
$ ignite generate redux CounterRedux

✔︎ App/Redux/CounterReduxRedux.js
```
### Add redux code
```javascript
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
```
### Add reducer to Redux/index.js
```javascript
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  github: require('./GithubRedux').reducer,
  search: require('./SearchRedux').reducer,
  counter: require('./CounterReduxRedux').reducer //<----
})
```
### Add Redux unit test
```javascript
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CounterReduxRedux'

test('syncIncreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.syncIncrease())
    expect(state.value).toBe(1)
})

test('syncDecreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.syncDecrease())
    expect(state.value).toBe(-1)
})
```

## Create a CounterSaga

### Create saga
```sh
$ ignite generate saga CounterSaga

✔︎ App/Sagas/CounterSagaSagas.js
```

### Create asyn test 
```javascript
test('asyncIncreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.asyncIncrease())
    expect(state.value).toBe(0)
})

test('asyncDecreasement', () => {
    const state = reducer(INITIAL_STATE, Actions.asyncDecrease())
    expect(state.value).toBe(0)
})
```

### Create async action creator
```javascript
  asyncIncrease: null,
  asyncDecrease: null
```

### Create async reduces
```javascript
...
export const asyncIncreaseReduce = state => state
export const asyncDecreaseReduce = state => state
...

...
[Types.ASYNC_INCREASE]: asyncIncreaseReduce,
[Types.ASYNC_DECREASE]: asyncDecreaseReduce
...
```
### Create counter sata test code
```javascript
import { put, call } from 'redux-saga/effects'
import { incrementAsync, delay } from '../../App/Sagas/CounterSaga'
import CounterActions from '../../App/Redux/CounterRedux'

const stepper = (fn) => (mock) => fn.next(mock).value

test('counter aysnc saga test', () => {
    const step = stepper(incrementAsync())
    expect(step()).toEqual(call(delay, 1000))
    expect(step()).toEqual(put(CounterActions.syncIncrease()))
})
```
### Implement sata code
```javascript
import { call, put } from 'redux-saga/effects'
import CounterActions from '../Redux/CounterRedux'

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export function * incrementAsync() {

  yield call(delay, 1000)
  yield put(CounterActions.syncIncrease())
}
```


## Test coverage
