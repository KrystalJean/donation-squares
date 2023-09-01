import React from 'react';
import { View, StyleSheet } from 'react-native';
import Square from '../components/Square';

const GridRow = ({ rowNumbers }) => {
  return (
    <View style={styles.gridRow}>
      {rowNumbers.map((number) => (
        <Square key={number} number={number} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 5,
    
  },
});

export default GridRow;
