/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert } from 'react-native';
import {View, Text,StyleSheet,TouchableOpacity,TouchableHighlight} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SlotUP = ({route}) => {
  const bid = route.params?.bid;
  const cid = route.params?.cid;
  const date = route.params?.date;
  const time = route.params?.time;
  const pid=2;
const slotUpdate =()=>{
  fetch('http://localhost:8080/SlotUpdate',{
    method:'PUT',
    headers:{
      'Content-Type':'application/json',
       
    },
    body:JSON.stringify({
      pid,
      bid,
    }),
  }).then(res=>console.log(res)).catch(err=>{
    console.log(err);
  })
  
};


  return (
    
    <View style={{
      paddingHorizontal:32,
      alignSelf:"center",
      marginTop:100,
      backgroundColor:"#FFF",
      height:400,
      elevation:1,
      width:350,
      borderRadius:15
  }}>
    
    

     <View style={{
         flexDirection:"row",
         alignItems:"center",
     }}>
         <Text 
           style={{
             fontFamily:"RobotoRegular",
              color:"#522289",
              fontSize:16}}>
             Booking ID
         </Text>

         <Text 
           style={{
             fontFamily:"RobotoRegular",
              color:"#522289",
              paddingLeft:116,
              fontSize:16}}>
             {bid}
         </Text>
     </View>

     <Text style={{
         fontSize:17,
         marginTop:-5,marginVertical:16,
         color:"#a2a2db"
     }}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
     </Text>
     <View style={{
         flexDirection:"row",
         alignItems:"center",
     }}>
         <Text 
           style={{
             fontFamily:"RobotoRegular",
              color:"#522289",
              fontSize:16}}>
             Customer ID
         </Text>

         <Text 
           style={{
             fontFamily:"RobotoRegular",
              color:"#522289",
              paddingLeft:116,
              fontSize:16}}>
             {cid}
         </Text>
     </View>

     <Text style={{
         fontSize:17,
         marginTop:-5,marginVertical:16,
         color:"#a2a2db"
     }}>
       - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
     </Text>

     <View style={{
         flexDirection:"row",
         marginTop:10,
         alignItems:"center"
     }}>
         <Text style={{
             fontFamily:"RobotoRegular",
             fontSize:16,
             color:"#522289"
         }}>
            Date
         </Text>
         <Text style={{
             fontFamily:"RobotoRegular",
             color:"#522289",
             paddingLeft:70,
             fontSize:16
         }}>
            {date}
         </Text>

     </View>
    


    
     <Text style={{
         fontSize:17,
         marginTop:-5,marginVertical:16,
         color:"#a2a2db"
     }}>
       - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  
     </Text>

     <View style={{
         flexDirection:"row",
         alignItems:"center",
     }}>
         <Text 
           style={{
             fontFamily:"RobotoRegular",
              color:"#522289",
              fontSize:16}}>
            Payment
         </Text>

         <Text 
           style={{
             fontFamily:"RobotoRegular",
              color:"#522289",
              paddingLeft:116,
              fontSize:16}}>
             Online
         </Text>
     </View>

     <Text style={{
         fontSize:17,
         marginTop:-5,marginVertical:16,
         color:"#a2a2db"
     }}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
     </Text>
    
     <View style={{
         flexDirection:"row",
         alignItems:"center"
     }}>
         <Text style={{
             fontSize:16,
             fontFamily:"RobotoRegular",
             color:"#522289"
         }}>
            Estimated  Time
         </Text>
         <Text style={{
             fontSize:16,
             fontFamily:"RobotoBold",
             color:"#4b3ca7",
             paddingLeft:72,
         }}>
            {time}
         </Text>
     </View>

     <TouchableHighlight
      underlayColor="#6600bb"
      style={{
          width:200,
          marginLeft:5,
          elevation:2,
          marginTop:25,
          backgroundColor:"#ffb907",
          paddingVertical:13,
          borderRadius:25,
          alignSelf:"center"
      }}
      onPress={() => slotUpdate()}
     >
         <Text style={{
             fontFamily:"RobotoBold",
             color:"#FFF",
             textAlign:"center",
             fontSize:18
         }}>
             Timer Start
         </Text>
     </TouchableHighlight>

    
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
