import React, {useState, useEffect, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {COLORS, SIZES, icons} from '../../../constants';

const MapScreen = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const mapRegion = {
    latitude: 6.865025,
    longitude: 79.898305,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };
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

  return (
    <View style={{flex: 1, borderBottomColor: COLORS.orange}}>
      <MapView
        style={styles.map}
        region={mapRegion}
        onPress={selectLocationHandler}>
        {markerCoordinates && (
          <Marker title="Picked Location" coordinate={markerCoordinates} />
        )}
      </MapView>
      {Save()}
    </View>
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
