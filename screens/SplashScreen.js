import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#ffb907' barStyle='light-content'/>
            <StatusBar barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image
                animation='bounceIn'
                duration= "2000"
                easing='ease-in'
                source={require('../assests/logo.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
            >
                <Text style={styles.title}>Your Parking Partner...</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                        <LinearGradient
                            colors={['#ffb907', '#ffb907']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Start</Text>
                            <MaterialIcons
                                // name="keyboard-arrow-right"
                                color="#000"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>    
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffb907'
    },
    header : {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer : {
        flex: 1,
        // backgroundColor: '#ffb907',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo : {
        width: 400,
        height: 400
    },
    title: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold'
    }
});