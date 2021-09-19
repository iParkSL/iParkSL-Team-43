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
import {Component} from 'react';
import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';
var id = '1';
const {width} = Dimensions.get('window');
const height = width * 0.6;
export default class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/visitedParks/`, {params: {id}})
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data,
        });
      });
  }
  render() {
    return (
      <View style={{width}}>
        <ScrollView>
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
                          pid: item.pid,
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
        </ScrollView>
      </View>
    );
  }
}

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
