import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text style={styles.text}>Enter Name</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newVal) => setName(newVal)}
      />

      <Text style={styles.text}>My Name Is : {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "green",
    textAlign: "center",
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
