import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import MapPreview from './SelectMapView';

import {images, icons, COLORS, FONTS, SIZES} from '../../../constants';

const HomeScreen = ({navigation}) => {
  const [isFetching, setisFetching] = useState(false);
  const [pickedLocation, setpickedLocation] = useState();

  const pickOnMap = () => {
    navigation.navigate('MapScreen');
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
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <Text style={[styles.text_footer]}>Park Place</Text>
        <View style={styles.locationPicker}>
          <MapPreview style={styles.mapPreview} onPress={pickOnMap}>
            {isFetching ? (
              <ActivityIndicator size="large" color={Colors.primary} />
            ) : (
              <Text>No location chosen yet!</Text>
            )}
          </MapPreview>
          <Button title="Pick on Map" color={'#ffb907'} onPress={pickOnMap} />
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
            // onChangeText={(val) => textInputChange(val)}
          />
          <TextInput
            style={[styles.textInput, {marginLeft: 20}]}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
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
          <TouchableOpacity style={styles.uploadBtnContainer}>
            <Text style={styles.uploadBtn}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadBtnContainer}>
            <Text style={styles.uploadBtn}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadBtnContainer}>
            <Text style={styles.uploadBtn}>Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadBtnContainer}>
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
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => {}}>
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
});

export default HomeScreen;
