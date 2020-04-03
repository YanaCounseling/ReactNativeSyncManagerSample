/**
 * @format
 */

import { AppRegistry } from 'react-native';
<<<<<<< HEAD
import App from './src';
=======
import App from './App';
>>>>>>> ae1f54a1aed3dfbcc082538180b10c20ca83610d
import { name as appName } from './app.json';
import backgroundPush from './src/push';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => backgroundPush);
<<<<<<< HEAD

window.LOG_LEVEL = 'DEBUG'
=======
>>>>>>> ae1f54a1aed3dfbcc082538180b10c20ca83610d
