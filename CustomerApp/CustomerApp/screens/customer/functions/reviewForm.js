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

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component{
    state={
        response:''
    }
        
    nullnotification = () =>
    Alert.alert(
      "ERROR",
      "Fields must filed",
      [
        { text: "OK" }
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

    submitFunction(bid){
        const response=this.state.response;
        if(response != ''){
                AsyncStorage.getItem('id').then((id)=>{
                
                    axios.post('http://localhost:8080/reviewForm',
                    {   id:id,
                        bid:bid,
                        response:response,
                    }).then(res=>{
                        if(res.data==='SUCCESS'){
                          this.successnotification()
                        }
                        
                      }).catch(error=>{
                        console.log(error);
                      });
                        
                })
            
        }else{
            this.nullnotification()
    
        }
        
        
      }
    render(){
        const {bid} =this.props.route.params;

        return(
            <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Feedback Form</Text>
        </View>
          <Text style={styles.text_footer}>Your Feedback of our service</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="response here"
              style={styles.textInput}
              autoCapitalize="none"
            //   name="emailtext"
            //   value={emailtext}
              onChangeText={(text) => {this.setState({response: text})}}
            />
          </View>

          
          
          <View style={styles.Button}>
            <TouchableOpacity onPress={()=>this.submitFunction(bid)}>
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
