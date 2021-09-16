import React, {Component,useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

const Setting = ({navigation}) => {
  const [firstName, setFname] = useState('');
  const [lastName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const update = () => {
    // e.preventDefault();
    const x = {
      firstName,
      lastName,
      email,
      phone,
    };

   
    axios
      .post('http://localhost:8080/editprofile', x)
      .then(res => {
        if(res.data==='SUCCESS')navigation.push('QrCode');
      })
      .catch(error => {
        console.log(error);
      });
    }
 

  return (
    <View>
      <ScrollView>
        <View
          style={{
            padding: 10,
            width: '100%',
            backgroundColor: '#ffb907',
            height: 80,
          }}>
         
        </View>

        <TouchableOpacity>
          <View style={{alignItems: 'center', height: 60}}>
            {/* <Image
              source={require('./img/profile.jpg')}
              style={{
                width: 80,
                height: 80,
                borderRadius: 100,
                marginTop: -40,
              }}></Image> */}

            <Icon
              name="camera"
              size={25}
              color="#fff"
              style={{
                opacity: 0.7,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: -55,
              }}
            />
          </View>
        </TouchableOpacity>

        <View style={{marginLeft: 30}}>
          <View>
            <Text style={[styles.text_footer]}>First Name</Text>
            <View style={styles.action}>
              <FontAwesome5 name={'user'} solid size={20} />
              <TextInput
               style={styles.textInput}
               value={firstName} 
               onChangeText={val => setFname(val)}
                />
            </View>
          </View>
 

          <Text style={styles.text_footer}>Last Name</Text>
          <View style={styles.action}>
            <FontAwesome5 name={'user'} solid size={20} />
            <TextInput 
             style={styles.textInput}
             value={lastName} 
             onChangeText={val => setLname(val)}  />
          </View>

          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome5 name={'envelope'} solid size={20} />
            <TextInput 
             style={styles.textInput}
             value={email} 
             onChangeText={val => setEmail(val)}  />
          </View>

          <Text style={styles.text_footer}>Phone</Text>
          <View style={styles.action}>
            <FontAwesome5 name={'phone'} size={20} />
            <TextInput 
            style={styles.textInput}
            value={phone} 
            onChangeText={val => setPhone(val)} />
          </View>

          <TouchableOpacity
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#ffb907',
            width: '90%',
            padding: 10,
            paddingBottom: 15,
            borderRadius: 10,
            shadowOpacity: 80,
            elevation: 15,
            marginTop: 15,
            marginBottom: 15,
            backgroundColor: '#ffb907',
          }}
          onPress={()=>update()}
          >
          <Text style={{fontSize: 20, marginLeft: 10}}>Save Details</Text>

        </TouchableOpacity>
        
          <View style={{flexDirection: 'row', alignItems: 'center',marginBottom:10}}>
            <Text style={[styles.text_footer,{  marginBottom: 10,}]}>Notification</Text>
            <TouchableOpacity>
            <Feather
              name="chevron-right"
              size={25}
              style={{marginLeft:100}}
            />
            </TouchableOpacity>
            </View>



            <View>
              <Text style={{color: '#585858',fontSize: 18,}}>Change Password</Text> 
            </View>

          </View> 
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  text_footer: {
    color: '#000000',
    fontSize: 16,
  },
});


