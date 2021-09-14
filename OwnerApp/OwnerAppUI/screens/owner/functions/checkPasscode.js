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
        SecurityCode:'',
        code:'',
        k:0
    }
    
    checkCode(email){
        // this.getcode(email);
        console.log(this.state.code);
        console.log(this.state.SecurityCode);
        if(this.state.code==this.state.SecurityCode){
            this.successAlert(email)
        }else{
            this.errorAlert()
        }
    }

    errorAlert = () =>
    Alert.alert(
      "ERROR",
      "Wrong Security Code",
      [
        { text: "OK",onPress: () => this.props.navigation.push('forgetPassword')}
      ]
    );
    successAlert(email){
        Alert.alert(
        "SUCCESS",
        "Update your Password",
        [
            { text: "OK",onPress: () => this.props.navigation.push('resetPassword',{email:email})}
        ]
        );
    }
      
    render(){
    const {email} =this.props.route.params;
    if(this.state.k==0){
        axios.get(`http://localhost:8080/checkCode`,{params:{email:email}}
        ).then(res=>{
        //   console.log(res.data);
        this.setState({
            SecurityCode:res.data[0].passwordCode,
          });
        });
        this.setState({
            k:1
        })
    }
    
        return(
            <View style={styles.container}>
        <StatusBar backgroundColor="#ffb907" barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Check Security Code</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <Text style={styles.text_footer}>Security Code</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Security Code"
              style={styles.textInput}
              autoCapitalize="none"
            //   name="emailtext"
            //   value={emailtext}
              onChangeText={(text) => {this.setState({code: text})}}
            />
          </View>
          
          <View style={styles.Button}>
            <TouchableOpacity onPress={()=> {this.checkCode(email) }}>
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
