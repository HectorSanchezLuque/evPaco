import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { PantallasProvider } from './Components/Context';
import AudioPlayer from './Components/AudioPlayer';
import AudioRecorder from './Components/AudioRecorder';

const Tab = createBottomTabNavigator();

const App = () => (
  <PantallasProvider>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AudioPlayer" component={AudioPlayer} />
        <Tab.Screen name="AudioRecorder" component={AudioRecorder} />
      </Tab.Navigator>
    </NavigationContainer>
  </PantallasProvider>
);

export default App;