import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  syncButton: {
    width: Metrics.screenWidth/3

  },

  asyncButton: {
    width: Metrics.screenWidth/3,
  },

  result:{
    width: Metrics.screenWidth/3
  },

  resultText: {
    fontSize: 60,
    margin: 10,
    width: Metrics.screenWidth/3 -  20,
    marginVertical: Metrics.baseMargin,
    textAlign: 'center',
    top: 20
  },

  decreaseButton: {
    height: 45,
    width: 100,
    borderRadius: 5,
    margin: 15,
    backgroundColor: Colors.fire,
    justifyContent: 'center'
  },

  increaseButton: {
    height: 45,
    width: 100,
    borderRadius: 5,
    margin: 15,
    backgroundColor: Colors.facebook,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.snow,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    marginVertical: Metrics.baseMargin
  }
})
