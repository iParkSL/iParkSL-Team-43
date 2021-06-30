import React from 'react';
<<<<<<< HEAD
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens/';

import {icons, COLORS} from '../constants';

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
            case 'bookmark':
              return (
                <Image
                  source={icons.bookmark}
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
      <Tab.Screen name="bookmark" component={Home} />
      <Tab.Screen name="setting" component={Home} />
    </Tab.Navigator>
  );
};

=======
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import Bookmark from '../screens/BookmarkScreen';
import Setting from '../screens/SettingScreen';

import {MainStackNavigator} from '../navigation/StackNavigator';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
  
    
  
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#FFA500',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      
      
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/home_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text style={{fontSize: 12}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/search_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text style={{fontSize: 12}}>search</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/bookmark_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text style={{fontSize: 12}}>Bookmark</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/menu_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                }}
              />
              <Text style={{fontSize: 12}}>Setting</Text>
            </View>
          ),
        }}
      />
    

    </Tab.Navigator>
    
    
  
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

>>>>>>> 7cc9a7b0a76facccf13db7cd45587ccbdd7204ad
export default Tabs;
