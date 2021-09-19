import React, {useState, useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Permissions} from 'react-native-permissions';
import MapView, {Marker} from 'react-native-maps';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';

import MapPreview from './SelectMapView';

import {images, icons, COLORS, FONTS, SIZES} from '../../../constants';
import {colors} from 'react-native-elements';

const updatePark = ({route, navigation}) => {
  const [parkName, setparkName] = React.useState(null);
  // const [lat, setlat] = React.useState(null);
  // const [lon, setlon] = React.useState(null);
  const [price, setprice] = React.useState(null);
  const [slots, setslots] = React.useState(null);
  const [photo1, setPhoto1] = React.useState(null);
  const [photo2, setPhoto2] = React.useState(null);
  const [photo3, setPhoto3] = React.useState(null);
  const [photo4, setPhoto4] = React.useState(null);
  const [description, setdescription] = React.useState(null);

  const lat = route.params?.latitude;

  const lon = route.params?.longitude; //route.params.longitude;

  const submitData = async () => {
    const oid = await AsyncStorage.getItem('id');

    fetch('http://localhost:8080/UpdateSubmitPark', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oid,
        parkName,
        lat,
        lon,
        price,
        slots,
        photo1,
        photo2,
        photo3,
        description,
      }),
    })
      .then(res => console.log(res))
      .then(data => {
        Alert.alert(`${parkName} is Updated successfuly`);
        navigation.navigate('Tabs');
      })
      .catch(err => {
        Alert.alert(`${parkName} is successfuly`);
        navigation.navigate('Tabs');
        console.log(err);
      });
  };

  const [isFetching, setisFetching] = useState(false);
  const [pickedLocation, setpickedLocation] = useState();

  const pickOnMap = () => {
    navigation.navigate('MapScreen');
  };

  const pickFromGallery1 = async () => {
    let data = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    });

    if (!data.cancelled) {
      let newfile = {
        uri: data.path,
        type: data.mime,
        name: data.mime,
      };
      handleUpload1(newfile);
      console.log(newfile);
    }
  };

  const handleUpload1 = photo => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'iparksl');
    data.append('cloud_name', 'dan3i3xkt');

    fetch('https://api.cloudinary.com/v1_1/dan3i3xkt/image/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setPhoto1(data.url);
      })
      .catch(err => {
        Alert.alert('error while uploading');
      });
  };

  const pickFromGallery2 = async () => {
    let data = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    });

    if (!data.cancelled) {
      let newfile = {
        uri: data.path,
        type: data.mime,
        name: data.mime,
      };
      handleUpload2(newfile);
      console.log(newfile);
    }
  };

  const handleUpload2 = photo => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'iparksl');
    data.append('cloud_name', 'dan3i3xkt');

    fetch('https://api.cloudinary.com/v1_1/dan3i3xkt/image/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setPhoto2(data.url);
      })
      .catch(err => {
        Alert.alert('error while uploading');
      });
  };

  const pickFromGallery3 = async () => {
    let data = await ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    });

    if (!data.cancelled) {
      let newfile = {
        uri: data.path,
        type: data.mime,
        name: data.mime,
      };
      handleUpload3(newfile);
      console.log(newfile);
    }
  };

  const handleUpload3 = photo => {
    const data = new FormData();
    data.append('file', photo);
    data.append('upload_preset', 'iparksl');
    data.append('cloud_name', 'dan3i3xkt');

    fetch('https://api.cloudinary.com/v1_1/dan3i3xkt/image/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setPhoto3(data.url);
      })
      .catch(err => {
        Alert.alert('error while uploading');
      });
  };

  return (
    <ScrollView>
      <View style={styles.footer}>
        <Text style={[styles.text_footer]}>Park Name</Text>

        <View style={styles.action}>
          <TextInput
            placeholder="Enter Park Name"
            style={styles.textInput}
            autoCapitalize="none"
            name="parkName"
            value={parkName}
            onChangeText={val => setparkName(val)}
          />
        </View>

        <Text style={[styles.text_footer]}>Park Place</Text>
        <View style={styles.locationPicker}>
          <MapPreview
            style={styles.mapPreview}
            onPress={() => {
              pickOnMap();
            }}>
            {isFetching ? (
              <ActivityIndicator size="large" color={Colors.primary} />
            ) : (
              <Text>No location chosen yet!</Text>
            )}
          </MapPreview>
          {/* <Button
            title="Pick on Map"
            color={'#ffb907'}
            
            onPress={() => {
              pickOnMap();
            }}
          /> */}
          <TouchableOpacity
            style={styles.pick}
            onPress={() => {
              pickOnMap();
            }}>
            <View style={[styles.pick, {backgroundColor: '#ffb907'}]}>
              <Image
                source={icons.pick}
                resizeMode="cover"
                style={{
                  tintColor: COLORS.black,
                  width: 30,
                  height: 30,
                }}
              />

              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000000',
                  },
                ]}>
                Pick
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.action, {marginTop: 10}]}>
          <Text style={[styles.text_footer]}>Add Price /hr</Text>
          <Text style={[styles.text_footer, {marginLeft: 45}]}>
            {'\t\t\t\t\t\t\t'}
            Total Slots
          </Text>
        </View>

        <View style={styles.action}>
          <TextInput
            placeholder=""
            style={styles.textInput}
            autoCapitalize="none"
            name="price"
            value={price}
            onChangeText={val => setprice(val)}
          />
          <TextInput
            style={[styles.textInput, {marginLeft: 20}]}
            autoCapitalize="none"
            name="slots"
            value={slots}
            onChangeText={val => setslots(val)}
          />
        </View>

        <Text style={[styles.text_footer]}>{'\n'}Add Images</Text>
        {/* <View style={styles.action}>
          <TextInput
            placeholder="Choose Photo"
            style={styles.textInput}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
          />
        </View> */}
        <View style={styles.fixToText}>
          <TouchableOpacity
            style={styles.uploadBtnContainer}
            onPress={pickFromGallery1}>
            <Text style={styles.uploadBtn}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadBtnContainer}
            onPress={pickFromGallery2}>
            <Text style={styles.uploadBtn}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadBtnContainer}
            onPress={pickFromGallery3}>
            <Text style={styles.uploadBtn}>Image</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer]}>{'\n'}Description</Text>
        <View style={styles.action}>
          <TextInput
            multiline={true}
            numberOfLines={6}
            placeholder="Description"
            style={styles.desBox}
            autoCapitalize="none"
            name="description"
            value={description}
            onChangeText={val => setdescription(val)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => submitData()}>
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
                Send for approval
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    // marginLeft:5,

    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  text_header: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    marginTop: 8,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cdd7de',
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -5,
    paddingLeft: 10,
    color: '#05375a',
    // borderWidth:1,
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderColor: '#ffb907',
  },
  desBox: {
    paddingRight: 10,
    lineHeight: 23,
    flex: 2,
    textAlignVertical: 'top',
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderColor: '#ffb907',
  },
  button: {
    marginTop: 15,
    flexDirection: 'row',
    // marginLeft:
  },
  signIn: {
    width: '65%',
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    //borderRadius: 10,
  },
  pick: {
    width: '40%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  checkbox: {
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center'
  },
  uploadBtnContainer: {
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    overflow: 'hidden',
  },
  uploadBtn: {
    textAlign: 'center',
    fontSize: 11,
    opacity: 0.3,
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
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

export default updatePark;
