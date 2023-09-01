import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router'

import GridRow from '../components/GridRow';
import CreateBoardForm from '../components/CreateBoardForm';

const App = () => {
  const router = useRouter();
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
    <SafeAreaView >
      <Stack.Screen
      options={{
        headerStyle: { backgroundColor: 'white' },
        headerShadowVisible: false,
        headerTitle: ' ❤️ Donation Cards',
      }}
      />

      <ScrollView>
        <View style={styles.container}>

          <CreateBoardForm onCreateBoard={handleCreateBoard} />

          <View style={styles.gridContainer}>{renderRows()}</View>

        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    // flex: 1,
    height: '100vh',
    width: '100%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    width: '100%',
    maxWidth: '500px',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'teal',
    // padding: 5,
    
  },
  pink: {
    backgroundColor: 'pink',
  },
  purple: {
    backgroundColor: 'purple',
  }
});

export default App;
