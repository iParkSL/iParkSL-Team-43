import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUPScreen = ({navigation}) => {
  const [nametext, setnametext] = useState('');
  const [emailtext, setemailtext] = useState('');
  const [passwordtext, setpasswordtext] = useState('');
  const [cpasswordtext, setcpasswordtext] = useState('');

  const [Data, setdata] = React.useState({
    nameError: '',
    emailEmptyError: '',
    emailError: '',
    passwordError: '',
    cpasswordError: '',
  });

  const validate = () => {
    let nameError = '';
    let emailError = '';
    let emailEmptyError = '';
    let passwordError = '';
    let cpasswordError = '';
    if (!nametext) {
      nameError = 'Name field is required';
    }

    if (!emailtext) {
      emailEmptyError = 'Email field is required';
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(emailtext) === false) {
      emailError = 'Invalid Email';
    }

    const strongRegex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
    );
    if (!passwordtext) {
      passwordError = 'Password field is required';
    } else if (strongRegex.test(passwordtext) == false) {
      passwordError = 'Enter a strong password';
    }

    if (!cpasswordtext) {
      cpasswordError = 'Confirm password field is required';
    } else if (!(passwordtext === cpasswordtext)) {
      cpasswordError = 'Enter the same password';
    }

    if (
      emailError ||
      nameError ||
      passwordError ||
      emailEmptyError ||
      cpasswordError
    ) {
      setdata({
        nameError,
        emailError,
        passwordError,
        emailEmptyError,
        cpasswordError,
      });
      return false;
    }

    return true;
  };

  const SignUp = (name, email, password, cpassword) => {
    const x = {
      name: name,
      email: email,
      password: password,
      cpassword: cpassword,
    };
    if (validate()) {
      console.log(x);
      axios
        .post('http://localhost:8080/register', x)
        .then(res => {
          if (res.data == 'SUCCESS') navigation.navigate('Home');
        })
        .catch(error => {
          if (error.response.data == 'User already registered') {
            Alert.alert(
              "Failed To Sign Up",
              "User is already registered",
              [
                { text: "OK" }
              ]
            );
            
          }
        });
    }
  };

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
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
  const handleConfirmPasswordChange = val => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffb907" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register with iParkSL</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            {/* <FontAwesome name="user-o" color="#05375a" size={20} /> */}
            <TextInput
              placeholder="Your Name"
              style={styles.textInput}
              autoCapitalize="none"
              name="nametext"
              value={nametext}
              onChangeText={val => setnametext(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="#ffb907" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={styles.error}>{Data.nameError}</Text>

          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            {/* <FontAwesome name="user-o" color="#05375a" size={20} /> */}
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
          {Data.emailEmptyError ? (
            <Text style={styles.error}>{Data.emailEmptyError}</Text>
          ) : (
            <Text style={styles.error}>{Data.emailError}</Text>
          )}

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
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={[styles.textInput, {marginLeft: 5}]}
              autoCapitalize="none"
              name="cpasswordtext"
              value={cpasswordtext}
              onChangeText={val => setcpasswordtext(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#ffb907" size={20} />
              ) : (
                <Feather name="eye" color="#ffb907" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.error}>{Data.cpasswordError}</Text>

          <View style={styles.Button}>
            <TouchableOpacity
              onPress={() =>
                SignUp(nametext, emailtext, passwordtext, cpasswordtext)
              }>
              <LinearGradient
                colors={['#ffb907', '#ffb907']}
                style={[
                  styles.signIn,
                  {
                    marginTop: 30,
                  },
                ]}>
                <Text style={[styles.textSign, {}]}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: '#ffb907',
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}>
              <Text style={styles.textSign}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUPScreen;

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
    height: 40,
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
