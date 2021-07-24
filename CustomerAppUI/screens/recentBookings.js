import React from 'react';
import {View,Dimensions,StyleSheet,ScrollView,Text,Image,Button,FlatList,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get("window");
const height = width * 0.6;


const App =()=>(
    
            <View style={{width }}>
                <ScrollView>
                <SafeAreaView>
                    <View style={{padding:20,backgroundColor:'#ffd700'}} >
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:"10%",margin:20}}>
                            <Icon size={30}  name="arrow-left"/>
                        </View>
                        <View style={{width:"90%"}}>
                            <Text style={{fontSize:30,marginTop:15,fontWeight:'bold'}}>Recent Bookings</Text>
                        </View>
                    </View>
                    <View>
                        <FlatList
                            data={[
                                {key:"1",name:'Amal perera', image:'https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg' ,date:'2021/2/27',time:'14.30'},
                                {key:"2",name:'Ama perera', image:'https://www.ccprecruitment.com/imglib/xman-profile-cartoon_18591-58483.jpeg.pagespeed.ic.Q-M5gznZH8.jpg' ,date:'2021/2/27',time:'14.30'},
                                {key:"3",name:'Kamal Silva', image:'https://digitalbrandblueprint.com/wp-content/uploads/2020/09/Portrait-300-01-1980x1980.png' ,date:'2021/2/27',time:'14.30'},
                                {key:"4",name:'Ama perera', image:'https://www.custom-gateway.com/wp-content/uploads/2020/03/Thora-Chan-600x600.png' ,date:'2021/2/27',time:'14.30'},
                                
                                
                            ]}
                            renderItem={({item})=>  <View style={{flex:1,padding:10,borderRadius:10,width:"90%",margin:"5%",marginBottom:10,flexDirection:'row',shadowColor:"#000",shadowOffset:{width:0,height:1,},shadowOpacity:0.8,shadowRadius:2.22,elevation:3}} >
                                                        <View style={{width:'40%',height:'100%'}}>
                                                            <Image 
                                                            // key={index}
                                                            source={{uri:item.image}}
                                                            style={{width:'90%',height:'100%',resizeMode:'cover',borderRadius:150}}/>
                                                        </View>
                                                        <View style={{width:'50%'}}>
                                                            <Text style={{}}>{item.name}</Text>
                                                            <Text style={{}}>{item.date}</Text>
                                                            <Text style={{}}>{item.time}</Text>
                                                            <View style={{marginTop:20}}>
                                                                <Button
                                                                    title="View Booking"
                                                                    color="#ffd700"
                                                                    />
                                                            </View>
                                                        </View>
                                                        
                                                    </View>}
                        />
                    </View>

                </SafeAreaView>
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