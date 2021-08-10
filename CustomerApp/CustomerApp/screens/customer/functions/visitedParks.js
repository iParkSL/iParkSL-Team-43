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

// import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('window');
const height = width * 0.6;

const myParks = ({navigation}) => (
  <View style={{width}}>
    <ScrollView>
      <View
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
                onPress={() => navigation.push('viewPark')}>
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

      <View
        style={{marginBottom: 20, flexDirection: 'row', paddingHorizontal: 6}}>
        <View style={{width: '40%', height: '110%'}}>
          <Image
            source={{
              uri: 'https://www.relumination.com/wp-content/uploads/2014/06/pl.jpg',
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
              Star Parkings
            </Text>
            <Text style={{marginLeft: 10, fontSize: 16}}>
              Wijerama Road, Nugegoda
            </Text>
            <Text style={{marginLeft: 10, fontSize: 16}}>
              Rental per hour Rs 40.00
            </Text>

            <View style={{marginTop: 6, marginLeft: 10}}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  navigation.navigate('home');
                }}>
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
      <View
        style={{marginBottom: 20, flexDirection: 'row', paddingHorizontal: 6}}>
        <View style={{width: '40%', height: '110%'}}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Subterranean_parking_lot.jpg',
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
              Park Tokyo
            </Text>
            <Text style={{marginLeft: 10, fontSize: 16}}>
              Wijerama Road, Nugegoda
            </Text>
            <Text style={{marginLeft: 10, fontSize: 16}}>
              Rental per hour Rs 40.00
            </Text>
            <View style={{marginTop: 6, marginLeft: 10}}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  navigation.navigate('home');
                }}>
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

      <View
        style={{marginBottom: 10, flexDirection: 'row', paddingHorizontal: 6}}>
        <View style={{width: '40%', height: '110%'}}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Subterranean_parking_lot.jpg',
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
              Park ABC
            </Text>
            <Text style={{marginLeft: 10, fontSize: 16}}>
              Wijerama Road, Nugegoda
            </Text>
            <Text style={{marginLeft: 10, fontSize: 16}}>
              Rental per hour Rs 40.00
            </Text>
            <View style={{marginTop: 6, marginLeft: 10}}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  navigation.navigate('home');
                }}>
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
    </ScrollView>
  </View>
);

export default myParks;


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
