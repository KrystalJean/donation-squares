import { View, Text, StyleSheet } from 'react-native';

const Square = ({ number }) => {
  return (
    <View style={styles.square}>
      <Text style={styles.number}>{number}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    backgroundColor: 'teal',
    color: 'white',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 18,
    color: 'white',
  },
});

export default Square