import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { MainStackNavigator } from './navigation/StackNavigator';
import Tab from './navigation/tab';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (

    
    <NavigationContainer>
    
    <Tab/>

  </NavigationContainer>
    
  );
};

export default App;
