import React, {useState, useEffect, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {ActivityIndicator,View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import geolocation from 'react-native-geolocation-service';

import {COLORS, SIZES, icons} from '../../../constants';

const MapScreen = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const mapRegion = {
    // latitude: 6.865025,
    // longitude: 79.898305,
    latitude: null,
    longitude: null,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
  const [curentPosition, setcurentPosition] = useState(mapRegion);

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

  const selectLocationHandler = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };
  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  function Save() {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          padding: 50,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
          backgroundColor: COLORS.white,
        }}>
        <View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: COLORS.orange,
              padding: 10,
            }}
            onPress={() => {
              navigation.navigate('AddNewPark', {
                latitude: markerCoordinates.latitude,
                longitude: markerCoordinates.longitude,
              });
            }}>
            <Text style={{fontWeight: 'bold'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return curentPosition.latitude ? (
    <View style={{flex: 1, borderBottomColor: COLORS.orange}}>
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
        style={styles.map}
        // region={mapRegion}
        initialRegion={curentPosition}
        showsUserLocation={true}
        onPress={selectLocationHandler}>
        {markerCoordinates && (
          <Marker title="Picked Location" coordinate={markerCoordinates} />
        )}
      </MapView>
      {Save()}
    </View>
  ) : (
    <ActivityIndicator style={{flex: 1}} animating size="large" />
  );
};

MapScreen.navigationOptions = navData => {
  const save = navData.navigation.getParam('saveLocation');
  return {
    headerRight: (
      <TouchableOpacity style={styles.headerButton} onPress={save}>
        <Text style={styles.headerButtonText}>Save</Text>
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
  },
});

export default MapScreen;
