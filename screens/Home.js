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
import {images, icons, COLORS, FONTS, SIZES} from '../constants';

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
            style={{marginTop: SIZES.radius, color: COLORS.black, ...FONTS.h4}}>
            {label}
          </Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

const Home = ({navigation}) => {
  // Dummy Data
  const [destinations, setDestinations] = React.useState([
    {
      id: 0,
      name: 'Galle',
      img: images.p1,
    },
    {
      id: 1,
      name: 'Colombo',
      img: images.p2,
    },
    {
      id: 2,
      name: 'Kaluthara',
      img: images.p3,
    },
    {
      id: 3,
      name: 'Mathara',
      img: images.p5,
    },
  ]);

  // Render

  function renderDestinations(item, index) {
    var destinationStyle = {};

    if (index == 0) {
      destinationStyle = {marginLeft: SIZES.padding};
    }

    return (
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginHorizontal: SIZES.base,
          ...destinationStyle,
        }}
        onPress={() => {
          navigation.navigate('DestinationDetail');
        }}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: SIZES.width * 0.28,
            height: '82%',
            borderRadius: 15,
          }}
        />

        <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4}}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
    

      {/* Options */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            flex:0.7,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.Psearch}
            bgColor={['#ffb907', '#ffb907']}
            label="Find Park"
            onPress={() => {
              console.log('Find Park');
            }}
          />
          <OptionItem
            icon={icons.carparking}
            bgColor={['#ffb907', '#ffb907']}
            label="Visited Parks"
            onPress={() => {
              console.log('Add new car');
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex:0.7,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.route}
            bgColor={['#ffb907', '#ffb907']}
            label="Track me"
            onPress={() => {
              console.log('Location');
            }}
          />
          <OptionItem
            icon={icons.timer}
            bgColor={['#ffb907', '#ffb907']}
            label="Timer"
            onPress={() => {
              console.log('Timer');
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex:0.7,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.payment}
            bgColor={['#ffb907', '#ffb907']}
            label="Payments"
            onPress={() => {
              console.log('payments');
            }}
          />
          <OptionItem
            icon={icons.coupon}
            bgColor={['#ffb907', '#ffb907']}
            label="My bookings"
            onPress={() => {
              console.log('My bookings');
            }}
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

/*
<View
        style={{
          flex: 2,
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}>
        <Image
          source={images.CarCover}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}
        />
      </View>

      */

/* Destination */
/* <View style={{flex: 1}}>
       <Text
         style={{
           marginTop: SIZES.base,
           marginHorizontal: SIZES.padding,
           ...FONTS.h2,
         }}>
         Recently
       </Text>
       <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         data={destinations}
         keyExtractor={item => item.id.toString()}
         renderItem={({item, index}) => renderDestinations(item, index)}
       />
     </View>
     */
