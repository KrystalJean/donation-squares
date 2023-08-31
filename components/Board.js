import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Square from './Square';


const Board = () => {
  const numberOfSquares = 31;
  const columns = 3; // Number of columns in the grid

  const rows = Math.ceil(numberOfSquares / columns);
  const squares = [];

  for (let i = 0; i < numberOfSquares; i++) {
    squares.push(<Square key={i} number={i + 1} />);
  }

  return (
    <View style={styles.board}>
      {squares}
    </View>
  );
};



const styles = StyleSheet.create({
  board: {
    backgroundColor: '#eee',
    height: 'auto',
    width: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default Board;
