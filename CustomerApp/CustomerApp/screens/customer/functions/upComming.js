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
import AsyncStorage from '@react-native-community/async-storage';
import {Component} from 'react';
import axios from 'axios';

const {width} = Dimensions.get('window');
const height = width * 0.6;
const images = [];
var i = 0;
import LinearGradient from 'react-native-linear-gradient';
// import { Cookie }from 'react-native-cookie';
// const App = () => (
export default class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  state = {
    data: [],
    // id,
  };
  componentDidMount() {
    AsyncStorage.getItem('id').then((id)=>{
      axios
      .get('http://localhost:8080/upComing', {params: {id:id}})
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data,
        });
      });
    })
  }
  // Cookie.set('http://bing.com',{
  //   bookingID:this.state.data[0].bid
  // }).then(()=>console.log('success'));

  render() {
    return (
      <View style={{width}}>
        <ScrollView>
          {this.state.data.map(item => (
            <View
              key={item.bid}
              style={{
                marginTop: 10,
                marginBottom: 20,
                flexDirection: 'row',
                paddingHorizontal: 6,
              }}>
              <View style={{width: '40%', height: '110%'}}>
                <Image
                  source={{
                    uri: item.image1,
                  }}
                  style={{
                    margin: 10,
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: 'cover',
                    borderRadius: 10,
                  }}
                />
              </View>
              <View style={{width: '60%', height: '50%', marginTop: 8}}>
                <View>
                  <Text
                    style={{marginLeft: 10, fontWeight: 'bold', fontSize: 20}}>
                    {item.parkname}
                  </Text>

                  <Text style={{marginLeft: 10, fontSize: 16}}>
                    {item.address}
                  </Text>
                  <Text style={{marginLeft: 10, fontSize: 16}}>
                    Rental per hour Rs {item.price}.00
                  </Text>
                  <Text style={{marginLeft: 10, fontSize: 16}}>
                    Date : {item.date}
                  </Text>
                  <Text style={{marginLeft: 10, fontSize: 16}}>
                    Time : {item.time}
                  </Text>
                  <View style={{marginTop: 6, marginLeft: 10}}>
                    <TouchableOpacity
                      style={styles.signIn}
                      onPress={() =>
                        this.props.navigation.push('QrCode', {
                          cid: `${item.cid}`,
                          date: `${item.date}`,
                          time: `${item.time}`,
                          parkname: `${item.parkname}`,
                          bid: `${item.bid}`,
                          image1: `${item.image1}`,
                        })
                      }>
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
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
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
