import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {images, icons, COLORS, FONTS, SIZES} from '../constants';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from './auth/SplashScreen';
import SignInScreen from './auth/SignInScreen';
import SignUpScreen from './auth/SignUpScreen';
import Home from './customer/Home';
import Setting from './DrawerContent/settings';
import AboutUs from './DrawerContent/aboutUs';
import ContactUs from './DrawerContent/contactUs';
import NearBySpots from './DrawerContent/aboutUs';
import RateUs from './DrawerContent/rateUs';

import {
  findPark,  
  Payments,
  visitedParks,
  BookingRequest,
  QrCode,
  timer,
  payment,
  viewPark,
  upComming,
  forgetPassword,
  resetPassword,
  checkPasscode,
  makePayment,
  physicalPayment,
  reviewForm
} from './customer/functions/index';

import {DrawerContent} from './DrawerContent';
const RootStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};
const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#ffb907',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
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
      component={Home}
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
      name="viewPark"
      component={viewPark}
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
      name="bookingRequest"
      component={BookingRequest}
      options={{
        title: 'Book Park',
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
      name="QrCode"
      component={QrCode}
      options={{
        title: 'QR code',
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
      name="timer"
      component={timer}
      options={{
        title: 'Timer',
        headerStyle: {
          backgroundColor: COLORS.orange,
        },
        headerTintColor: COLORS.black,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft:()=>null,
      }}
    />
    <RootStack.Screen
      name="payment"
      component={payment}
      options={{
        title: 'Payment Form',
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
    <RootStack.Screen
      name="upComming"
      component={upComming}
      options={{
        title: 'Up Coming Booking',
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
    <RootStack.Screen
          name="makePayment"
          component={makePayment}
          options={{
            title: 'Make Payment',
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
          name="physicalPayment"
          component={physicalPayment}
          options={{
            title: 'physical Payment',
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
          name="reviewForm"
          component={reviewForm}
          options={{
            title: 'Feedback',
            headerStyle: {
              backgroundColor: COLORS.orange,
            },
            headerTintColor: COLORS.black,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        headerLeft:()=>null,

          }}
        />
  </RootStack.Navigator>
);

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
