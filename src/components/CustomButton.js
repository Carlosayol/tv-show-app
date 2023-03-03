import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Constants from "../utils/Constants";

const CustomButton = ({ onPress, text, type }) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container${type}`]] }>
      <Text style={[styles.text, styles[`text${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 15,
    marginVertical: 15,
    alignItems: "center",
    borderRadius: 25,
  },
  containerPrimary: {
    backgroundColor: Constants.primaryColor,
  },
  containerSecondary: {
    backgroundColor: "#FFFFFF",
  },
  containerTertiary: {
    width: "100%",
  },
  text: {
    fontFamily: "Gilroy",
    fontSize: 18,
  },
  textTertiary: {
    color: Constants.tertiaryColor,
    textDecorationLine: "underline",
    fontFamily: "Gilroy",
  },
});

export default CustomButton;
