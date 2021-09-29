import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Covid = () => { 

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {}]}
    >COVID-19 JUIZ DE FORA</Text>
    </View>
  );
}
export default Covid;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: '#F6F2EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 14,
  }
});