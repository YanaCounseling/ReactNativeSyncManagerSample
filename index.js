/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import backgroundPush from './src/push';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => backgroundPush);

window.LOG_LEVEL = 'DEBUG'
