import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
  SafeAreaView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Slot from './SlotUpdate';
import {COLORS, SIZES, icons} from '../../../constants';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const Scan = ({navigation}) => {
  const onRead = async event => {
    // console.log('Data: ' + event.data);
    // const param = 'Data: ' + event.data;
    // console.log('date:' + event.date);
    const param = 'Data: ' + event.data;

    const p1 = JSON.parse(event.data);
    console.log(p1);

    // console.log(event);
    // console.log(param);
    Alert.alert('Scan Successfully');

    navigation.navigate('SlotUP', {
      bid: p1.bid,
      cid: p1.cid,
      date: p1.date,
      time: p1.time,
    });
  };

  function Header() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          paddingHorizontal: 30,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.cancel}
            style={{
              height: 40,
              width: 40,
              tintColor: COLORS.orange,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  function ScanQR() {
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
            }}>
            <Text style={{fontWeight: 'bold'}}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function Focus() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={icons.Focus}
          resizeMode="stretch"
          style={{
            marginTop: '-78%',
            width: 200,
            height: 300,
          }}
        />
      </View>
    );
  }

  return (
    <QRCodeScanner
      style={{flex: 1}}
      onRead={onRead}
      topContent={
        <Text style={styles.qrheader}>
          Please move your camera {'\n'} over the QR Code
        </Text>
      }
      bottomContent={
        <View style={styles.scanCardView}>
          <Image
            source={icons.Focus}
            resizeMode="stretch"
            style={{
              marginTop: '-120%',
              width: 200,
              height: 300,
            }}></Image>
          <ImageBackground style={styles.bottomContent}>
            <TouchableOpacity style={styles.buttonScan2}>
              <Image
                source={icons.scanner}
                style={{marginTop: '50%', height: 75, width: 75}}></Image>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      }
    />
  );
};
export default Scan;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  qrheader: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    padding: 32,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  buttonScan2: {
    marginLeft: deviceWidth / 2 - 50,
    width: 100,
    height: 100,
  },
  bottomContent: {
    width: deviceWidth,
    height: 120,
  },
  scanCardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    // backgroundColor: 'white'
  },
});
