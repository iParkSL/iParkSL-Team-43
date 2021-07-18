import React from 'react';
import {View,Dimensions,StyleSheet,ScrollView,Text,Image,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get("window");
const height = width * 0.6;


const myParks =()=>(
    
            <View style={{width }}>
                <ScrollView>
                    {/* <View style={styles.title}>
                        <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>My Parks</Text>
                    </View> */}
                    <View style={{flexDirection:'row',padding:10,backgroundColor:'#ffd700'}}>
                        <View style={{width:"10%"}}>
                            <Icon size={30}  name="arrow-left"/>
                        </View>
                        <View style={{width:"90%"}}>
                            <Text style={{fontSize:30,textAlign:'center',fontWeight:'bold'}}>My Parks</Text>
                        </View>
                    </View>

                    <View  style={{marginTop:10,marginBottom:30,flexDirection:'row'}}>
                        <View style={{width:'40%'}}>
                            <Image 
                                source={{uri:'https://th.bing.com/th/id/R.eb9bfbacf609993c343b6cbf6451f0b2?rik=B80jkW5BW5zRiQ&riu=http%3a%2f%2fi.gettysburgdaily.com%2fimgs%2fCycloramaParkingLot051911%2fCycloramaParkingLot05191104.jpg&ehk=q91W9%2bA%2f8ic3EtDDRt8NUvBWkVzKQl1ADNlnLQso6vk%3d&risl=&pid=ImgRaw'}}
                                style={{margin:10,flex:1,width:null,height:null,resizeMode:'cover',borderRadius:20}}/>
                        </View>
                        <View style={{width:'60%'}}>
                            <View>
                                <Text style={{marginLeft:10,fontWeight:'bold',fontSize:25}}>Sky Parks</Text>
                                <View style={{marginLeft:10,marginTop:20}}>
                                    <Text style={{fontSize:18}}>Duplication road,Colombo</Text>
                                    <Text style={{fontSize:18}}>27/2/2021</Text>
                                    <Text style={{fontSize:18}}>Rental per hour  Rs 50.00</Text>

                                </View>
                                <View style={{marginTop:20}}>
                                    <Button
                                        title="View Details"
                                        color="#ffd700"
                                        // accessibilityLabel="Learn more about this purple button"
                                        />
                                </View>
                            </View>

                        </View>
                    </View>


                    <View  style={{marginTop:10,marginBottom:30, flexDirection:'row'}}>
                        <View style={{width:'40%'}}>
                            <Image 
                                source={{uri:'https://www.relumination.com/wp-content/uploads/2014/06/pl.jpg'}}
                                style={{margin:10,flex:1,width:null,height:180,resizeMode:'cover',borderRadius:20}}/>
                        </View>
                        <View style={{width:'60%'}}>
                            <View style={{}}>
                                <Text style={{marginLeft:10,fontWeight:'bold',fontSize:25}}>Star Parkings</Text>
                                <View style={{marginLeft:10,marginTop:20}}>
                                    <Text style={{fontSize:18}}>Wijerama road,Nugegoda</Text>
                                    <Text style={{fontSize:18}}>21/1/2021</Text>
                                    <Text style={{fontSize:18}}>Rental per hour  Rs 40.00</Text>

                                </View>
                                <View style={{marginTop:20}}>
                                    <Button
                                        title="View Details"
                                        color="#ffd700"
                                        // accessibilityLabel="Learn more about this purple button"
                                        />
                                </View>
                            </View>

                        </View>
                    </View>

                    <View  style={{marginBottom:30, flexDirection:'row'}}>
                        <View style={{width:'40%'}}>
                            <Image 
                                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/6/63/Subterranean_parking_lot.jpg'}}
                                style={{margin:10,flex:1,width:null,height:180,resizeMode:'cover',borderRadius:20}}/>
                        </View>
                        <View style={{width:'60%'}}>
                            <View>
                                <Text style={{marginLeft:10,fontWeight:'bold',fontSize:25}}>Park Tokyo</Text>
                                <View style={{marginLeft:10,marginTop:20}}>
                                    <Text style={{fontSize:18}}>Wijerama road,Nugegoda</Text>
                                    <Text style={{fontSize:18}}>21/1/2021</Text>
                                    <Text style={{fontSize:18}}>Rental per hour  Rs 40.00</Text>

                                </View>
                                <View style={{marginTop:20}}>
                                    <Button
                                        title="View Details"
                                        color="#ffd700"
                                        // accessibilityLabel="Learn more about this purple button"
                                        />
                                </View>
                            </View>

                        </View>
                    </View>
                    
                </ScrollView>
            </View>
            
      
);
export default myParks;
const styles = StyleSheet.create ({
   title:{
        fontSize:30,
        fontWeight:'bold',backgroundColor:'#ffd700',padding:10,marginBottom:10
    }
 });