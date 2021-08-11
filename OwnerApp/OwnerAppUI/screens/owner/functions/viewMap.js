import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text, StyleSheet, Button, TextInput} from 'react-native';
import {View, ScrollView, Animated, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
const viewMap = ({navigation}) => {
  const initialMapState = {
    parks: [
      {
        coordinate: {
          latitude: 6.867989,
          longitude: 79.893557,
        },
        title: 'Sky New Park',
        description: '100 LKR/hr',
        key: '1',
      },
      {
        coordinate: {
          latitude: 6.865025,
          longitude: 79.898305,
        },
        title: 'AK park',
        description: '100 LKR/hr',
        key: '2',
      },
      {
        coordinate: {
          latitude: 6.879077,
          longitude: 79.87987,
        },
        title: 'KP park',
        description: '50 LKR/hr',
        key: '3',
      },
      {
        coordinate: {
          latitude: 6.874886,
          longitude: 79.866051,
        },
        title: 'HRM park',
        description: '100 LKR/hr',
        key: '4',
      },
      {
        coordinate: {
          latitude: 6.856336,
          longitude: 79.879806,
        },
        title: 'KM park',
        description: '200 LKR/hr',
        key: '5',
      },
      {
        coordinate: {
          latitude: 6.838118,
          longitude: 79.869262,
        },
        title: 'RT park',
        description: '70 LKR/hr',
        key: '6',
      },
      {
        coordinate: {
          latitude: 6.83812,
          longitude: 79.869262,
        },
        title: 'sK park',
        description: '50 LKR/hr',
        key: '7',
      },
      {
        coordinate: {
          latitude: 6.838517,
          longitude: 79.870335,
        },
        title: 'LM park',
        description: '150 LKR/hr',
        key: '8',
      },
      {
        coordinate: {
          latitude: 6.784234,
          longitude: 79.889947,
        },
        title: 'New YK park',
        description: '150 LKR/hr',
        key: '9',
      },
      {
        coordinate: {
          latitude: 6.784234,
          longitude: 79.898335,
        },
        title: 'sky park',
        description: '150 LKR/hr',
        key: '10',
      },
      {
        coordinate: {
          latitude: 6.795873,
          longitude: 79.875678,
        },
        title: 'sky park',
        description: '150 LKR/hr',
        key: '11',
      },
      {
        coordinate: {
          latitude: 6.796928,
          longitude: 79.879401,
        },
        title: 'sky park',
        description: '150 LKR/hr',
        key: '12',
      },
      {
        coordinate: {
          latitude: 6.802174,
          longitude: 79.906524,
        },
        title: 'sky park',
        description: '150 LKR/hr',
        key: '13',
      },
      {
        coordinate: {
          latitude: 6.814324,
          longitude: 79.92189,
        },
        title: 'sky park',
        description: '150 LKR/hr',
        key: '1',
      },
      {
        coordinate: {
          latitude: 6.847097,
          longitude: 79.938028,
        },
        title: 'sky park',
        description: '150 LKR/hr',
        key: '14',
      },
      {
        coordinate: {
          latitude: 6.292562,
          longitude: 80.166346,
        },
        title: 'New City park',
        description: '150 LKR/hr',
        key: '15',
      },
      {
        coordinate: {
          latitude: 6.069866,
          longitude: 80.227717,
        },
        title: 'Galle park',
        description: '150 LKR/hr',
        key: '16',
      },
    ],
    region: {
      latitude: 6.865025,
      longitude: 79.898305,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    },
  };

  const [state, setState] = React.useState(initialMapState);

  return (
    <View style={styles.container}>
      <MapView initialRegion={state.region} style={styles.map}>
        {state.parks.map(park => {
          return (
            <Marker
              coordinate={park.coordinate}
              image={require('../../../assets/icons/marker.png')}>
              <Callout
                style={styles.card}
                onPress={() => navigation.navigate('mybookings')}>
                <View style={styles.textContent}>
                  <Text style={styles.titleText}>{park.title}</Text>
                  <Text>
                    {'\n'}
                    {park.description}
                  </Text>
                </View>
                
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
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
export default viewMap;