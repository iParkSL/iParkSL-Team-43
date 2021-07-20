import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
//import { NavigationContainer } from '@react-navigation/native';
//import StackScreen from './navigation/customer/navigator';

import TabsC from './navigation/tab';
import TabO from './navigation/owner/tab';
import {
  findPark,
  mybookings, 
  Payments, 
  visitedParks,

} from './screens/customer/functions/index';

import {
  AddNewPark,
  Earnings,
  parkUpdate,
  Scan,
  RecentBookings,
  Switch,
  myParks,
  receivePayments,
} from './screens/owner/functions/index';
import {icons, COLORS, SIZES} from './constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};
const userRole = 'customer';
//const userRole = 'Owner';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {userRole == 'customer' ? (
          <>
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
            
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              component={TabO}
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
              name="AddNewPark"
             component={AddNewPark}
              options={{
                title: 'Add Park',
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
              name="Scan"
              component={Scan}
              options={{
                title: 'QR Scan',
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
              name="RecentBookings"
              component={RecentBookings}
              options={{
                title: 'Recent Bookings',
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
              name="receivePayments"
              component={receivePayments}
              options={{
                title: 'Receive Payments',
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
              name="Switch"
              component={Switch}
              options={{
                title: 'Switch',
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
              name="myParks"
              component={myParks}
              options={{
                title: 'My Parks',
                headerStyle: {
                  backgroundColor: COLORS.orange,
                },
                headerTintColor: COLORS.black,
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
