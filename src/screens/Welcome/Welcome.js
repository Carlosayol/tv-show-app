import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton.js'



const Welcome = () => {
  const onSignUpPressed = () => {
    console.log("Sign up")
  }
  
  const onLoginPressed = () => {
    console.warn("Login")
  }

  const onForgotPressed = () => {
    console.log("forgot")
  }

  return (
    <View style={styles.root}>
      <Text style={{ fontFamily: "GilroyBold", fontSize: 24, height: 100}}>Welcome!</Text>
      <CustomButton onPress={onSignUpPressed} text="Sign up" type="primary"/>
      <CustomButton onPress={onLoginPressed} text="Log in" type="secondary"/>
      <CustomButton onPress={onForgotPressed} text="Forgot password?" type="tertiary"/>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
})

export default Welcome