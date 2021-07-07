/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import type {Node} from 'react';

import RootStackScreen from './screens/RootStackScreen';


const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen/>
    </NavigationContainer>
  );
}

export default App;


