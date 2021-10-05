import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={styles.text}>{colorName}</Text>
      <Button title={`Increase${colorName}`} onPress={() => onIncrease()} />
      <Button title={`Decrease${colorName}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "green",
    textAlign: "center",
  },
});

export default ColorCounter;
