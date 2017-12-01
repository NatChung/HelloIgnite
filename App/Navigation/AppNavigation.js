import { StackNavigator } from 'react-navigation'
import CounterContainer from '../Containers/CounterContainer'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CounterContainer: { screen: CounterContainer },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CounterContainer',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
