import React from "react";
import { StyleSheet, View, Animated, Text } from "react-native";

const Quadrado = ({ cor, texto }) => {
    return (
        <View style={styles.container}>
            <Animated.View
                style={{width:18, height:18, backgroundColor:cor
                }}
              >
              </Animated.View>
              <Text style={styles.text}>{texto}</Text>
        </View>
    )
}
export default Quadrado;

const styles = StyleSheet.create({
    container: {
      flex: 0.2,
      flexDirection: 'row',
      backgroundColor: '#F6F2EE',
      alignItems: 'center',
      margin: 2,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold', 
        margin: 4,
    },
    viewAnimada: {
      flex: 0.1,
      flexDirection: 'row',
      margin: 4,

    },
  });
