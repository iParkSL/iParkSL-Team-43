import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons, COLORS, FONTS, SIZES} from '../constants';

import SplashScreen from './auth/SplashScreen';
import SignInScreen from './auth/SignInScreen';
import SignUpScreen from './auth/SignUpScreen';
import Home from './customer/Home';
import {
  findPark,
  mybookings,
  Payments,
  visitedParks,
} from './customer/functions/index';

const RootStack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const RootStackScreen = ({navigation}) => {
  return (
    <NavigationContainer theme={theme}>
      <RootStack.Navigator headerMode="screen">
        <RootStack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={() => console.log('pressed')}>
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),

            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('pressed')}>
                <Image
                  source={icons.user}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <RootStack.Screen
          name="findPark"
          component={findPark}
          options={{
            title: 'Find Park',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="mybookings"
          component={mybookings}
          options={{
            title: 'My Bookings',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="Payments"
          component={Payments}
          options={{
            title: 'Payments',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <RootStack.Screen
          name="visitedParks"
          component={visitedParks}
          options={{
            title: 'visited Parks',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;

const Tab = createBottomTabNavigator();

const tabOptions = {
  showLabel: false,
  style: {
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
    backgroundColor: '#ffb907',
  },
};

function Tabs() {
  return (
    <Tab.Navigator
    tabBarOptions={tabOptions}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        const tintColor = focused ? COLORS.white : COLORS.black;
        switch (route.name) {
          case 'home':
            return (
              <Image
                source={icons.home}
                resizeMode="contain"
                style={{
                  tintColor: tintColor,
                  width: 30,
                  height: 30,
                }}
              />
            );
          case 'search':
            return (
              <Image
                source={icons.search}
                resizeMode="contain"
                style={{
                  tintColor: tintColor,
                  width: 30,
                  height: 30,
                }}
              />
            );
          case 'setting':
            return (
              <Image
                source={icons.setting}
                resizeMode="contain"
                style={{
                  tintColor: tintColor,
                  width: 30,
                  height: 30,
                }}
              />
            );
        }
      },
    })}>
    <Tab.Screen name="home" component={Home} />
    <Tab.Screen name="search" component={Home} />
    <Tab.Screen name="setting" component={Home} />
  </Tab.Navigator>
    
  );
}
