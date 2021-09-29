import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dia1509 from './features/Dia1509';
import Dia1609 from './features/Dia1609';
import Legenda from './features/Legenda';
import Cuidese from './features/Cuidese';
import Covid from './features/Covid';

const App = () => {

  return (
    <View style={styles.container}>
      <Covid/>
      <Dia1509/>
      <Dia1609/>
      <Legenda/>
      <Cuidese/>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2EE',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    marginTop: 8,
  },  
});