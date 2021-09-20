import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Component} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
// import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');
const height = width * 0.6;

export default class myParks extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    AsyncStorage.getItem('id').then((id)=>{
    axios.get('http://localhost:8080/myParks', {params: {id:id}}).then(res => {
      console.log(res);
      this.setState({
        data: res.data,
      });
    });
  })
  }

  render() {
    return (
      <View style={{width}}>
        <ScrollView>
          <View>
            {this.state.data.map(item => (
              <View
                key={item.pid}
                style={{
                  marginTop: 10,
                  marginBottom: 20,
                  flexDirection: 'row',
                  paddingHorizontal: 6,
                }}>
                <View style={{width: '40%', height: '110%'}}>
                  <Image
                    // var img = {item.image1}
                    // console.log(img)
                    // ../parkImages/SkyPark1.jpg
                    // `${item.item.image1}`
                    // src={item.image1}
                    source={{uri: item.image1}}
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
                      style={{
                        marginLeft: 10,
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {item.parkname}
                    </Text>

                    <Text style={{marginLeft: 10, fontSize: 16}}>
                      {item.address}
                    </Text>
                    <Text style={{marginLeft: 10, fontSize: 16}}>
                      Rental per hour Rs{item.price}
                    </Text>

                    <View style={{marginTop: 6, marginLeft: 10}}>
                      <TouchableOpacity
                        style={styles.signIn}
                        onPress={() =>
                          this.props.navigation.push('viewPark', {
                            name: `${item.parkname}`,
                            image1: `${item.image1}`,
                            image2: `${item.image2}`,
                            image3: `${item.image3}`,
                            image4: `${item.image4}`,
                            slots: `${item.slots}`,
                            pid: `${item.pid}`,
                            description: `${item.description}`,
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
                            View Details
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
            {/* data={this.state.data}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item})=>
                        <View>
                            <Text>{item.parkname}</Text>
                        </View>
                    }  */}
          </View>
          {/* <View
        style={{
          marginTop: 10,
          marginBottom: 20,
          flexDirection: 'row',
          paddingHorizontal: 6,
        }}>
        <View style={{width: '40%', height: '110%'}}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.eb9bfbacf609993c343b6cbf6451f0b2?rik=B80jkW5BW5zRiQ&riu=http%3a%2f%2fi.gettysburgdaily.com%2fimgs%2fCycloramaParkingLot051911%2fCycloramaParkingLot05191104.jpg&ehk=q91W9%2bA%2f8ic3EtDDRt8NUvBWkVzKQl1ADNlnLQso6vk%3d&risl=&pid=ImgRaw',
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
            <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 20}}>
              Sky Parks
            </Text>

            <Text style={{marginLeft: 10, fontSize: 16}}>
              Duplication Road, Colombo
            </Text>
            <Text style={{marginLeft: 10, fontSize: 16}}>
              Rental per hour Rs 50.00
            </Text>

            <View style={{marginTop: 6, marginLeft: 10}}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => this.props.navigation.push('viewPark')}>
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
                    View Details
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View> */}
        </ScrollView>
      </View>
    );
  }
}

// export default myParks;

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
