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
    StatusBar
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import {DrawerContent} from '../screens/DrawerContent';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import nextScreen from './addparknext';

const HomeScreen = ({navigation}) =>{
    return (
       <ScrollView>
       
        
            <View style={styles.footer}>
       
                <Text style={[styles.text_footer]}>Name</Text>

                <View style={styles.action}>
                   
                    <TextInput 
                    placeholder="First Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    />
                      <TextInput 
                    placeholder="Last Name"
                    style={[styles.textInput,{marginLeft:5}]}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                    />
                </View> 

                <Text style={[styles.text_footer,{marginTop:10}]}>Address</Text>

                <View style={styles.action}>
                    
                    <TextInput 
                        placeholder="line 1"
                        style={styles.textInput}
                        autoCapitalize="none"
                        // onChangeText={(val) => textInputChange(val)}
                    />
                </View>             

                <View style={styles.action}>
                   
                       <TextInput 
                    placeholder="line 2"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
                </View> 
                
                <Text style={[styles.text_footer,{marginTop:10}]}>City</Text>
                <View style={styles.action}>
                   
                       <TextInput 
                   
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
                </View> 
                
                <Text style={[styles.text_footer,{marginTop:10}]}>Province</Text>
                <View style={styles.action}>
                  
                   <TextInput 
                  
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
                </View> 
                
                <Text style={[styles.text_footer,{marginTop:10}]}>Zip code/Postal code</Text>
                <View style={styles.action}>
                   
                <TextInput 
                    // placeholder="Postal Code"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                />
                </View> 


                <View style={styles.button}>

                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {}}
                    >
                        <View
                            // colors={['#FDC73E', '#ffb907']}
                            style={[styles.signIn,{borderColor:'#ffb907',borderWidth:1}]}
                        >
                            <Text style={[styles.textSign, {
                                color:'#000000'
                            }]}>CANCEL</Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.signIn,{}]}
                       onPress={()=>navigation.push("nextScreen")}
                    >
                        <LinearGradient
                            colors={['#FDC73E', '#ffb907']}
                            style={[styles.signIn,{marginLeft:-54}]}
                        >
                            <Text style={[styles.textSign, {
                                color:'#000000'
                            }]}>NEXT</Text>

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
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: '900',        
                }
            }}>
              <Stack.Screen name="Home" component={HomeScreen} options={{
                title: 'Add Park',     
                headerTintColor:'black',
            //     headerLeft: () => (
            //       <TouchableOpacity>
            //           <Icon
            //                 name="arrow-back"
            //                 size= {25}
            //                 style={{marginLeft:10}}
            //                 // backgroundColor="#fff"
            
            //               />
                          
                          
            //       </TouchableOpacity>
                  
            // ),
            
            }}                 
           />
             <Stack.Screen name="nextScreen" component={nextScreen} options={{
                title: 'Add Park',     
                headerTintColor:'black',
       
            }}                 
           />
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
        // backgroundColor: '#fff',
        // marginLeft:5,
  
        paddingHorizontal: 20,
        paddingVertical: 30
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
        backgroundColor:'white',
        borderRadius:10,
        borderColor: '#ffb907', 
    },
    button: {
      
        marginTop: 15,
        flexDirection: 'row',
        // marginLeft: 
          
    },
    signIn: {
        width: '70%',
        height: 50,
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 10
        
    },
    textSign: {
        fontSize: 16,
        alignSelf: "center",
        fontWeight: '600'
    },

  });

export default App;
