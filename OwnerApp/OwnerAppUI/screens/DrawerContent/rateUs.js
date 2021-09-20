import React,{useState} from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity,Image} from 'react-native';


const DetailsScreen = ({navigation}) => {
  const [defaultRating,setdefaultRating] = useState(2);
  const [maxRating,setmaxRating] = useState([1,2,3,4,5]);

  const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png';
  const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png';
  
  const CustomerRatingBar = () =>{
    return(
      <View style={styles.CustomerRatingBarStyle}>
      {
        
        maxRating.map((item,key) => {
          return (
            <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={()=>setdefaultRating(item)}>
            
            <Image
            style={styles.starImgStyle}
            source={
              item <= defaultRating
              ? {uri: starImgFilled}
              : {uri: starImgCorner} 
            }>

            </Image>
            </TouchableOpacity>
          )
        })
      }
      </View>
    )
  }
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Please Rate Us</Text>
        <CustomerRatingBar />
        
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'center'
  },

  textStyle: {
      textAlign: 'center',
      fontSize: 23
  },
  CustomerRatingBarStyle: {
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 30
  },

  starImgStyle: {
      width: 40,
      height: 40,
      resizeMode: 'cover'
  }

});