import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images, icons, COLORS, FONTS, SIZES} from '../../constants';
import {Tabs} from './tab';

import {
  AddNewPark,
  Earnings,
  parkUpdate,
  Scan,
  RecentBookings,
  Switch,
  myParks,
  receivePayments,} from '../owner/functions/index';

import {createStackNavigator} from '@react-navigation/stack';


const OptionItem = ({bgColor, icon, label, onPress}) => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={onPress}>
      <View style={[styles.shadow, {width: 150, height: 150}]}>
        <LinearGradient
          style={[
            {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              backgroundColor: 'red',
            },
          ]}
          colors={bgColor}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Image
            source={icon}
            resizeMode="cover"
            style={{
              tintColor: COLORS.black,
              width: 75,
              height: 75,
            }}
          />
          <Text
            style={{
              marginTop: SIZES.radius,
              color: COLORS.black,
              ...FONTS.h4,
              fontWeight: 'bold',
            }}>
            {label}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.7,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.parking}
            bgColor={['#ffb907', '#ffb907']}
            label="Add Park"
            onPress={() => navigation.navigate('AddNewPark')}
          />

          <OptionItem
            icon={icons.Vpark}
            bgColor={['#ffb907', '#ffb907']}
            label="Bookings"
            onPress={() => navigation.navigate('RecentBookings')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.7,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.area}
            bgColor={['#ffb907', '#ffb907']}
            label="My parks"
            onPress={() => navigation.navigate('myParks')}
          />
          <OptionItem
            icon={icons.dollar}
            bgColor={['#ffb907', '#ffb907']}
            label="Recive 
            Payments"
            onPress={() => navigation.navigate('receivePayments')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.7,
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.budget}
            bgColor={['#ffb907', '#ffb907']}
            label="Charges"
            onPress={() => navigation.navigate('Charges')}
          />
          <OptionItem
            icon={icons.Switch}
            bgColor={['#ffb907', '#ffb907']}
            label="Switch 
            Customer"
            onPress={() => navigation.navigate('Switch')}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Home;
