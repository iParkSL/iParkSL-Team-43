import React, {useState} from 'react';
import axios from 'axios';

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
  Alert,
} from 'react-native';

const BookingRequest = ({navigation,route}) => {
  const {pid} = route.params;
  const [vehicle, setvehicle] = useState('');
  const [vehicleNoText, setVehicleNo] = useState('');
  const [payment, setpayment] = useState('');
  const [EstimatedTimeText, setEstimatedTime] = useState('');

  const Booking = (vehicleType, vehicleNo, paymentType, estimatedTime) => {
    const x = {
      vehicleType: vehicleType,
      vehicleNo: vehicleNo,
      paymentMethod: paymentType,
      EstimatedDuration: estimatedTime,
      CustomerID: 1,
      ParkID: pid,
      QrCode: 41,
    };

   
    axios
      .post('http://localhost:8080/book', x)
      .then(res => {
        if(res.data==='SUCCESS'){Alert.alert('Booking successfully')}
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ScrollView>
      <View style={styles.footer}>
      <Text style={[styles.text_footer, {marginTop: 10}]}>itemId: {JSON.stringify(pid)}</Text>
        <Text style={[styles.text_footer, {marginTop: 10}]}>
          Select Vehicle Type
        </Text>
        <View>
          <Picker
            selectedValue={vehicle}
            onValueChange={Itemvalue => setvehicle(Itemvalue)}
            mode={'dropdown'}>
            <Picker.Item label="-SELECT-" color="grey"/>
            <Picker.Item label="A1" value="A1" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B1" value="B1" />
            <Picker.Item label="B" value="B" />
          </Picker>
        </View>

        <Text style={[styles.text_footer, {marginTop: 10}]}>Vehicle No</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"            
            value={vehicleNoText}
            onChangeText={val => setVehicleNo(val)}
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
            <Picker.Item label="-SELECT-" color="grey"/>
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
            value={EstimatedTimeText}
            onChangeText={val => setEstimatedTime(val)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={()=>Booking(vehicle,vehicleNoText,payment,EstimatedTimeText)}>
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
    height: 600,
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
    backgroundColor: '#F6F6F6',
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

export default BookingRequest;
