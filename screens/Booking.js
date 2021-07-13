import React, {useState} from 'react';

 import { NavigationContainer } from '@react-navigation/native';
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
} from 'react-native';

 import { createStackNavigator } from '@react-navigation/stack';

 const HomeScreen = ({navigation}) =>{

  const [vehicle, setvehicle] = useState('');
  const [payment, setpayment] = useState('');

  return (
    <ScrollView>
      <View style={styles.footer}>
       


        <Text style={[styles.text_footer, {marginTop: 10}]}>Select Vehicle Type</Text>
        <View>
          <Picker
            selectedValue={vehicle}
            onValueChange={Itemvalue => setvehicle(Itemvalue)}
             mode={'dropdown'}>
            <Picker.Item label="Acura" value="acura" />
            <Picker.Item label="Aston Martin" value="aston Martin" />
            <Picker.Item label="Audi" value="audi" />
            <Picker.Item label="Bentley" value="bentley" />
            <Picker.Item label="BMW" value="bmw" />
            <Picker.Item label="Buick" value="buick" />
            <Picker.Item label="Cadillac" value="cadillac" />
            <Picker.Item label="Chevrolet" value="chevrolet" />
            <Picker.Item label="Chrysler" value="chrysler" />
            <Picker.Item label="Dodge" value="dodge" />
            <Picker.Item label="Ferrari" value="ferrari" />
            <Picker.Item label="Ford" value="ford" />
            <Picker.Item label="GMC" value="GMC" />
            <Picker.Item label="Honda" value="Honda" />
            <Picker.Item label="Hummer" value="Hummer" />
            <Picker.Item label="Hyndai" value="Hyndai" />
            <Picker.Item label="Infiniti" value="Infiniti" />
            <Picker.Item label="Isuzu" value="Isuzu" />
            <Picker.Item label="Jgura" value="Jgura" />
            <Picker.Item label="Jeep" value="Jeep" />
            <Picker.Item label="Kia" value="Kia" />
            <Picker.Item label="Lamborghini" value="Lamborghini" />
            <Picker.Item label="Land Rover" value="Land Rover" />
            <Picker.Item label="Lexus" value="Lexus" />
            <Picker.Item label="Lotus" value="Lotus" />
            <Picker.Item label="Maserati" value="Maserati" />
            <Picker.Item label="Maybach" value="Maybach" />
            <Picker.Item label="Mazda" value="Mazda" />
            <Picker.Item label="Mercedes-Benz" value="Mercedes-Benz" />
            <Picker.Item label="Mercury" value="mercury" />
            <Picker.Item label="Mini" value="mini" />
            <Picker.Item label="Mitsubishi" value="mitsubishi" />
            <Picker.Item label="Nissan" value="nissan" />
            <Picker.Item label="Pontiac" value="pontiac" />
            <Picker.Item label="Porsche" value="porsche" />
            <Picker.Item label="Rolls-Royce" value="Rolls-Royce" />
            <Picker.Item label="Saab" value="Saab" />
            <Picker.Item label="Saturn" value="saturn" />
            <Picker.Item label="Subaru" value="Subaru" />
            <Picker.Item label="Suzuki" value="Suzuki" />
            <Picker.Item label="Tesla" value="tesla" />
            <Picker.Item label="Toyota" value="toyota" />
            <Picker.Item label="Volkswagen" value="Volkswagen" />
            <Picker.Item label="Volvo" value="Volvo" />
            <Picker.Item label="Rental" value="rental" />
            
          </Picker>
        </View>

        <Text style={[styles.text_footer, {marginTop: 10}]}>Vehicle No</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

       

        <Text style={[styles.text_footer, {marginTop: 10}]}>Payment Method</Text>
        <View>
          <Picker
            selectedValue={payment}
            onValueChange={Itemvalue => setpayment(Itemvalue)}
            mode={'dropdown'}>
            <Picker.Item label="Online" value="online" />
            <Picker.Item label="Cash" value="cash" />
          </Picker>
        </View>

        <Text style={[styles.text_footer, {marginTop: 10}]}>Estimated Time</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="04:00"
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <View style={styles.button}>
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
                Book NOW  LKR 150
              </Text>
            </View>
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
                title: 'Make Booking ',     
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
    flexDirection: 'row',
    // marginLeft:
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
});

export default App;
