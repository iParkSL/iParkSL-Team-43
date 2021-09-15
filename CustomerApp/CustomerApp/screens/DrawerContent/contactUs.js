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
const ContactUsScreen = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.footer}>
        <Text style={[styles.topic]}>Contact iParkSL</Text>
        <Text style={[styles.paragraph]}>
          We want to hear from you! Let us know how we can improve our services!
          We love suggestions!
        </Text>
        <Text style={[styles.text_footer]}>Call us         
        <Text style={[styles.text_footer2]}>
              : +94 345678789
          </Text>
        </Text>
        <Text style={[styles.text_footer]}>
          email 
          <Text style={[styles.text_footer2]}>
              : iparksrilanka@gmail.com or
          </Text>
        
        </Text>
        <Text style={[styles.text_footer]}>Fill in the form below</Text>

        <Text style={[styles.text_footer, {marginTop: 15}]}>Name</Text>

        <View style={styles.action}>
          <TextInput
            placeholder="First Name"
            style={styles.textInput}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
          />
          <TextInput
            placeholder="Last Name"
            style={[styles.textInput, {marginLeft: 5}]}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 10}]}>Email</Text>

        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <Text style={[styles.text_footer, {marginTop: 10}]}>Message</Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput2}
            autoCapitalize="none"
            // onChangeText={(val) => textInputChange(val)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, {}]}
            onPress={() => navigation.push('nextScreen')}>
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
                Send Message
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactUsScreen;
const styles = StyleSheet.create({
  header: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,   
    // marginLeft:5,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    lineHeight: 25,
  },
  text_footer2: {
    color: '#000000',
    fontSize: 16,
    lineHeight: 25,
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
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    borderColor: '#ffb907',
  },
  textInput2: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -5,
    paddingLeft: 10,
    color: '#05375a',
    // borderWidth:1,  
    borderRadius: 10,
    height: 80,
    borderColor: '#ffb907',
    backgroundColor: '#F6F6F6',
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
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: 25,
    borderRadius: 10,
  },
  textSign: {
    fontSize: 16,
    alignSelf: 'center',
    fontWeight: '600',
  },
  topic: {
    color: '#05375a',
    fontSize: 25,
    alignSelf: 'center',
  },

  paragraph: {
    marginTop: 15,
    marginBottom: 20,
    lineHeight: 25,
    color: '#000000',
    fontSize: 18,
  },
});
