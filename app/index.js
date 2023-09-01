import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GridRow from '../components/GridRow';
import CreateBoardForm from '../components/CreateBoardForm';

const App = () => {
  const [boardConfig, setBoardConfig] = useState(null);

  const handleCreateBoard = (numSquares) => {
    const numRows = Math.ceil(numSquares / 7);
    setBoardConfig({ numSquares, numRows });
  };

  const renderRows = () => {
    if (!boardConfig) {
      return null;
    }

    const { numSquares, numRows } = boardConfig;

    const rows = [];

    for (let row = 0; row < numRows; row++) {
      const rowNumbers = [];

      for (let col = 1; col <= 7; col++) {
        const squareNumber = row * 7 + col;
        if (squareNumber <= numSquares) {
          rowNumbers.push(squareNumber);
        } else {
          rowNumbers.push('Any'); // Add "Any" for the extra squares
        }
      }

      rows.push(
        <GridRow key={row} rowNumbers={rowNumbers} />
      );
    }

    return rows;
  };

  return (
    <View style={styles.container}>
      <CreateBoardForm onCreateBoard={handleCreateBoard} />
      <View style={styles.gridContainer}>
        {renderRows()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  gridContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'teal',
    // padding: 5,
  },
});

export default App;
