import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const userName = "Mohsen";
  return (
    <View>
      <Text style={styles.titleStyle}>Getting Started with react Ntive</Text>
      <Text style={styles.subTitleStyle}>{`My Name is ${userName}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45,
    color: "green",
    textAlign: "center",
  },
  subTitleStyle: {
    fontSize: 20,
    color: "green",
    textAlign: "center",
  },
});

export default ComponentsScreen;
