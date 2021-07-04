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

const OptionItem = ({bgColor, icon, label, onPress}) => {
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={onPress}>
      <View style={[styles.shadow, {width: 60, height: 60}]}>
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
              width: 40,
              height: 40,
            }}
          />
        </LinearGradient>
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};


const Home = ({navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.parking}
            bgColor={['#ffb907', '#ffb907']}
            label="Add Park"
            onPress={() =>  navigation.navigate("AddNewPark")}
          />
          <OptionItem
            icon={icons.qr}
            bgColor={['#ffb907', '#ffb907']}
            label="Scan"
            onPress={() => navigation.navigate("Scan")}
          />
          <OptionItem
            icon={icons.Vpark}
            bgColor={['#ffb907', '#ffb907']}
            label="View Park"
            onPress={() =>navigation.navigate("ViewPark")}
          />
          <OptionItem
            icon={icons.dollar}
            bgColor={['#ffb907', '#ffb907']}
            label="Earnings"
            onPress={() =>navigation.navigate("Earnings")}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.Switch}
            bgColor={['#ffb907', '#ffb907']}
            label="Switch"
            onPress={() => navigation.navigate("Switch")}
          />
          <OptionItem
            icon={icons.update}
            bgColor={['#ffb907', '#ffb907']}
            label="Update"
            onPress={() => navigation.navigate("parkUpdate")}
          />
        </View>
      </View>
      <View style={{flex: 2}}></View>
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
