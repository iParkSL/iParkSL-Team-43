

import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Component } from 'react';
import axios from 'axios';

const {width} = Dimensions.get('window');

import LinearGradient from 'react-native-linear-gradient';

  export default class App extends Component{
   
    state ={
      time:0,
      price:0,
      k:0,
      rental:0
  }
  
  
  render(){
    const {bid} =this.props.route.params;
    if(this.state.k==0){
      axios.get('http://localhost:8080/makePayment/timeDiff',{params:{id:bid}}
        ).then(res=>{
          console.log(res.data);
        this.setState({
        k:1,
        time:res.data[0].time,
          
          });
        });
        axios.get('http://localhost:8080/makePayment/price',{params:{id:bid}}
        ).then(res=>{
          console.log(res.data);
        this.setState({
        price:res.data[0].price,
          
          });
        });

       var time=this.state.time;
       var price=this.state.price;
      
       var rental=time*price/60;
      //  this.setState({
      //   rental:rental,
          
      //     });
    }
      
      return(
        <View style={{width}}>
        <ScrollView>
        <Text style={{fontSize:20,marginBottom:20}}>
         Your Parking Time    {this.state.time}   minutes
        </Text>
        <Text style={{fontSize:20,marginBottom:20}}>
         Rental per hour    LKR  {this.state.price}.00
        </Text>
        <Text style={{fontSize:20}}>
         Your payment cost
        </Text>
        <Text style={{fontSize:40,marginLeft:150}}>
          LKR {Math.ceil(this.state.price*this.state.time/60)}.00
        </Text>
        <Text>
          {rental}
        </Text>
        
        <View style={{marginTop: 270, marginLeft: 10}}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => this.props.navigation.push('physicalPayment',{
                bid:`${bid}`
              })}>
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
                  Physical Payment
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 6, marginLeft: 10}}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => this.props.navigation.push('QrCode')}>
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
                  Online Payment
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </View>
      )
    }
  }
  
// );

// export default App;

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      backgroundColor: '#ffd700',
      padding: 10,
      marginBottom: 10,
    },
    signIn: {
      width: '98%',
      height: 35,
      justifyContent: 'center',
      // alignItems: 'center',
      borderRadius: 6,
    },
    textSign: {
      fontSize: 16,
      alignSelf: 'center',
      fontWeight: '600',
    },
  });