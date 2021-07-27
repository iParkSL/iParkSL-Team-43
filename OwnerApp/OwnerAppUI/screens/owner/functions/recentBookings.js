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

const {width} = Dimensions.get('window');
const height = width * 0.6;

const receivePayments = () => (
  <View style={{width}}>
    <SafeAreaView>
      <View>
        <FlatList
          data={[
            {
              key: '1',
              name: 'Amal Perara booked ABC park',
              image:
                'https://digitalbrandblueprint.com/wp-content/uploads/2020/09/Portrait-300-01-1980x1980.png',
              date: '2021/2/27',
              time: '14.30',
            },
            {
              key: '2',
              name: 'Kamal Dias booked ABC park',
              image:
                'https://digitalbrandblueprint.com/wp-content/uploads/2020/09/Portrait-300-01-1980x1980.png',
              date: '2021/2/27',
              time: '14.30',
            },
            {
              key: '3',
              name: 'Shantha Silva booked CDE park',
              image:
                'https://digitalbrandblueprint.com/wp-content/uploads/2020/09/Portrait-300-01-1980x1980.png',
              date: '2021/2/27',
              time: '14.30',
            },
            {
              key: '4',
              name: 'Ama Gamage booked CDE park',
              image:
                'https://digitalbrandblueprint.com/wp-content/uploads/2020/09/Portrait-300-01-1980x1980.png',
              date: '2021/2/27',
              time: '14.30',
            },
            {
              key: '5',
              name: 'Kamal Perera booked CDE park',
              image:
                'https://digitalbrandblueprint.com/wp-content/uploads/2020/09/Portrait-300-01-1980x1980.png',
              date: '2021/2/27',
              time: '14.30',
            },
          ]}
          renderItem={({item}) => (
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
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 2.22,
                elevation: 3,
              }}>
              <View style={{width: '40%', height: '100%'}}>
                <Image
                  // key={index}
                  source={{uri: item.image}}
                  style={{
                    width: '90%',
                    height: '90%',
                    resizeMode: 'cover',
                    marginTop: 6,
                  }}
                />
              </View>
              <View style={{width: '50%', marginTop: 12}}>
                <Text style={{fontSize: 16, marginBottom: 3}}>{item.name}</Text>

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
          )}
        />
      </View>
    </SafeAreaView>
  </View>
);
export default receivePayments;
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#ffd700',
    padding: 20,
    marginBottom: 10,
  },

  signIn: {
    width: '90%',
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
