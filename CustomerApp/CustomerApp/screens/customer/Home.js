import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
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
    
    const [Parks, setParks] =  useState('');
  useEffect(() =>{
    Axios.get('http://localhost:8080/topParks').then((response)=>{
      setParks(response.data);     
      console.log(response.data);
    })
    }, []) 
  

  function renderParks(item, index) {
    return (
      <View style={styles.card}>
         <Image
          source={{uri: item.img}}
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
          
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                navigation.navigate('viewPark', { 
                    pid: item.id,
                    oid: item.oid,
                    name: item.parkname,
                    slots: item.slots,
                    price: item.price,
                    image1: item.image1,
                    image2: item.image2,
                    image3: item.image3,
                    description: item.description,
                                   
                    });
              }}>
              <LinearGradient
                colors={['#FDC73E', '#ffb907']}
                style={[styles.signIn]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#000000',
                    },
                  ]}>
                  Book Now
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>        
      </View>
    );
  }

  return (
    <View style={styles.container}>
    <ScrollView>
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
            onPress={() => navigation.navigate('upComming')}
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
      </ScrollView>
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
  button: {
    flexDirection: 'row',
    // borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    paddingBottom: 5,
    alignSelf: 'center',
    marginBottom: 20,
    
  },

  signIn: {
    width: '100%',
    marginTop: 3,
    height: 30,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 6,
    alignSelf: 'center',
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
});

export default Home;
