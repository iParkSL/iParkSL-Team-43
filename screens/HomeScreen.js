import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> 7cc9a7b0a76facccf13db7cd45587ccbdd7204ad
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
<<<<<<< HEAD
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
=======
    <View style = {{flex: 1, backgroundColor: "#ffffff" }}>
>>>>>>> 7cc9a7b0a76facccf13db7cd45587ccbdd7204ad
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});

<<<<<<< HEAD
export {HomeScreen};
=======
export default HomeScreen;
>>>>>>> 7cc9a7b0a76facccf13db7cd45587ccbdd7204ad
