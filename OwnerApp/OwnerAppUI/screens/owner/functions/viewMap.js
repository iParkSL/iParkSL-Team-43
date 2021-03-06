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
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import geolocation from 'react-native-geolocation-service';

import axios from 'axios';
import {data} from 'browserslist';

const viewMap = ({navigation}) => {
  const region = {
    latitude: null,
    longitude: null,
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
      .get('http://localhost:8080/ViewMap')
      .then(res => {
        console.log(res);
        setState(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const region = {
  //   latitude: 6.865025,
  //   longitude: 79.898305,
  //   latitudeDelta: 0.015,
  //   longitudeDelta: 0.0121,
  // };

  return curentPosition.latitude ? (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyDLRh-6BV6-hXj-jJKMd6ZX1jHTl10wVaQ',
          language: 'en',
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
        {state.map(parks => {
          return (
            <Marker
              key={parks.pid}
              coordinate={{
                latitude: parks.latitude,
                longitude: parks.longitude,
              }}
              image={require('../../../assets/icons/marker.png')}>
              <Callout
                style={styles.card}
                onPress={() => navigation.navigate('mybookings')}>
                <View style={styles.textContent}>
                  <Text style={styles.titleText}>{parks.parkname}</Text>
                  <Text>
                    {'\n'}
                    LKR.{parks.price}/hr
                  </Text>
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
    fontSize: 15,
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
export default viewMap;
