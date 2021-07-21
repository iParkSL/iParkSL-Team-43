import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Find = () => {
  return (
    <View  style = {{flex: 1, backgroundColor: "#ffffff" }}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Find</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Find;


// import React from 'react';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import {TextInput} from 'react-native';
// import {StyleSheet, View, Text, ScrollView, Animated} from 'react-native';
// import MapView, {Marker} from 'react-native-maps';
// const Find = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <MapView
//         initialRegion={{
//           latitude: 6.865025, 
//           longitude: 79.898305,
//           latitudeDelta: 0.015,
//           longitudeDelta: 0.0121,
//         }}
//         style={styles.map}>
//         <Marker
//           coordinate={{
//             latitude: 6.867989,
//             longitude: 79.893557,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sky park"
//           description="150 LKR/hr"
//           //onPress={() => navigation.navigate('visitedParks')}
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.865025,
//             longitude: 79.898305,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="AK park"
//           description="100 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.879077,
//             longitude: 79.87987,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="KP park"
//           description="50 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.874886,
//             longitude: 79.866051,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="HRM park"
//           description="100 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.856336,
//             longitude: 79.879806,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="KM park"
//           description="200 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.838118,
//             longitude: 79.869262,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="RT park"
//           description="70 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.83812,
//             longitude: 79.869262,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sK park"
//           description="50 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.838517,
//             longitude: 79.870335,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="LM park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.784234,
//             longitude: 79.889947,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sky park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.784234,
//             longitude: 79.898335,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sky park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.795873,
//             longitude: 79.875678,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sky park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.796928,
//             longitude: 79.879401,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sky park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.802174,
//             longitude: 79.906524,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sky park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.814324,
//             longitude: 79.92189,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sky park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.847097,
//             longitude: 79.938028,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="sky park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.292562,
//             longitude: 80.166346,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="New City park"
//           description="150 LKR/hr"
//         />
//         <Marker
//           coordinate={{
//             latitude: 6.069866,
//             longitude: 80.227717,
//           }}
//           image={require('../../../assets/icons/marker.png')}
//           title="Galle park"
//           description="150 LKR/hr"
//         />
//       </MapView>
//       <View style={styles.searchBox}>
//         <TextInput
//           placeholder="search place"
//           placeholderTextColor="#000"
//           autoCapitalize="none"
//           style={{flex: 1, padding: 0}}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   searchBox: {
//     position: 'absolute',
//     marginTop: 40,
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     width: '90%',
//     alignSelf: 'center',
//     borderRadius: 5,
//     padding: 10,
//     shadowColor: '#ccc',
//     shadowOffset: {width: 0, height: 3},
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     // alignItems:"center",
//     //justifyContent:"center",
//   },
//   header: {
//     flex: 1,
//     // height:100,
//   },
//   map: {
//     flex: 1,
//     //width:100,
//     //height:100,
//   },
//   scrollView: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     paddingVertical: 10,
//   },
// });
// export default Find;
