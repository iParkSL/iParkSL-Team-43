import React from 'react';
import {View,Dimensions,StyleSheet,ScrollView,Text,Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get("window");
const height = width * 0.6;
const images =[
    'http://i.gettysburgdaily.com/imgs/CycloramaParkingLot051911/CycloramaParkingLot05191110.jpg',
    'http://i.gettysburgdaily.com/imgs/CycloramaParkingLot051911/CycloramaParkingLot05191102.jpg',
    'https://www.relumination.com/wp-content/uploads/2014/06/pl.jpg',
]

const App =()=>(
    
            <View style={{width }}>
                <ScrollView>
                    {/* <View style={{padding:20,backgroundColor:'#ffd700'}} >
                        <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>View Park</Text>
                    </View> */}

                    <View style={{flexDirection:'row',padding:10,backgroundColor:'#ffd700'}}>
                        <View style={{width:"10%"}}>
                            <Icon size={30}  name="arrow-left"/>
                        </View>
                        <View style={{width:"90%"}}>
                            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>Book Now</Text>
                        </View>
                    </View>

                    <ScrollView 
                        pagingEnabled 
                        horizontal 
                        showsHorisontalScrollIndicator={false}
                        style={{width,height}}>
                    {
                        images.map((item, index) => (
                            <Image 
                                key={index}
                                source={{uri:item}}
                                style={{width, height,resizeMode:'cover'}}/>
                        ))
                    }
                    </ScrollView>
                    <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold',marginBottom:10,marginTop:10}}>Star Parkings</Text>

                    {/* style={{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center'}} */}
                    <View style={{flexDirection:'row',position:'absolute',bottom:0,alignSelf:'center'}}>
                        <Text style={{color:'#888',position:'absolute'}}>⚫</Text>
                    </View>
                    <View style={styles.title}>
                        <Text style={{fontSize:20,color:'black'}}>Rental per hour </Text><Text style={{fontWeight:'bold',fontSize:40,textAlign:'right'}}>50.00 LKR</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:25,marginLeft:20,fontWeight:'bold',marginBottom:20}}>Facilities</Text>
                        <View style={{marginLeft:30}}>
                            <Text style={{fontSize:20,marginBottom:10}}><Icon style={{fontSize:20}} name='star'/>  WIFI area</Text>
                            <Text style={{fontSize:20,marginBottom:10}}><Icon style={{fontSize:20}} name='star'/>  Vehicle service center</Text>
                            <Text style={{fontSize:20,marginBottom:10}}><Icon style={{fontSize:20}} name='star'/>  Resturent</Text>
                            <Text style={{fontSize:20,marginBottom:10}}><Icon style={{fontSize:20}} name='star'/>  Kids park</Text>
                            <Text style={{fontSize:20,marginBottom:10}}><Icon style={{fontSize:20}} name='star'/>  Facilities</Text>
                        </View>
                        <View style={{marginTop:20}}>
                            <Text style={{fontSize:25,marginLeft:20,fontWeight:'bold',marginBottom:20}}>Customer Reviews</Text>
                            <ScrollView
                                pagingEnabled 
                                horizontal 
                                showsHorisontalScrollIndicator={false}
                                style={{width}}
                            >
                                <View style={{borderWidth:7,borderColor:'#ffd700',padding:20,marginBottom:5,width, height:150,resizeMode:'cover',borderRadius:40}}>
                                    <Text style={{marginLeft:10,fontWeight:'bold',fontSize:20}}>Kamal de Silva</Text>
                                    <Text style={{fontSize:18,margin:10}}>Good parking area. Any customer can get better service.</Text>
                                </View>
                                <View style={{borderWidth:7,borderColor:'#ffd700',padding:20,marginBottom:5,width, height:150,resizeMode:'cover',borderRadius:40}}>
                                    <Text style={{marginLeft:10,fontWeight:'bold',fontSize:20}}>Amal Perera</Text>
                                    <Text style={{fontSize:18,margin:10}}>Good parking area. Any customer can get better service.</Text>
                                </View>
                            </ScrollView>
                            
                        </View>
                    </View>
                    <View style={{backgroundColor:"#ffd700",height:70,width:"80%",margin:"10%",borderRadius:15}}>
                        <Text style={{textAlign:'center',marginTop:15,fontSize:30}}>Book Now</Text>
                    </View>
                    {/* <Button
                        style={{height:50}}
                        title="Make a Request"
                        color="#ffd700"
                        // accessibilityLabel="Learn more about this purple button"
                        /> */}

                </ScrollView>
            </View>
            
      
);
export default App;
const styles = StyleSheet.create ({
   title:{
        fontSize:30,
        fontWeight:'bold',backgroundColor:'#ffd700',padding:20,marginBottom:10
    }
 });