import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import CounterActions from '../Redux/CounterRedux'
import Counter from '../Components/Counter'

// Styles
import styles from './Styles/CounterContainerStyle'

class CounterContainer extends Component {


  render = () => (
    <ScrollView style={styles.container}>
      <Counter value={this.props.value}
        onSyncIncrease={this.props.increase}
        onSyncDecrease={this.props.decrease}
        onAsyncIncrease={this.props.asyncIncrease}
        onAsyncDecrease={this.props.asyncDecrease} />
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
    decrease: () => dispatch(CounterActions.syncDecrease()),
    asyncIncrease: () => dispatch(CounterActions.asyncIncrease()),
    asyncDecrease: () => dispatch(CounterActions.asyncDecrease())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
