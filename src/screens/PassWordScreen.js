import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const PassWordScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text style={styles.text}>Enter PassWord</Text>

      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newVal) => setPassword(newVal)}
      />

      {password.length < 5 ? (
        <Text style={styles.text}>
          Your Password must be longer than 5 char
        </Text>
      ) : null}
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

export default PassWordScreen;
