import React from 'react';
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
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Payment = ({navigation}) => {
  return (
    <ScrollView>
       
            <View style={styles.footer}>
                {/* <Image source={require('./img/payhere.png')}  style={{ width: 150, height: 50,alignSelf:'center'}}/> */}
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
                       onPress={()=>navigation.push("")}
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

export default Payment;


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
        paddingBottom:120
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
        alignSelf:'center'
        // marginLeft: 
          
    },
    signIn: {
        width: '70%',
        height: 40,
        justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 6,
        alignSelf:'center'
        
    },
    textSign: {
        fontSize: 18,
        alignSelf: "center",
        
    },

  });
