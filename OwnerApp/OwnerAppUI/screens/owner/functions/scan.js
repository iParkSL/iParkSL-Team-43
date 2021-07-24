
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {COLORS, SIZES, icons} from '../../../constants';
const Scan = ({navigation}) => {
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
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={icons.Focus}
          resizeMode="stretch"
          style={{
            marginTop: '-55%',
            width: 200,
            height: 300,
          }}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1, borderBottomColor: COLORS.orange}}>
      <RNCamera
        style={{flex: 1}}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}>
        {Header()}
        {ScanQR()}
        {Focus()}
      </RNCamera>
    </View>
  );
};
export default Scan;
