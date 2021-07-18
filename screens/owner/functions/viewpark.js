import React, {useState} from 'react';
import {icons, COLORS, SIZES, theme} from '../../../constants/index';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  Text,
  Alert,
  ScrollView,
} from 'react-native';

export default function RecentBookings() {
  const [people, setPeople] = useState([
    {name: 'Rashan', key: '1'},
    {name: 'Malith', key: '2'},
    {name: 'Kalana', key: '3'},
    {name: 'Yasiru', key: '4'},
    {name: 'Rajitha', key: '5'},
    {name: 'Nipun', key: '6'},
    {name: 'Rashan', key: '7'},
    {name: 'Malith', key: '8'},
    {name: 'Kalana', key: '9'},
    {name: 'Yasiru', key: '10'},
    {name: 'Rajitha', key: '11'},
    {name: 'Nipun', key: '12'},
  ]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          {people.map(item => (
            <View key={item.item} style={styles.item}>
              <Text style={styles.title}>{item.name} Booked your park</Text>
              <View style={styles.fixToText}>
                <Button
                  title="View Details"
                  color="#000000"
                  //onPress={() => Alert.alert('Accept Successfull')}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: COLORS.orange,
    fontSize: 24,
    borderRadius: 4,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 4,
  },
  title: {
    textAlign: 'left',
    marginVertical: 8,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
