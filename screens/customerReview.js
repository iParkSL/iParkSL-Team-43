import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  SafeAreaView,

} from 'react-native';
import {Avatar} from 'react-native-paper';

import {createStackNavigator} from '@react-navigation/stack';




const HomeScreen = ({navigation}) => {
  const[defaultRating,setdefaultRating] = useState(2)
  const[maxRating,setmaxRating] = useState([1,2,3,4,5])

  const starImgFilled='https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
  const starImgCorner='https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'

  const CustomerRatingBar = ()=>{
return(
  <View style = {styles.customerRatingBarStyle}>
    {
      maxRating.map((item,key)=>{
        return(
          <TouchableOpacity
              activeOpacity = {0.7}
              key = {item}
              onPress ={()=> setdefaultRating(item)}
            >
              <Image
              style={styles.starImgStyle}
              source={
                item <= defaultRating
                ?{uri:starImgFilled}
                :{uri:starImgCorner}
              }
              />
            </TouchableOpacity>



        )
      }) 
    }
  </View>
)

  }
  
  return (
    <ScrollView>
      <View style={styles.footer}>
      <Avatar.Image
          source={require('./Image/profile.png')}
          size={100}
          style={{alignSelf:'center'}}
          />
      <SafeAreaView>
      <Text style={{alignSelf:'center',marginTop:20}}>Please Rate Us</Text>
       <CustomerRatingBar/>
       </SafeAreaView>

        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
           
            multiline={true}
            placeholder="Additional Comments..."
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>
        
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.button,  {rightMargin:100} ]}>
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <View
                // colors={['#FDC73E', '#ffb907']}
                style={[styles.signIn]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#000000',
                    },
                  ]}>
                  Not Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.space} ></View> 
          <View style={[styles.button , {leftMargin:100}]}>
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <View
                // colors={['#FDC73E', '#ffb907']}
                style={[styles.signIn]}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#000000',
                    },
                  ]}>
                  Submit Now
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>

    
  );
};

const Stack = createStackNavigator();

const App = navigation => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ffb907',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '900',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Customer Review ',
            headerTintColor: 'black',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    // backgroundColor: '#fff',
    // marginLeft:5,

    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: 30,
    alignSelf: 'center',
    color: 'red',
  },
  text_header: {
    color: 'black',
    // fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 16,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#cdd7de',
    paddingBottom: 3,
  },
  textInput: {
    flex: 1,
    height: 140,
    marginTop: Platform.OS === 'ios' ? 0 : -5,
    paddingLeft: 10,
    color: '#05375a',
    // borderWidth:1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ffb907',
  },
  button: {
    marginTop: 15,
    width: 175,
    flexDirection: 'row',
    marginTop: 50
  },
  signIn: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffb907',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  customerRatingBarStyle : {
   justifyContent:'center',
   flexDirection : 'row',
   marginTop : 30,
   marginBottom : 80
  
  },
  starImgStyle:{
    width:30,
    height : 30,
    resizeMode : 'cover'
  }
});

export default App;
