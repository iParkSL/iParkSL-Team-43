import React, {useState} from 'react';

import {Picker} from '@react-native-picker/picker';
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

const bookingRequest = ({navigation}) => {
  const [vehicle, setvehicle] = useState('');
  const [payment, setpayment] = useState('');

  return (
    <ScrollView>
      <View style={styles.footer}>
        <Text style={[styles.text_footer, {marginTop: 10}]}>
          Select Vehicle Type
        </Text>
        <View>
          <Picker
            selectedValue={vehicle}
            onValueChange={Itemvalue => setvehicle(Itemvalue)}
            mode={'dropdown'}>
            <Picker.Item label="A1" value="A1"/>
            <Picker.Item label="A" value="A"/>
            <Picker.Item label="B1" value="B1"/>
            <Picker.Item label="B" value="B"/>        
         
          </Picker>
        </View>

        <Text style={[styles.text_footer, {marginTop: 10}]}>Vehicle No</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 10}]}>
          Payment Method
        </Text>
        <View>
          <Picker
            selectedValue={payment}
            onValueChange={Itemvalue => setpayment(Itemvalue)}
            mode={'dropdown'}>
            <Picker.Item label="Online" value="online" />
            <Picker.Item label="Cash" value="cash" />
          </Picker>
        </View>

        <Text style={[styles.text_footer, {marginTop: 10}]}>
          Estimated Time
        </Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="04:00"
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn}onPress={() => navigation.push('QrCode')}>
            <View
              // colors={['#FDC73E', '#ffb907']}
              style={[styles.signIn]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000000',
                  },
                ]}>
                Book Now LKR 150
              </Text>
            </View>
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
    height:600,
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
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
    marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cdd7de',
    paddingBottom: 3,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -5,
    paddingLeft: 10,
    color: '#05375a',
    // borderWidth:1,
    backgroundColor:'#F6F6F6',
    borderRadius: 10,
    borderColor: '#ffb907',
  },
  button: {
    marginTop: 45,
    flexDirection: 'row',
    // marginLeft:
  },
  signIn: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffb907',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
});

export default bookingRequest;
