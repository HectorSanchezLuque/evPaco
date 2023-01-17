import * as React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useContext, useState } from 'react';
import PantallasContext from './Context';

export default function ARPantalla2({ navigation }) {
    const [text, setText] = useState('');
    const { name, setName } = useContext(PantallasContext);

    const onSubmit = () => {
        setName(text);
        navigation.navigate('ARPantalla1');
    };

    return (
    <View>

        
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