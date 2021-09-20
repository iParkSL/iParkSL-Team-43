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
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images, icons, COLORS, FONTS, SIZES} from '../constants';

import SplashScreen from './auth/SplashScreen';
import SignInScreen from './auth/SignInScreen';
import SignUpScreen from './auth/SignUpScreen';
import Home from './owner/home';
import Setting from './DrawerContent/settings';
import AboutUs from './DrawerContent/aboutUs';
import ContactUs from './DrawerContent/contactUs';
import NearBySpots from './DrawerContent/aboutUs';
import RateUs from './DrawerContent/rateUs';
import {DrawerContent} from './DrawerContent';
import {
  AddNewPark,
  stopwatch,
  AddNewParkNext,
  Charges,
  parkUpdate,
  Scan,
  RecentBookings,
  Switch,
  myParks,
  receivePayments,
  ViewPark,
  viewMap,
  MapScreen,
  SlotUP,
  forgetPassword,
  resetPassword,
  checkPasscode,
  updatePark,
  timerUpdate,
} from '../screens/owner/functions/index';

const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};
const RootStackScreen = ({navigation}) => {
  return (
    
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
          name="Tabs"
          component={Tabs}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={() => navigation.toggleDrawer()}>
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

            // headerRight: () => (
            //   <TouchableOpacity
            //     style={{marginRight: SIZES.padding}}
            //     onPress={() => console.log('pressed')}>
            //     <Image
            //       source={icons.user}
            //       resizeMode="contain"
            //       style={{
            //         width: 25,
            //         height: 25,
            //       }}
            //     />
            //   </TouchableOpacity>
            // ),
          }}
        />
        <RootStack.Screen
          name="viewMap"
          component={viewMap}
          options={{
            title: 'View Map',
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
        <RootStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            title: 'Pick Place',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            // headerRight: () => (
            //   <TouchableOpacity style={COLORS.orange}>
            //     <Text>Save</Text>
            //   </TouchableOpacity>
            // ),
          }}
        />
        <RootStack.Screen
          name="AddNewParkNext"
          component={AddNewParkNext}
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

        <RootStack.Screen
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
        <RootStack.Screen
          name="SlotUP"
          component={SlotUP}
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
        <RootStack.Screen
          name="timerUpdate"
          component={timerUpdate}
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
          name="stopwatch"
          component={stopwatch}
          options={{
            title: 'Timer',
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
        <RootStack.Screen
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

        <RootStack.Screen
          name="viewPark"
          component={ViewPark}
          options={{
            title: 'View Park',
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
          name="updatePark"
          component={updatePark}
          options={{
            title: 'Update Park',
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
          name="Charges"
          component={Charges}
          options={{
            title: 'Charges',
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
        <RootStack.Screen
          name="forgetPassword"
          component={forgetPassword}
          options={{
            title: ' ',
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
          name="resetPassword"
          component={resetPassword}
          options={{
            title: ' ',
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
          name="checkPasscode"
          component={checkPasscode}
          options={{
            title: ' ',
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
 
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={RootStackScreen} />
        <Drawer.Screen name="Near By Spots" component={NearBySpots} />
        <Drawer.Screen name="Settings" component={Setting} />
        <Drawer.Screen name="About us" component={AboutUs} />
        <Drawer.Screen name="Rate us" component={RateUs} />
        <Drawer.Screen name="Contact us" component={ContactUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};



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
                    width: 40,
                    height: 40,
                  }}
                />
              );
            case 'viewMap':
              return (
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 40,
                    height: 40,
                  }}
                />
              );
            case 'setting':
              return (
                <Image
                  source={icons.operator}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 40,
                    height: 40,
                  }}
                />
              );
          }
        },
      })}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="viewMap" component={viewMap} />
      <Tab.Screen name="setting" component={Home} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    // backgroundColor: '#fff',
    // marginLeft:5,

    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cdd7de',
    paddingBottom: 3,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -5,
    paddingLeft: 10,
    color: '#05375a',
    // borderWidth:1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ffb907',
  },
  button: {
    marginTop: 15,
    flexDirection: 'row',
    // marginLeft:
  },
  signIn: {
    width: '70%',
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
});

export default App;
