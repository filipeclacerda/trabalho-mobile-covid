import React from 'react';
import { StyleSheet, View } from 'react-native';
import Quadrado from '../components/Quadrado';

const Legenda = () => {
    return (
        <View style={styles.container}>
          <View>
            <Quadrado
                cor='#DF8021'
                texto="UTI SUS"
              />
              <Quadrado
                cor='#44AA8F'
                texto="UTI COVID SUS"
              />
              <Quadrado
                cor='#AA5344'
                texto="UTI PRIVADA"
              />
            </View>
            <View>
              <Quadrado
                cor='#7c5d9a'
                texto="ENFERMARIA COVID SUS"
              />
              <Quadrado
                cor='#345fd0'
                texto="UTI GERAL"
              />
            </View>
        </View>
    )
}
export default Legenda;

const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      flexDirection: 'row',
      backgroundColor: '#F6F2EE',
      marginTop: -70,
      marginBottom: -30,
      marginLeft: 20,
    },
  });
