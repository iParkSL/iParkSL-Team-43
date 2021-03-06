import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (

    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
    <View style = {{flex: 1, backgroundColor: "#ffffff" }}>
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

export {HomeScreen};
export default HomeScreen;
