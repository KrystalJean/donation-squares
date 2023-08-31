import { View, Text,ScrollView, StyleSheet } from 'react-native';
import Board from '../components/Board';
// import { ScrollView } from 'react-native-gesture-handler';

const student = 'Easton!';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Donation for: {student}</Text>
      <Board />
    </ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  board: {
    backgroundColor: '#333',

  }
});


export default Home;