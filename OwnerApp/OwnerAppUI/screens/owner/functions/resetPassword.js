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
  Linking,
  Alert,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Component } from 'react';
import validator from 'validator';
export default class App extends Component{
    state={
        data:[],
        firstPassword:'',
       secondPassword:''
    }
        
        nullnotification = () =>
    Alert.alert(
      "ERROR",
      "Fields must filed",
      [
        { text: "OK" }
      ]
    );
    equalenotification = () =>
    Alert.alert(
      "ERROR",
      "Both passwords must equal",
      [
        { text: "OK"}
      ]
    );

    lownotification = () =>
    Alert.alert(
      "ERROR",
      "Password must contain Lowercase,Uppercase,Numbers,Symbols",
      [
        { text: "OK"}
      ]
    );

    successnotification = () =>
    Alert.alert(
      "SUCCESS",
      "Password update successfully",
      [
        { text: "OK", onPress: () => this.props.navigation.push('SignInScreen') }
      ]
    );

    submitFunction(email){
        const first=this.state.firstPassword;
        const second=this.state.secondPassword;
        if(first != '' && second != ''){
            if(first==second){
                if (validator.isStrongPassword(first, {
                    minLength: 8, minLowercase: 1,
                    minUppercase: 1, minNumbers: 1, minSymbols: 1
                  })) {
                    axios.post('http://localhost:8080/resetPassword',
                    {   email:email,
                        password:first,
                    }).then(res=>{
                        if(res.data==='SUCCESS'){
                          this.successnotification()
                        }
                        
                      }).catch(error=>{
                        console.log(error);
                      });
                        
                  } else {
                    this.lownotification()
                  }
            }else{
                this.equalenotification()
            }
        }else{
            this.nullnotification()
    
        }
        
        
      }
    render(){
    const {email} =this.props.route.params;

        return(
            <View style={styles.container}>
        <StatusBar backgroundColor="#ffb907" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>ResetPassword</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>New Password</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="New Password"
              style={styles.textInput}
              autoCapitalize="none"
            //   name="emailtext"
            //   value={emailtext}
              onChangeText={(text) => {this.setState({firstPassword: text})}}
            />
          </View>

          <Text style={styles.text_footer}>Confirm Password</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Repeat it again"
              style={styles.textInput}
              autoCapitalize="none"
            //   name="emailtext"
            //   value={emailtext}
              onChangeText={(text) => {this.setState({secondPassword: text})}}
            />
          </View>
          
          <View style={styles.Button}>
            <TouchableOpacity onPress={()=>this.submitFunction(email)}>
              <LinearGradient
                colors={['#ffb907', '#ffb907']}
                style={[
                  styles.signIn,
                  {
                    marginTop: 30,
                  },
                ]}>
                <Text style={[styles.textSign, {}]}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          
        </Animatable.View>
      </View>
        )
    }
}

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
});
