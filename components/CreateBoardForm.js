import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const CreateBoardForm = ({ onCreateBoard }) => {
  const [numSquares, setNumSquares] = useState(31);

  const handleCreateBoard = () => {
    onCreateBoard(numSquares);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={numSquares.toString()}
        onChangeText={text => setNumSquares(parseInt(text) || 0)}
        keyboardType="numeric"
      />
      <Button title="Create Board" onPress={handleCreateBoard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default CreateBoardForm;
