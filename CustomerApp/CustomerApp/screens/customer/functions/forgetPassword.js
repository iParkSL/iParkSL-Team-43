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
export default class App extends Component{
    state={
        data:[],
        email:'',
        k:0,
        na:'hello1',
    }
    componentDidMount(){
        axios.get(`http://localhost:8080/getEmails`
          ).then(res=>{
            // console.log(res);
          this.setState({
            data:res.data,
            });
          });
          
      }

      objectLength(obj) {
         var result = 0; 
         for(var prop in obj) { 
           if (obj.hasOwnProperty(prop)) { 
             // or Object.prototype.hasOwnProperty.call(obj, prop) 
             result++; 
            } 
          } return result; 
        } 

      faultAlert = () =>
    Alert.alert(
      "ERROR",
      "Email doesn't Exsist",
      [
        {text: "Cancel"},
        { text: "OK" }
      ]
    );
    successAlert = () =>
    Alert.alert(
      "SUCCESS",
      "Reset link will send for email",
      [
        { text: "OK", onPress: () => this.props.navigation.push('checkPassword') }
      ]
    );

    errorAlert = () =>
    Alert.alert(
      "ERROR",
      "Failed to send email",
      [
        { text: "OK"}
      ]
    );

      login(){
        const email=this.state.email;
        var i;
        var k=0;
        var number=this.objectLength(this.state.data);
       

        for(i=0;i<number;i++){
            if(this.state.data[i].email==email){
                k++

            }
        }

        if(k===1){
          axios.post('http://localhost:8080/forgetPassword',{email:email}).then(res=>{
            if(res.data==='SUCCESS'){
              this.props.navigation.push('checkPasscode',
              {
                email: `${email}`, 

                }
              );
            }

          }).catch(error=>{
            console.log(error);
          });
          

        }
        if(k===0){
            this.faultAlert();
        }
        
      };
    render(){
        return(
            <View style={styles.container}>
        <StatusBar backgroundColor="#ffb907" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>ForgetPassword</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            {/* <FontAwesome name="user-o" color="#05375a" size={20} /> */}
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
            //   name="emailtext"
            //   value={emailtext}
              onChangeText={(text) => {this.setState({email: text})}}
            />
          </View>
          
          <View style={styles.Button}>
            <TouchableOpacity onPress={()=> {this.login() }}>
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
