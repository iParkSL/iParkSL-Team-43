/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert } from 'react-native';
import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SlotUP = ({route}) => {
  const data = route.params?.data;
  const pid=118;
const slotUpdate =()=>{
  fetch('http://localhost:8080/SlotUpdate',{
    method:'post',
    headers:{
      'Content-Type':'application/json',

    },
    body:JSON.stringify({
      pid,
    }),
  }).then(res=>res.json()).catch(err=>{
    console.log(err);
  })
  
};







  return (
    <View>
      <View><Text>{data}</Text>
      <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => slotUpdate()
         }>
            <LinearGradient
              colors={['#FDC73E', '#ffb907']}
              style={[styles.signIn]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000000',
                  },
                ]}>
                Update slots
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      
      
      
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  
  
  button: {
    marginTop: 15,
    flexDirection: 'row',
    // marginLeft:
  },
  signIn: {
    width: '65%',
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
  
});











export default SlotUP;
