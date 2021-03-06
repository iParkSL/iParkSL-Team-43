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
  TouchableOpacity,
} from 'react-native';

import {Component} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const {width} = Dimensions.get('window');
const height = width * 0.6;

export default class myParks extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    AsyncStorage.getItem('id').then((id)=>{

      axios.get('http://localhost:8080/recentBookings', {params: {id:id}}).then(res => {
        console.log(res.data);
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
                key={item.bid}
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 10,
                  width: '90%',
                  height: 120,
                  margin: '5%',
                  marginBottom: 10,
                  flexDirection: 'row',
                  shadowColor: '#000000',
                  shadowOffset: {width: 0, height: 1},
                  shadowOpacity: 0.8,
                  shadowRadius: 2.22,
                  elevation: 3,
                }}>
                <View style={{width: '40%', height: '100%'}}>
                  <Image
                    key={item.bid}
                    source={{uri: item.profimage}}
                    style={{
                      width: '90%',
                      height: '90%',
                      resizeMode: 'cover',
                      marginTop: 6,
                    }}
                  />
                </View>
                <View key={item.bid} style={{width: '50%', marginTop: 12}}>
                  <Text key={item.bid} style={{fontSize: 16, marginBottom: 3}}>
                    {item.name}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    {item.isScaned == 0 && (
                      <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                          this.props.navigation.push('Scan', {
                            bid: `${item.bid}`,
                            pid: `${item.pid}`,
                          });
                        }}>
                        <View
                          style={[styles.signIn, {backgroundColor: '#ffb907'}]}>
                          <Text
                            key={item.bid}
                            style={[
                              styles.textSign,
                              {
                                color: '#000000',
                              },
                            ]}>
                            Scan
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                    {item.isScaned != 0 && (
                      <TouchableOpacity
                        key={item.bid}
                        style={styles.signIn}
                        onPress={() => {
                          this.props.navigation.push('timerUpdate', {
                            bid: `${item.bid}`,
                            pid: `${item.pid}`,
                          });
                        }}>
                        <View
                          style={[styles.signIn, {backgroundColor: '#87cefa'}]}>
                          <Text
                            key={item.bid}
                            style={[
                              styles.textSign,
                              {
                                color: '#000000',
                              },
                            ]}>
                            Timer
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
// export default receivePayments;
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#ffd700',
    padding: 20,
    marginBottom: 10,
  },

  signIn: {
    width: '65%',
    height: 35,
    justifyContent: 'center',
    //alignItems: 'space-between',
    borderRadius: 6,
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
});
