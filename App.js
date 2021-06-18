
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tab from './navigation/tab';
const App = () => {
  return (
    <NavigationContainer>
      <Tab />
    </NavigationContainer>
  );
};

export default App;
