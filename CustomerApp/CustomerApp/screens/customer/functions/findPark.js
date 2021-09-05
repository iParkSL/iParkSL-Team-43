import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {View, ScrollView, Animated, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import axios from 'axios';
const Find = ({navigation}) => {
  const region = {
    latitude: null, //6.865025,
    longitude: null, //79.898305,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const [state, setState] = useState([]);
  const [curentPosition, setcurentPosition] = useState(region);

  useEffect(() => {
    geolocation.getCurrentPosition(
      pos => {
        // alert(JSON.stringify(pos))
        setcurentPosition({
          ...curentPosition,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8080/FindPark')
      .then(res => {
        console.log(res);
        setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return curentPosition.latitude ? (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setState({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: 'AIzaSyDLRh-6BV6-hXj-jJKMd6ZX1jHTl10wVaQ',
          language: 'en',
          components: 'country:us',
          types: 'establishment',
          radius: 30000,
          location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {flex: 0, position: 'absolute', width: '100%', zIndex: 1},
          listView: {backgroundColor: 'white'},
        }}
      />

      <MapView
        initialRegion={curentPosition}
        style={styles.map}
        showsUserLocation={true}>
        {state.map(park => {
          return (
            <Marker
              coordinate={{
                latitude: park.latitude,
                longitude: park.longitude,
              }}
              image={require('../../../assets/icons/marker.png')}>
              <Callout
                style={styles.card}
                onPress={() => {
                  navigation.navigate('viewPark', {
                    pid: park.pid,
                    oid: park.oid,
                    parkname: park.parkname,
                    slots: park.slots,
                    price: park.price,
                    image1: park.image1,
                    image2: park.image2,
                    image3: park.image3,
                    description: park.description,
                  });
                }}>
                <View style={styles.textContent}>
                  <Text style={styles.titleText}>{park.parkname}</Text>
                  <Text>
                    {'\n'}
                    {park.description}
                  </Text>
                </View>
                <View
                  style={[
                    styles.BookNow,
                    {
                      color: '#FFF',
                    },
                  ]}>
                  <Button color="#ffb907" title={'Book Now'} />
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  ) : (
    <ActivityIndicator style={{flex: 1}} animating size="large" />
  );
};

const styles = StyleSheet.create({
  searchBox: {
    position: 'absolute',
    marginTop: 40,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    width: 120,
    height: 80,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // alignItems:"center",
    //justifyContent:"center",
  },
  header: {
    flex: 1,
    // height:100,
  },
  map: {
    flex: 1,
    //width:100,
    //height:100,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  BookNow: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardImage: {
    flex: 1,
    width: '50%',
    height: '50%',
    alignSelf: 'center',
  },
  card: {
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    height: 150,
    width: 100,
    overflow: 'hidden',
  },
});
export default Find;
