import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import CounterActions from '../Redux/CounterReduxRedux'
import Counter from '../Components/Counter'

// Styles
import styles from './Styles/CounterContainerStyle'

class CounterContainer extends Component {


  render = () => (
    <ScrollView style={styles.container}>
      <Counter value={this.props.value}
        onSyncIncrease={this.props.increase}
        onSyncDecrease={this.props.decrease} />
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.counter.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(CounterActions.syncIncrease()),
    decrease: () => dispatch(CounterActions.syncDecrease())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
