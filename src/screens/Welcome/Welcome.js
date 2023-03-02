import { View, Text, StyleSheet, Modal, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton.js'
import { MaterialIcons } from '@expo/vector-icons';
import CustomInput from '../../components/CustomInput.js'

const Welcome = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const onSignUpPressed = () => {
    console.log("Sign up")
  }

  const onLoginPressed = () => {
    console.warn("login")
  }

  const onForgotPressed = () => {
    console.log("forgot")
  }

  return (
    <View style={styles.root}>
      <Text style={{ fontFamily: "GilroyBold", fontSize: 24, height: 100 }}>Welcome!</Text>
      <CustomButton onPress={onSignUpPressed} text="Sign up" type="primary" />
      <CustomButton onPress={() => setModalOpen(true)} text="Log in" type="secondary" />
      <CustomButton onPress={onForgotPressed} text="Forgot password?" type="tertiary" />
      <Modal visible={modalOpen}  animationType="slide" transparent={true}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.modal}>
            <MaterialIcons style={styles.modal_toggle} name="close" size={24} onPress={() => setModalOpen(false)} />
            <CustomInput placeholder="Name" value={user} setValue={setUser} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secure />
            <CustomButton onPress={onLoginPressed} text="Log in" type="secondary" />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  modal: {
    padding: 20,
    alignItems: 'center',
    marginTop: "100%",
    height: "100%",
    backgroundColor: "#d6d6d6",
    borderRadius: 15,
  },
  modal_toggle: {
    alignSelf: "flex-end",
    margin: 10
  }
})

export default Welcome