import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './auth/SplashScreen';
import SignInScreen from './auth/SignInScreen';
import SignUpScreen  from './auth/SignUpScreen';
import Home from './owner/home';
import Tabs from './owner/tab';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="SignInScreen" component={SignInScreen} />
      <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <RootStack.Screen name="Home" component={Tabs} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootStackScreen;
