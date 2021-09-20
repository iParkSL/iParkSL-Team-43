import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Tabs} from '../owner/tab';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-community/async-storage';

const SignInScreen = ({navigation}) => {
  const [emailtext, setemailtext] = useState('');
  const [passwordtext, setpasswordtext] = useState('');
  const [Data, setdata] = React.useState({
    emailError: '',
    passwordError: '',
  });

  const validate = () => {
    let emailError = '';
    let passwordError = '';

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailtext) {
      emailError = 'Email field is required';
    } else if (reg.test(emailtext) === false) {
      emailError = 'Invalid Email';
    }

    if (!passwordtext) {
      passwordError = 'Password field is required';
    }

    if (emailError || passwordError) {
      setdata({
        emailError,
        passwordError,
      });
      return false;
    }

    return true;
  };

  const SignIn = (email, password) => {
    const x = {
      email: email,
      password: password,
    };

    if (validate()) {
      axios
        .post('http://localhost:8080/login', x)
        .then(async res => {
          try {
            // if (res.data == 'SUCCESS') {
            //   navigation.navigate('Tabs');
            // }

            if (res.data.status == 'SUCCESS') {
              Alert.alert(res.data.username, 'welcome to iparkSL');
              navigation.navigate('Tabs', {
                id: res.data.id,
                username: res.data.username,
              });

              var id = res.data.id.toString();

              console.log(id);
              await AsyncStorage.setItem('id', id);

              console.log(JSON.stringify(id));
            }
          } catch (e) {
            console.log(e);
          }
        })
        .catch(error => {
          if (
            error.response.data == 'user does not exists' ||
            error.response.data == 'Invalid credentials'
          ) {
            Alert.alert(
              'Failed To Sign In',
              'Incorrect email or password has been enterted. Please try again',
              [{text: 'OK'}],
            );
          }
        });
    }
  };

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.lenght != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffb907" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome to iParkSL</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>      
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            name="emailtext"
            value={emailtext}
            onChangeText={val => setemailtext(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="#ffb907" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={styles.error}>{Data.emailError}</Text>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}>
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput, {marginLeft: 5}]}
            autoCapitalize="none"
            name="passwordtext"
            value={passwordtext}
            onChangeText={val => setpasswordtext(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#ffb907" size={20} />
            ) : (
              <Feather name="eye" color="#ffb907" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.error}>{Data.passwordError}</Text>
        <View style={styles.Button}>
          <TouchableOpacity onPress={() => SignIn(emailtext, passwordtext)}>
            <LinearGradient
              colors={['#ffb907', '#ffb907']}
              style={[
                styles.signIn,
                {
                  marginTop: 30,
                },
              ]}>
              <Text style={[styles.textSign, {}]}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#ffb907',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text style={styles.textSign}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{color: 'blue'}}
          onPress={() => navigation.navigate('forgetPassword')}>
          Forget Password
        </Text>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb907',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: -15,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: '#ff0000',
    fontSize: 14,
  },
});
