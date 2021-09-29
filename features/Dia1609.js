import React, {useState} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Animated } from 'react-native';

const Dia1609 = () => {

    const valores = [56.76, 28.57, 76.52, 37.76, 62.63];

    const [altura] = useState([]);
    const [opacity] = useState([]); 
    let alturaInterpolada = [];
    valores.forEach((val, i) => {
        altura.push(new Animated.Value(0))
        opacity.push(new Animated.Value(0))
    });

    alturaInterpolada.push(altura[0].interpolate({
        inputRange: [0,100],
        outputRange: ['0%', '80%'],
    })
    )


    const gerarGrafico = () => {
        Animated.sequence([
            Animated.parallel([
                Animated.timing(altura[0], {toValue:valores[0], duration:700}),
                Animated.timing(opacity[0], {toValue:valores[0], duration:700}),
            ]),
            Animated.parallel([
                Animated.timing(altura[1], {toValue:valores[1], duration:700}),
                Animated.timing(opacity[1], {toValue:valores[1], duration:700}),
            ]),
            Animated.parallel([
                Animated.timing(altura[2], {toValue:valores[2], duration:700}),
                Animated.timing(opacity[2], {toValue:valores[2], duration:700}),
            ]),
            Animated.parallel([
                Animated.timing(altura[3], {toValue:valores[3], duration:700}),
                Animated.timing(opacity[3], {toValue:valores[3], duration:700}),
            ]),
            Animated.parallel([
                Animated.timing(altura[4], {toValue:valores[4], duration:700}),
                Animated.timing(opacity[4], {toValue:valores[4], duration:700}),
            ]),
        ]).start()
    }

    return (
        <Animated.View style={styles.container}>
            <Text 
                style={styles.text}> Boletim Epidemiológico {'\n'} 16 de setembro de 2021</Text>
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
export default Dia1609;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: '#F6F2EE',
        alignItems: 'center',
        marginTop: -40,
        marginBottom: -30,
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
