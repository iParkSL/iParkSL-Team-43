import React from 'react';
import {View, Text, Button, StyleSheet,ImageBackground} from 'react-native';

const DetailsScreen = ({navigation},props) => {
  return (
    <ImageBackground source={require('./img/carPark.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.topic}>
          About iParkSL?
        </Text>
        <Text style={styles.subtopic}>
         Our App
        </Text>
        <Text style={styles.pargraph}>
      iParkSL helps people to find better parking slots easier. The system show real time locations and route maps to available parking slots. You can make easy payment online to the parking place. 
    And also iParkSL helps people who have free spaces to earn extra income by making their free spaces as vehicle parks.
   
        </Text>

       
        <Text style={styles.subtopic}>
         Our Misson
        </Text>
        <Text  style={styles.pargraph}>
        Our goal is to make an online platform to find a parking slot without any external help from a third person.
        We hope people can save time by using this mobile application and make it easier to park their vehicles.
        </Text>
        
      </View>
    </ImageBackground>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },

  topic: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 15,
  },

  subtopic: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15,
  },

  pargraph: {
    marginTop: 5,
    color: '#000000',
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
