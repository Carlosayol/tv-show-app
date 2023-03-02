import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

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
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
});

export default CustomInput;
