import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native';
import Header from './Components/Header';
import Todo from './Components/Todo';

export default function App() {
  return (
    <View  style={styles.container}>
      <View>
        <Header/>
      </View>

      <View style={styles.todoContainer}>
        <Todo/>
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    paddingTop: 20
  },
  textStyle: {
    color: "white"
  },
  todoContainer: {
    flex: 1
  }
});
