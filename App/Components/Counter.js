import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './Styles/CounterStyle'
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native'
import RoundedButton from './RoundedButton'

const BlueButton = (props) => (
  <TouchableOpacity style={styles.increaseButton}>
    <Text style={styles.buttonText} onPress={props.onPress}>{props.text}</Text>
  </TouchableOpacity>
)

const RedButton = (props) => (
  <TouchableOpacity style={styles.decreaseButton}>
    <Text style={styles.buttonText} onPress={props.onPress}>{props.text}</Text>
  </TouchableOpacity>
)

export default class Counter extends Component {
  // // Prop type warnings
  static propTypes = {
    value: PropTypes.number,
    onSyncIncrease: PropTypes.func,
    onSyncDecrease: PropTypes.func,
    onAsyncIncrease: PropTypes.func,
    onAsyncDecrease: PropTypes.func
  }
  //
  // Defaults for props
  static defaultProps = {
    value: 0
  }

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
}
