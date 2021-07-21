// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import {
//   useTheme,
//   Avatar,
//   Title,
//   Caption,
//   Paragraph,
//   Drawer,
//   Text,
//   TouchableRipple,
//   Switch,
// } from 'react-native-paper';

// import {
//   DrawerContentScrollView,
//   DrawerItem,
//   createDrawerNavigator,
// } from '@react-navigation/drawer';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { NavigationContainer } from '@react-navigation/native';



// export function DrawerContent(props) {
//   const [isDarkTheme, setIsDarkTheme] = React.useState(false);
//   const toggleTheme = () => {
//     setIsDarkTheme(!isDarkTheme);
//   };
//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <View style={styles.userInfoSection}>
//             <View style={{flexDirection: 'row', marginTop: 20}}>
//               <Avatar.Image
//                 source={require('../src/img/profile.jpg')}
//                 size={60}
//               />
//               <View style={{marginLeft: 15, flexDirection: 'column'}}>
//                 <Title style={styles.title}>Tom Riddle</Title>
//                 <Caption style={styles.caption}>tomriddle@gmail.com</Caption>
//               </View>
//             </View>
//           </View>

//           <Drawer.Section style={[styles.drawerSection, {marginTop: 20}]}>
//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="calendar-multiple" color={color} size={size} />
//               )}
//               label="My Bookings"
//               labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
//               onPress={() => {
//                 props.navigation.navigate('Home');
//               }}
//             />

//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="near-me" color={color} size={size} />
//               )}
//               label="Nearby Spots"
//               labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
//               onPress={() => {
//                 props.navigation.navigate('Nearby Spots');
//               }}
//             />

//             <DrawerItem
//               icon={({color, size}) => (
//                 <Feather name="settings" color={color} size={size} />
//                 // <FontAwesome5 name="cog" solid size={25} style={{marginLeft:5}}/>
//               )}
//               label="Settings"
//               labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
//               onPress={() => {
//                 props.navigation.navigate('Settings');
//               }}
//             />
//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="information-outline" color={color} size={size} />
//               )}
//               label="About us"
//               labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
//               onPress={() => {
//                 props.navigation.navigate('SupportScreen');
//               }}
//             />

//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="heart-outline" color={color} size={size} />
//               )}
//               label="Rate us"
//               labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
//               onPress={() => {
//                 props.navigation.navigate('Rate');
//               }}
//             />
//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="help-circle-outline" color={color} size={size} />
//               )}
//               label="Help"
//               labelStyle={{color: '#000000', fontWeight: '600', fontSize: 15}}
//               onPress={() => {
//                 props.navigation.navigate('Rate');
//               }}
//             />
//           </Drawer.Section>
//           <Drawer.Section title="Preferences">
//             <TouchableRipple
//               onPress={() => {
//                 toggleTheme();
//               }}>
//               <View style={styles.preference}>
//                 <Text style={{fontSize: 15}}>Dark Theme</Text>
//                 <View pointerEvents="none">
//                   <Switch value={isDarkTheme} color="#ffb907" />
//                 </View>
//               </View>
//             </TouchableRipple>
//           </Drawer.Section>
//         </View>
//       </DrawerContentScrollView>

//       <Drawer.Section style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({color, size}) => (
//             <Icon name="exit-to-app" color={color} size={size} />
//           )}
//           style={{backgroundColor: '#ffb907'}}
//           label="Sign Out"
//           labelStyle={{color: '#000000', fontWeight: '600', fontSize: 16}}
//           onPress={() => {
//             signOut();
//           }}
//         />
//       </Drawer.Section>
//     </View>
//   );
// }

// const DrawerStack = createDrawerNavigator();

// export default function AppN() {
//   return (
//     <NavigationContainer>
//       <DrawerStack.Navigator initialRouteName="Home">
//         <DrawerStack.Screen name="Home" component={DrawerContent} />
//       </DrawerStack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#f4f4f4',
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });
