

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
const height = width * 0.6;
const images = [];
var i=0;
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
// const App = () => (
  export default class App extends Component{
    // constructor(props){
    //   super(props)
    // }
    state ={
      data:[],
  }
  componentDidMount(){
    axios.get('http://localhost:8080/reviews'
      ).then(res=>{
        console.log(res);
      this.setState({
        data:res.data,
        });
      });

}
  
  render(){
      const {name,image1,image2,image3,image4,slots,pid,description} =this.props.route.params;
      i = i+1
      if(i<2){
        images.push(image1)
        images.push(image2)
        images.push(image3)
        images.push(image4)
      }
      
      // console.log(images)
      
      
      return(
        <View style={{width}}>
    <ScrollView>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorisontalScrollIndicator={false}
        style={{width, height}}>
        {images.map((item, index) => (
          <Image
            key={index}
            source={{uri: item}}
            style={{width, resizeMode: 'cover'}}
          />
        ))}
      </ScrollView>

      <Text
        style={{
          fontSize: 22,
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 10,
        }}>{name}</Text>

      <View>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            marginTop:5,
          }}>
          Available Slots : {slots}
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginLeft: 20,
            
          }}>
          Facilities
        </Text>
        <View style={{marginLeft: 30}}>
          <Text style={{fontSize: 16}}>{description}</Text>
          {/* <Text style={{fontSize: 16}}>2. CCTV</Text>
          <Text style={{fontSize: 16}}>3. Water</Text>
          <Text style={{fontSize: 16}}>4. Waiting area</Text> */}
        </View>
        <View style={{marginTop: 5}}>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 20,
              fontWeight: 'bold',
              marginBottom: 10,
              alignSelf: 'center',
            }}>
            Customer Reviews
          </Text>
          <ScrollView
            pagingEnabled
            horizontal
            showsHorisontalScrollIndicator={false}
            style={{width}}>
            {
              this.state.data.map((item)=>(

                <View
                  style={styles.Review}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
                  <Text style={{fontSize: 16, fontStyle:'italic'}}>"{item.description}".</Text>
                </View>
              ))
            }
            {/* <View
             style={styles.Review}>
              <Text style={{ fontWeight: 'bold', fontSize: 16}}>
                Shantha 
              </Text>
              <Text style={{fontSize: 16, fontStyle:'italic'}}>
                "Good parking area. Any customer can get better service".
              </Text>
            </View>
            <View
             style={styles.Review}>
            <Text style={{ fontWeight: 'bold', fontSize: 16}}>
                 Saman Zoyza
              </Text>
              <Text style={{fontSize: 16, fontStyle:'italic'}}>
                "Good parking area. Any customer can get better service".
              </Text>
            </View> */}
          </ScrollView>
        </View>
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => {this.props.navigation.push('updatePark')}}>
          <LinearGradient
            colors={['#FDC73E', '#ffb907']}
            style={[styles.signIn]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#000000',
                },
              ]}>
              Edit Park
            </Text>
          </LinearGradient>
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
    padding: 20,
    marginBottom: 10,
  },
  signIn: {
    width: '80%',
    height: 40,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 6,
    alignSelf: 'center',
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
  button: {
    flexDirection: 'row',
    // borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    paddingBottom: 5,
    alignSelf: 'center',
    marginBottom: 20,
    
  },
  Review:{      
    padding: 15,
    marginBottom: 20,
    width:200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 15,
    marginLeft:10,
    marginRight: 10,
    backgroundColor:'#e3e3e3',    
  },

 
});
