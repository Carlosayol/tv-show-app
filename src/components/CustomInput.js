import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import Constants from "../utils/Constants";

const CustomInput = ({ value, setValue, placeholder, secure }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 40,
  },
  input: {
    fontSize: 20,
    color: Constants.tertiaryColor,
    borderBottomColor: Constants.tertiaryColor,
    borderBottomWidth: 2,
  },
});

export default CustomInput;
