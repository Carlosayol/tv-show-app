import { View, Text, StyleSheet, Modal, KeyboardAvoidingView, ImageBackground } from "react-native";
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

const image = { uri: "https://www.themoviedb.org/t/p/original/JFDrOxBFxeJrALLKWHWcM8i1sp.jpg" };

const Welcome = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const onSignUpPressed = () => {
    console.log("Sign up");
  };

  const onLoginPressed = () => {
    if (validCredentials.some((cred) => cred.user === user && cred.password === password)) {
      setModalOpen(false);
      navigation.navigate("Home");
    } else {
      console.warn("Wrong credentials");
    }
  };

  const onForgotPressed = () => {
    console.log("forgot");
  };

  return (
    <View style={styles.root}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Welcome!</Text>

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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontFamily: "GilroyBold",
    fontSize: 24,
    height: 100,
    color: Constants.primaryText,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0, 0.40)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    flex: 1,
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
