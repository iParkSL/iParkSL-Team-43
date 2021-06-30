import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Tabs from './navigation/tab';

import {icons, COLORS, SIZES} from './constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {/* Tabs */}
        <Stack.Screen
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
            headerRight: ()=>(
              <TouchableOpacity
              style={{marginRight:SIZES.padding}}
              onPress={()=>console.log('pressed')}>
                <Image
                     source={icons.user}
                     resizeMode="contain"
                     style={{
                       width:25,
                       height:25,
                     }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
