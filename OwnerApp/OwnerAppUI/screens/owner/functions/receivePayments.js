import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Component } from 'react';
import axios from 'axios';

// import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');
const height = width * 0.6;

export default class myParks extends Component {
  state ={
    data:[]
  }
  componentDidMount(){
    axios.get('http://localhost:8080/receivePayments').then(res=>{
      console.log(res);
    this.setState({
      data:res.data,
      });
    });

  }
  render(){
    return (
      <View style={{width}}>
        <ScrollView>
          <View>
              {
                this.state.data.map((item)=>(
                <View
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 10,
                    width: '90%',
                    height: 120,
                    margin: '5%',
                    marginBottom: 10,
                    flexDirection: 'row',
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.8,
                    shadowRadius: 2.22,
                    elevation: 3,
                  }}>
                  <View style={{width: '40%', height: '100%'}}>
                    <Image
                      // key={index}
                      source={{uri: item.profimage}}
                      style={{
                        width: '90%',
                        height: '100%',
                        resizeMode: 'cover',
                        borderRadius: 150,
                      }}
                    />
                  </View>
                  <View style={{width: '50%', marginTop: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>
                      {item.name}
                    </Text>
                    <Text style={{}}>{item.date}</Text>
                    <Text style={{}}>{item.time}</Text>
                    <View style={{marginTop: 20}}></View>
                  </View>
                </View>
              ))
              }
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#ffd700',
    padding: 20,
    marginBottom: 10,
  },
});
