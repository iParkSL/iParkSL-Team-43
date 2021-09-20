

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
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Component } from 'react';
import axios from 'axios';

const {width} = Dimensions.get('window');
const height = width * 0.6;
const images = [];
var i=0;
import LinearGradient from 'react-native-linear-gradient';

  export default class App extends Component{
 
    state ={
      k:0,
      bid:0,
      isPaid:0,
  }
  
  componentDidMount() {
    this.timer = setInterval(() => this.isPaid(), 5000);
  }
  async isPaid(){
    if(this.state.isPaid==1){
      axios.get('http://localhost:8080/physicalPayment/isPaid',{params:{id:this.state.bid}}
      ).then(res=>{
        console.log(res);
      this.setState({
        isPaid:res.data[0].isPaid,
        });
      });
    }
    
  }
  // componentWillUnmount(){
  //   // clearInterval(this.interval);
  // }
  
  
  successnotification = () =>
  Alert.alert(
    "SUCCESS",
    "Transaction processed successfully",
    [
      { text: "OK", onPress: () => this.props.navigation.push('Home') }
      // { text: "OK", onPress: () => this.props.navigation.push('reviewForm',{
      //   bid:`${this.state.bid}`
      // }) }
    ]
  );
  render(){
      
    const {bid} =this.props.route.params;
    if(this.state.k==0){
      axios.post('http://localhost:8080/physicalPayment/physicalPayment',
        {   id:bid,
        }).then(res=>{
            if(res.data==='SUCCESS'){
              this.setState({
                k:1,
                bid:bid
              });
            }
            
          }).catch(error=>{
            console.log(error);
          });
        

    }
      
      return(
        <View style={{width}}>
        {this.state.isPaid===0 && (
          <View style={{fontSize:40}}>
            <Text>Transaction processing</Text>
          </View>
        )

        }
        {this.state.isPaid==1 && (
          this.successnotification()
          )

        }
          
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
      width: '80%',
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