import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home,search} from '../../screens/owner';

import {icons, COLORS} from '../../constants';
import { NavigationContainer } from '@react-navigation/native';

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

const Tabs = () => {
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
            /*case 'search':
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
              );*/
            case 'scanner':
              return (
                <Image
                  source={icons.scanner}
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
  
      <Tab.Screen name="scanner" component={Home} />
      <Tab.Screen name="setting" component={Home} />
    </Tab.Navigator>
    
  );
};

export default Tabs;
