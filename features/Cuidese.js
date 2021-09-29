import React, { useState } from 'react';
import { StyleSheet, View, Image, Animated } from 'react-native';

const Cuidese = () => {

    const [altura] = useState(new Animated.Value(60));
    const [largura] = useState(new Animated.Value(160));

    Animated.loop(
        Animated.sequence([
            Animated.parallel([
                Animated.timing(altura, {toValue:100, duration:300}),
                Animated.timing(largura, {toValue:260, duration:300}),
            ]),
            Animated.parallel([
                Animated.timing(altura, {toValue:60, duration:300}),
                Animated.timing(largura, {toValue:160, duration:300}),
            ]), 
         
        ])      
      ).start();
  

    return (
        <Animated.View style={styles.container}>
            <Animated.Image
                source={require('../images/cuide-se2.jpg')}
                style={{width:largura, height:altura}}
            />            
        </Animated.View>
    )
}
export default Cuidese;

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginTop: 12,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      alignItems: 'center',
    },
  });