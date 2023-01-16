import * as React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useContext, useState } from 'react';
import PantallasContext from './Context';

export default function Pantalla1({ navigation }) {
    const [text, setText] = useState('');
    const { name, setName } = useContext(PantallasContext);
  
    const onSubmit = () => {
      setName(text);
      navigation.navigate('Pantalla2');
    };
  
    return (
      <View style={styles.container}>
        <Text>Término de búsqueda: {text}</Text>
        <View style={{ padding: 2 }}>
          <TextInput
            onChangeText={(text) => setText(text)}
            style={{
              width: 385,
              color: 'white',
              fontSize: 30,
              backgroundColor: 'blue',
              textAlign: 'center',
              height: 55,
            }}
            value={text}
          />
        </View>
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'black',
      width: '60%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 40,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
  });