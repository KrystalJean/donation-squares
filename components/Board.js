import React from 'react';
import { View, Text } from 'react-native';
import Square from './Square';


const Board = () => {
  const numberOfSquares = 5; // Change this to the desired number of repetitions
  
  const RepeatedComponent = () => {
    return (
      <View>
        <Square />
      </View>
    );
  };

  return (
    <View>
      {Array.from({ length: numberOfSquares }).map((_, index) => (
        <RepeatedComponent key={index} />
      ))}
    </View>
  );
};

export default Board;
