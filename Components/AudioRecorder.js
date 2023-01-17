import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import ARPantalla1 from './ARPantalla1';
import ARPantalla2 from './ARPantalla2'
import {PantallasProvider} from './Context';
const Stack = createStackNavigator();

const AudioRecorder = () => {

    return (
        <PantallasProvider>
            <Stack.Navigator options="false">
                <Stack.Screen name="Pantalla1" component={ARPantalla1} />
                <Stack.Screen name="Pantalla2" component={ARPantalla2} />
            </Stack.Navigator>
        </PantallasProvider>
    )
}
const styles = StyleSheet.create({
    layout: { flex: 1, justifyContent: 'center', padding: 8, },
    title: { margin: 24, fontSize: 18, fontWeight: 'bold', textAlign: 'center', },
});
export default AudioRecorder;