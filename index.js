/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './screens/owner/functions/addParkKeeper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
