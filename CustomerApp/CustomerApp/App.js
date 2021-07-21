import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
//import { NavigationContainer } from '@react-navigation/native';
//import StackScreen from './navigation/customer/navigator';

import TabsC from './navigation/tab';
//import AppN from './screens/Drawer';
import {
  findPark,
  mybookings, 
  Payments, 
  visitedParks,

} from './screens/customer/functions/index';

import {icons, COLORS, SIZES} from './constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};


const Stack = createStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
    
            <Stack.Screen
              name="Home"
              component={TabsC}
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
            <Stack.Screen
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
            <Stack.Screen
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
            <Stack.Screen
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
            <Stack.Screen
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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
