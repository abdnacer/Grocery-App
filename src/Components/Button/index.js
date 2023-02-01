import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { fonts } from '../../public'

const Button = ({onPress, text_btn}) => {
  return (
    <TouchableHighlight style={styles.btn} onPress={onPress}>
      <Text style={styles.text_btn}>{text_btn}</Text>
    </TouchableHighlight>
  )
}

export default Button

const styles = StyleSheet.create({
  btn: {
    width: 230,
    height:50,
    backgroundColor: "#8BC34A",
    alignSelf:'center',
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center'
  },
  text_btn: {
    color: "#fff",
    fontSize:20,
    fontFamily: fonts.ExtraBold
  }
})