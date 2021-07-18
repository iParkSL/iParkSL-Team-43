import React, {useState} from 'react';
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
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import NumericInput from 'react-native-numeric-input'

const HomeScreen = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView>
      <View style={styles.footer}>        
        {/* <View style={{alignSelf:'center'}}>
           
            <NumericInput totalWidth={120}  rounded minValue={1} valueType='real' onChange={value => console.log(value)} />
        </View> */}
        <Text style={[styles.text_footer]}>Add pictures</Text>
        <View style={styles.action}>
                    
          <TextInput 
           placeholder="Choose Photo"
           style={styles.textInput}
           autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
                   />
        </View>             

        <View style={styles.action}>
                   
         <TextInput 
             placeholder="Choose Photo"
             style={styles.textInput}
             autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
         />
        </View> 
        <View style={styles.action}>
                   
         <TextInput 
             placeholder="Choose Photo"
             style={styles.textInput}
             autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
         />
        </View>

        <View style={styles.action}>
                   
                   <TextInput 
                       placeholder="Choose Photo"
                       style={styles.textInput}
                       autoCapitalize="none"
                      // onChangeText={(val) => textInputChange(val)}
                   />
        </View>

        <Text style={[styles.text_footer,{marginTop:15}]}>
              Select facilities in your park
        </Text>
        
        <View style={[styles.checkbox, {marginTop: 2}]}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}

            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{alignSelf: 'center', textAlign: 'center', marginLeft: 10}}>
            Wifi
          </Text>
        </View>

        <View style={styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{alignSelf: 'center', textAlign: 'center', marginLeft: 10}}>
            Water
          </Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{alignSelf: 'center', textAlign: 'center', marginLeft: 10}}>
            Cash Payment
          </Text>
        </View>

        <View style={styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{alignSelf: 'center', textAlign: 'center', marginLeft: 10}}>
            Waiting Room
          </Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{alignSelf: 'center', textAlign: 'center', marginLeft: 10}}>
            CCTV
          </Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{alignSelf: 'center', textAlign: 'center', marginLeft: 10}}>
            Security Gated
          </Text>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{alignSelf: 'center', textAlign: 'center', marginLeft: 10}}>
            Covered Parking
          </Text>
        </View>

        <View style={styles.button}>
          {/* <TouchableOpacity style={styles.signIn} onPress={() => navigation.goBack()}>
            <View
              // colors={['#FDC73E', '#ffb907']}
              style={[styles.signIn, {borderColor: '#ffb907'}]}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="arrow-back-ios" size={22} />
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#ffb907',
                      fontSize: 18,
                    },
                  ]}>
                  Go back
                </Text>
              </View>
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity style={styles.signIn} onPress={() => {}}>
            <LinearGradient
              colors={['#FDC73E', '#ffb907']}
              style={[styles.signIn]}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#000000',
                  },
                ]}>
                Send for approval
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: '#fff',
    // marginLeft:5,

    paddingHorizontal: 30,
    paddingVertical: 20,
    // paddingBottom:
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
    borderColor: '#ffb907', 
  },
  button: {
    flexDirection: 'row',
    // borderTopWidth: 1,
    borderTopColor: '#f2f2f2',
    paddingBottom: 5,
    
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 5,
    borderRadius: 10,
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
  checkbox: {
    flexDirection: 'row',
    // alignItems:'center',
    // justifyContent:'center'
  },
});

export default HomeScreen;

