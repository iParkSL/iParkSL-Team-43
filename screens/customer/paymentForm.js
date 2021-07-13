import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
    Image
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DrawerContent} from '../screens/DrawerContent';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import nextScreen from './addparknext';

const HomeScreen = ({navigation}) =>{
    return (
       <ScrollView>
       
            <View style={styles.footer}>
                <Image source={require('./img/payhere.png')}  style={{ width: 150, height: 50,alignSelf:'center'}}/>
                <Text style={[styles.text_footer,{marginTop:15}]}>Card Name</Text>

                <View style={styles.action}>
                    
                    <TextInput 
                        placeholder="Enter Card Name"
                        style={styles.textInput}
                        autoCapitalize="none"
                        // onChangeText={(val) => textInputChange(val)}
                    />
                </View>  

                <Text style={[styles.text_footer,{marginTop:15}]}>Card No</Text>

                <View style={styles.action}>
                    
                    <TextInput 
                        placeholder="Enter Card Number"
                        style={styles.textInput}
                        autoCapitalize="none"
                        // onChangeText={(val) => textInputChange(val)}
                    />
                </View>             
 
                
                <Text style={[styles.text_footer,{marginTop:15}]}>Expire Date(MM/YY)</Text>
                <View style={styles.action}>
                   
                    <TextInput 
                    placeholder="MM:YY"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
                </View> 
                
                <Text style={[styles.text_footer,{marginTop:15}]}>CVV</Text>
                <View style={styles.action}>
                  
                   <TextInput 
                    placeholder="Enter CVV"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
                </View> 
                
            
                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn,{}]}
                       onPress={()=>navigation.push("nextScreen")}
                    >
                        <LinearGradient
                            colors={['#FDC73E', '#ffb907']}
                            style={[styles.signIn]}
                        >
                            <Text style={[styles.textSign, {
                                color:'#000000'
                            }]}>Pay</Text>

                        </LinearGradient>
                    </TouchableOpacity>
                </View>
               
                   
          
            </View>
 

  </ScrollView>
    );
  };
  
const Stack = createStackNavigator();


const App = (navigation) => {
    return (
        <NavigationContainer>        
            <Stack.Navigator  screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffb907',            
                },
                
                headerTitleStyle: {
                    fontWeight: '900',        
                }
            }}>
              <Stack.Screen name="Home" component={HomeScreen} options={{
                title: 'Payment',     
                headerTintColor:'black',
                
                headerLeft: () => (
                  <TouchableOpacity>
                      <Icon
                            name="arrow-back"
                            size= {25}
                            style={{marginLeft:14}}                            
            
                          />
                          
                          
                  </TouchableOpacity>
                  
            ),
            
            }}                 
           />
             {/* <Stack.Screen name="nextScreen" component={nextScreen} options={{
                title: 'Add Park',     
                headerTintColor:'black',
       
            }}                 
           /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    
    header: {
        flex: 1,
        // justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        // marginLeft:5,  
        paddingHorizontal: 30,
        paddingTop:30,
        paddingBottom:60
    },
    text_header: {
        color: 'black',
        // fontWeight: 'bold',
        fontSize: 30,
        textAlign:'center'
    },
    text_footer: {
        color: '#05375a',
        fontSize: 16
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        // borderBottomWidth: 1,
        // borderBottomColor: '#cdd7de',
        paddingBottom: 3
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -5,
        paddingLeft: 10,
        color: '#05375a',
        // borderWidth:1,
        backgroundColor:'#F6F6F6',
        borderRadius:10,
        borderColor: '#F6F6F6', 
    },
    button: {
      
        marginTop: 35,
        flexDirection: 'row',
        // marginLeft: 
          
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10
        
    },
    textSign: {
        fontSize: 18,
        alignSelf: "center",
        fontWeight: 'bold'
    },

  });

export default App;
