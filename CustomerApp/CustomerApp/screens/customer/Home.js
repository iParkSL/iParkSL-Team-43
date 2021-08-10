import React from 'react';
import {
  StyleSheet,
  View,
  Button,
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
  const [Parks, setParks] = React.useState([
    {
      id: 0,

      name: 'Sky park',
      img: images.p1,
      price: '100 lkr/hr',
    },
    {
      id: 1,
      name: 'RT park',
      img: images.p2,
      price: '100 lkr/hr',
    },
    {
      id: 2,
      name: 'New KP park',
      img: images.p3,
      price: '100 lkr/hr',
    },
    {
      id: 3,
      name: 'KS Park',
      img: images.p5,
      price: '100 lkr/hr',
    },
    {
      id: 4,

      name: 'Sky park',
      img: images.p1,
      price: '100 lkr/hr',
    },
    {
      id: 5,
      name: 'RT park',
      img: images.p2,
      price: '100 lkr/hr',
    },
    {
      id: 6,
      name: 'New KP park',
      img: images.p3,
      price: '100 lkr/hr',
    },
    {
      id: 7,
      name: 'KS Park',
      img: images.p5,
      price: '100 lkr/hr',
    },
  ]);

  function renderParks(item, index) {
    return (
      <View style={styles.card}>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '50%',

            //borderRadius: 10,
          }}
        />
        <View
          style={[
            styles.BookNow,
            {
              color: '#000000',
            },
          ]}>
          <Text style={styles.cardtitle}> {item.name}</Text>
          <Text style={styles.cardDescription}>{item.price}</Text>
          <Button
            onPress={() => navigation.navigate('mybookings')}
            color="#ffb907"
            title={'Book Now'}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Options */}
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.7,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
          <OptionItem
            icon={icons.Psearch}
            bgColor={['#ffb907', '#ffb907']}
            label="Find Park"
            onPress={() => navigation.navigate('findPark')}
          />
          <OptionItem
            icon={icons.carparking}
            bgColor={['#ffb907', '#ffb907']}
            label="Visited Parks"
            onPress={() => navigation.navigate('visitedParks')}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            flex: 0.4,
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.base,
          }}>
        
          <OptionItem
            icon={icons.coupon}
            bgColor={['#ffb907', '#ffb907']}
            label="Upcoming Bookings"
            onPress={() => navigation.navigate('timer')}
          />
        </View>
        <View style={{flex: 0.7}}>
          <Text
            style={{
              marginTop: SIZES.base,
              marginHorizontal: SIZES.padding,
              ...FONTS.h2,
            }}>
            {'\n'}
            Top Parks
            {'\n'}
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={Parks}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => renderParks(item, index)}
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
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    //shadowOffset: { x: 2, y: -2 },
    height: 160,
    width: 100,
    overflow: 'hidden',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  BookNow: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
});

export default Home;
