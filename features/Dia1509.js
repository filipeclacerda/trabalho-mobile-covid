import React, {useEffect, useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Animated } from 'react-native';

const Dia1509 = () => {

    const valores = [57.92, 29.29, 80.87, 34.69, 64.97];

    const [altura] = useState([]);
    const [opacity] = useState([]);
    let alturaInterpolada = [];
    valores.forEach((val, i) => {
        altura.push(new Animated.Value(0))
        opacity.push(new Animated.Value(0))
    });


    const gerarGrafico = () => {
        valores.forEach((val, i)=>{
            Animated.timing(altura[i], {toValue:val, duration:1000}).start();  
            Animated.timing(opacity[i], {toValue:1, duration:1000}).start();
        })
    }

    return (
        <Animated.View style={styles.container}>
            <Text 
                style={styles.text}> Boletim Epidemiológico {'\n'} 15 de setembro de 2021</Text>
            <Animated.View 
                style={styles.viewGraficos}>
                <Animated.View>
                    <Animated.Text style={{opacity:opacity[0]}}>{valores[0]}%</Animated.Text>
                    <Animated.View
                        style={[styles.viewAnimadas, {height:altura[0], backgroundColor:'#DF8021'}]}
                    >
                    </Animated.View>
                </Animated.View>
                <Animated.View>
                    <Animated.Text style={{opacity:opacity[1]}}>{valores[1]}%</Animated.Text>
                    <Animated.View
                        style={[styles.viewAnimadas, {height:altura[1], backgroundColor:'#44AA8F'}]}
                    >
                    </Animated.View>
                </Animated.View>
                <Animated.View>
                    <Animated.Text style={{opacity:opacity[2]}}>{valores[2]}%</Animated.Text>
                    <Animated.View
                        style={[styles.viewAnimadas, {height:altura[2], backgroundColor:'#AA5344'}]}
                    >
                    </Animated.View>
                </Animated.View>  
                <Animated.View>
                    <Animated.Text style={{opacity:opacity[3]}}>{valores[3]}%</Animated.Text>
                    <Animated.View
                        style={[styles.viewAnimadas, {height:altura[3], backgroundColor:'#7c5d9a'}]}
                    >
                    </Animated.View>
                </Animated.View> 
                <Animated.View>  
                    <Animated.Text style={{opacity:opacity[4]}}>{valores[4]}%</Animated.Text>
                    <Animated.View
                        style={[styles.viewAnimadas, {height:altura[4], backgroundColor:'#345fd0'}]}
                    >
                    </Animated.View>
                </Animated.View>      
            </Animated.View>
            <Animated.View style={styles.viewBotoes}>
                <TouchableOpacity
                    style={styles.botoes}
                    onPress={gerarGrafico}
                >
                <Text 
                    style={{fontWeight:'bold', fontSize:12, margin: 2}}>Gerar gráfico</Text>
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}
export default Dia1509;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginBottom: -40,
        marginTop: 20,
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      alignItems: 'center',
      marginBottom: -20,
    },
    viewGraficos: {
      flex: 0.5,
      flexDirection: 'row',
      alignItems: 'flex-end'
    },
    viewAnimadas: {
      width: 40,
      margin: 2, 
      alignItems: 'center',
    },
    viewTextos: {
      fontWeight: 'bold', 
      fontSize: 10,
    },
    viewBotoes: {
        margin: 4,
    }, 
    botoes: {
      backgroundColor: '#DDDDDD',
      padding: 4,
      alignItems: 'center',
    }
  });