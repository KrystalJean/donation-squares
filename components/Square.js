import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Square = ({ number }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const squareStyles = [
    styles.gridColumn,
    isPressed && styles.pressedSquare, // Apply pressedSquare style when isPressed is true
  ];

  const textStyles = [styles.text, isPressed && styles.pressedText];

  return (
    <TouchableHighlight
      style={squareStyles}
      onPress={isPressed ? null : handlePress}
      underlayColor="teal" // To disable the default highlight effect
    >
      <Text style={textStyles}>${number}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  gridColumn: {
    flex: 1,
    backgroundColor: 'white',
    // margin: 1,
    // paddingVertical: 10,
    borderColor: 'teal',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  pressedSquare: {
    backgroundColor: 'teal', // Change the background color when pressed -see underlayColor in TouchableHighlight
  },
  text: {
    color: 'teal',
  },
  pressedText: {
    color: 'white',
  },
});

export default Square;
