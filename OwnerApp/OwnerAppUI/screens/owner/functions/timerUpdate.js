/* eslint-disable prettier/prettier */
import React,{useEffect,useState} from 'react';
import { Alert } from 'react-native';
import {View, Text,StyleSheet,TouchableOpacity,TouchableHighlight,Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import { BorderlessButton } from 'react-native-gesture-handler';


const timerUpdate = ({route,navigation}) => {
  const [state, setState] = useState([]);

  const bid = route.params?.bid;

  const pid=route.params?.pid;
  

const Update =()=>{
  
  const x = {
    bid: bid,
  };
  
axios.put('http://localhost:8080/timerUpdate',x).then((res)=>{

  Alert.alert(`Timer Stop successfuly`);
  navigation.navigate('Tabs');

}).catch((err)=>{
  console.log(err);
});


  
};

useEffect(() => {
  axios
    .get('http://localhost:8080/timerUpdate',{
      params: {
        bid: bid
      }
    })
    .then(res => {
      setState(res.data);
     
      console.log(res.data.date);
    })
    .catch(error => {
      console.log(error);
    });
}, []);






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
      
    
      {state.map(book=>{
        return(
          <View key={book.bid} style={styles.footer}>
          <Text style={[styles.text_footer]}>Date :{book.date}
         </Text>
         <Text 
            style={[styles.text_footer]}>
             Booking ID :  {book.EstimatedTime}
         </Text>
         <Text 
          style={[styles.text_footer]}
            >
             Customer ID : {book.cid}
         </Text>
         <Text 
           style={[styles.text_footer]}>
            Payment:  {book.pmethod}
         </Text>
         <Text style={[styles.text_footer]}>
            Estimated  Time : {book.EstimatedTime}
         </Text>
         
   
     {book.timerOn  !=0 &&(
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
      onPress={() => Update()}
     >
         <Text style={{
             fontFamily:"RobotoBold",
             color:"#FFF",
             textAlign:"center",
             fontSize:18
         }}>
             Timer Stop
         </Text>
     </TouchableHighlight>
     )}
    </View>
    
     );})}

    
    
  
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
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    // marginLeft:5,

    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
  },
});






export default timerUpdate;
