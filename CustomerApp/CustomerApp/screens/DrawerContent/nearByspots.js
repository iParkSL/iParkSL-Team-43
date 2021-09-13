import React, {Component} from "react";
import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
  } from 'react-native';

  class SettingsScreen extends Component{
      render(){
          <View style={styles.container}>
              <Text>Home</Text>
          </View>
      }
  }


  export default SettingsScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  