import { View, Text, StyleSheet, Modal, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import CustomButton from "../../components/CustomButton.js";
import CustomInput from "../../components/CustomInput.js";
import Constants from "../../utils/Constants";

const validCredentials = [
  {
    user: "maria",
    password: "password",
  },
  {
    user: "pedro",
    password: "123456",
  },
];

const Welcome = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.log("Sign up");
  };

  const onLoginPressed = () => {
    setModalOpen(false);
    navigation.navigate("Home");

    // if (validCredentials.some((cred) => cred.user === user && cred.password === password)) {
    //   setModalOpen(false);
    //   navigation.navigate("Home");
    // } else {
    //   console.warn("Wrong credentials");
    // }
  };

  const onForgotPressed = () => {
    console.log("forgot");
  };

  return (
    <View style={styles.root}>
      <Text style={{ fontFamily: "GilroyBold", fontSize: 24, height: 100 }}>Welcome!</Text>
      <CustomButton onPress={onSignUpPressed} text="Sign up" type="Primary" />
      <CustomButton onPress={() => setModalOpen(true)} text="Log in" type="Secondary" />
      <CustomButton onPress={onForgotPressed} text="Forgot password?" type="Tertiary" />

      <Modal visible={modalOpen} animationType="slide" transparent={true}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.modal}>
            <MaterialIcons style={styles.modalToggle} name="close" size={24} onPress={() => setModalOpen(false)} />
            <CustomInput placeholder="Name" value={user} setValue={setUser} />
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secure />
            <CustomButton onPress={onLoginPressed} text="Log in" type="Secondary" />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modal: {
    padding: 20,
    alignItems: "center",
    marginTop: "100%",
    height: "100%",
    backgroundColor: Constants.secondaryColor,
    opacity: 0.8,
    borderRadius: 15,
  },
  modalToggle: {
    alignSelf: "flex-end",
    margin: 10,
    color: Constants.tertiaryColor,
  },
});

export default Welcome;
