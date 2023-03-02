import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    padding: 15,
    marginVertical: 15,
    alignItems: 'center',
    borderRadius: 25,
  }, 
  container_primary: {
    backgroundColor: "#FFD233",
  },
  container_secondary: {
    backgroundColor: "#FFFFFF"
  },
  container_tertiary: {
    width: "100%",
  },
  text: {
    fontFamily: "Gilroy",
    fontSize: 18
  },
  text_tertiary: {
    color: "grey",
    textDecorationLine: 'underline',
    fontFamily: "Gilroy"
  }
})

export default CustomButton