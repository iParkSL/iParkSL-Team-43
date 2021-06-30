import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

<<<<<<< HEAD
import {Home} from '../screens/HomeScreen';
=======
import Home from '../screens/HomeScreen';
>>>>>>> 7cc9a7b0a76facccf13db7cd45587ccbdd7204ad

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
<<<<<<< HEAD
          backgroundColor: '#FFA500', //#
=======
          backgroundColor: '#FFA500',
>>>>>>> 7cc9a7b0a76facccf13db7cd45587ccbdd7204ad
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
