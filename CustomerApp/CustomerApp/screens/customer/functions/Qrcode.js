// 'use strict';

import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';

import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import axios from 'axios';

class HelloWorld extends Component {
  state = {
    text: 'http://facebook.github.io/react-native/',
    qrbutton: 0,
    k:0,
    id:0
  };
  componentDidMount(){
    this.timer=setInterval(()=> this.qrFunction(),5000)
  }
  async qrFunction(){
    if(this.state.qrbutton==0){
      axios.get('http://localhost:8080/isScaned',{params:{id:this.state.id}}
        ).then(res=>{
          console.log(res);
        this.setState({
          qrbutton:res.data[0].isScaned,
          });
        });
    }
  }
  render() {
    const {cid,date,time,parkname,bid,image1} =this.props.route.params;
    // i = i+1
    if(this.state.k==0){
      this.setState({
        id:bid,
        k:1
        });
    }
    
    return (
        <View style={styles.container}>
          {/* <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text: text})}
            value={this.state.text}
          /> */}
          <View style={{marginBottom:20}}>
            <Text style={{fontSize:25}}>Your Booking QRCode</Text>
          </View>
          {this.state.qrbutton==1 &&(
            this.props.navigation.push('timer',{bid:bid})
          )}
          <View style={{marginTop: 6, marginLeft: 10}}>
            {/* <TouchableOpacity
              style={styles.signIn}
              onPress={() => this.props.navigation.push('timer',{bid:bid}
              )}>
              <View
                // colors={['#FDC73E', '#ffb907']}

                style={[styles.signIn, {backgroundColor: '#ffb907'}]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#000000',
                    },
                  ]}>
                  QR Code
                </Text>
              </View>
            </TouchableOpacity> */}
          </View>
          <QRCode
            style={styles.qr}
            value={cid+date+time+parkname+bid+image1}
            size={600}
            bgColor='purple'
            fgColor='white'/>
            
        </View>
    );
  };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft:25
    },
    outer:{
        backgroundColor:'white'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    },
    qr:{
        marginLeft:20,
        marginBottom:100
    }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

module.exports = HelloWorld;