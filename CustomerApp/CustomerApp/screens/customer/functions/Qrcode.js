import React from 'react';
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

const Qrcode = ({navigation}) => {
  return (
    <ScrollView>
      
        <Text>QR code</Text>

        <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => navigation.push('timer')} >
        
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
              Timer >>
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Qrcode;


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#ffd700',
        padding: 20,
        marginBottom: 10,
      },
      signIn: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 6,
        alignSelf: 'center',
      },
      textSign: {
        fontSize: 16,
        alignSelf: 'center',
        fontWeight: '600',
      },
      button: {
        flexDirection: 'row',
        // borderTopWidth: 1,
        borderTopColor: '#f2f2f2',
        paddingBottom: 5,
        alignSelf: 'center',
        marginBottom: 20,
        
      },
      Review:{      
        padding: 15,
        marginBottom: 20,
        width:200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 15,
        marginLeft:10,
        marginRight: 10,
        backgroundColor:'#e3e3e3',    
      },
});