import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ColorCounter from "./../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [redColor, setRedColor] = useState(0);
  const [blueColor, setBlueColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);

  const setColor = (color, change) => {
    if (color === "red") {
      redColor + change > 255 || redColor + change < 0
        ? null
        : setRedColor(redColor + change);
    }
    if (color === "blue") {
      blueColor + change > 255 || blueColor + change < 0
        ? null
        : setBlueColor(blueColor + change);
    }
    if (color === "green") {
      greenColor + change > 255 || greenColor + change < 0
        ? null
        : setGreenColor(greenColor + change);
    }
  };

  return (
    <View>
      <ColorCounter
        colorName="red"
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        colorName="blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        colorName="green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
      />

      <View
        style={{
          height: 100,
          width: 100,
          marginTop: 20,
          textAlign: "center",
          backgroundColor: `rgb(${redColor},${greenColor},${blueColor})`,
        }}
      />
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

export default SquareScreen;
