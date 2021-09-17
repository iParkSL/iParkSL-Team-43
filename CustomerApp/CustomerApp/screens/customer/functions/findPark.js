import React, {useState, useEffect} from 'react';
import {Directions, TouchableOpacity} from 'react-native-gesture-handler';
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Dimensions,
} from 'react-native';
import {View, ScrollView, Animated, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import geolocation from 'react-native-geolocation-service';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapViewDirections from 'react-native-maps-directions';
const GOOGLE_MAP_KEY = 'AIzaSyBDrKz0PJJisUQwq5OAPdH_wEh1oxaReKQ';
import SearchableDropdown from 'react-native-searchable-dropdown';
import axios from 'axios';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

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
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/parkSearch')
      .then(res => {
        // console.log(res.data);
        res.data.forEach((item, i) => {
          item.id = i + 1;
        });

        console.log(res.data);
        setServerData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [destination, setdestination] = useState({
    destinationCords: {latitude: 6.865025, longitude: 79.898305},
  });
  const {destinationCords} = destination;

  const directions = (x, y) => {
    console.log(x);
    console.log(y);

    setdestination({
      ...destination,
      destinationCords: {
        latitude: x,
        longitude: y,
      },
    });
  };

  return curentPosition.latitude ? (
    <View style={styles.container}>
      <SearchableDropdown
        onTextChange={text => console.log(text)}
        onItemSelect={item => {
          alert(item.name);
          directions(item.latitude, item.longitude);
        }}
        containerStyle={{padding: 5}}
        textInputStyle={{
          padding: 12,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#FAF7F6',
        }}
        itemStyle={{
          padding: 10,
          marginTop: 2,
          backgroundColor: '#FAF9F8',
          borderColor: '#bbb',
          borderWidth: 1,
        }}
        itemTextStyle={{
          color: '#222',
        }}
        itemsContainerStyle={{
          maxHeight: '50%',
        }}
        items={serverData}
        defaultIndex={2}
        placeholder="Search Park"
        resetValue={false}
        underlineColorAndroid="transparent"
      />

      <MapView
        initialRegion={curentPosition}
        style={styles.map}
        showsUserLocation={true}>
        {state.map(park => {
          return (
            <Marker
              key={park.pid}
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
                  <Text>LKR.{park.price}/hr</Text>
                </View>
                <View
                  style={[
                    styles.BookNow,
                    {
                      color: '#FFF',
                    },
                  ]}>
                  <Button color="#ffb907" title={'Book'} />
                </View>
              </Callout>
            </Marker>
          );
        })}

        <MapViewDirections
          origin={curentPosition}
          destination={destinationCords}
          apikey={GOOGLE_MAP_KEY}
          strokeWidth={6}
          strokeColor="red"
        />
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
