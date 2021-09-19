import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Avatar.Image source={require('../assets/car.png')} size={60} />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Tom Riddle</Title>
                <Caption style={styles.caption}>tomriddle@gmail.com</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={[styles.drawerSection, {marginTop: 20}]}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.icons1}
                  source={require('./DrawerContent/img/icons8-settings-64.png')}
                />
              )}
              label="Settings"
              labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
              onPress={() => {
                props.navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.icons}
                  source={require('./DrawerContent/img/icons8-about-50.png')}
                />
              )}
              label="About us"
              labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
              onPress={() => {
                props.navigation.navigate('About us');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.icons}
                  source={require('./DrawerContent/img/icons8-heart-50.png')}
                />
              )}
              label="Rate us"
              labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
              onPress={() => {
                props.navigation.navigate('Rate us');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  style={styles.icons}
                  source={require('./DrawerContent/img/telephone.png')}
                />
              )}
              label="Contact Us"
              labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
              onPress={() => {
                props.navigation.navigate('Contact us');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Image
              style={styles.icons}
              source={require('./DrawerContent/img/logout.png')}
            />
          )}
          style={{backgroundColor: '#ffb907'}}
          label="Sign Out"
          labelStyle={{color: '#000000', fontWeight: '600', fontSize: 16}}
          onPress={async () => {
            try {
              await AsyncStorage.removeItem('id');
              props.navigation.navigate('SplashScreen');
            } catch (e) {
              console.log(e);
            }
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 40,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  icons1: {
    height: 28,
    width: 28,
    marginLeft: 4,
  },
  icons: {
    height: 21,
    width: 21,
    marginLeft: 7,
  },
});
