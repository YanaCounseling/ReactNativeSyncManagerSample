# Sample JavaScript React-Native Redux with SyncManager

SendBird React-Native sample using [SendBird SDK](https://github.com/sendbird/SendBird-SDK-JavaScript) and [SyncManager](https://github.com/sendbird/sendbird-syncmanager-javascript).

## Prerequisite

Make sure to use Node 8.17.0.

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Cocoapods](https://cocoapods.org/)
- [XCode](https://developer.apple.com/xcode)
- [XCode Command Line Tools](https://facebook.github.io/react-native/docs/getting-started.html#xcode)
- [Android Studio](https://developer.android.com/studio/) (+Android SDK/Google API)

## Run the sample

1. Install React Native CLI.

        npm install -g react-native-cli

2. Install required packages.

        npm install
        react-native link

3. Unlink vector icons to prevent duplicate fonts during compile stage.

        react-native unlink react-native-vector-icons

4. (iOS only) Pod install.

        cd ios
        pod install

5. (iOS only) Add library in XCode.

- Open XCode and load workspace.
- Change Build System to Legacy Build System in File > Workspace Settings > Build System.
- Keep XCode open during the build and deploy process; clean the build using XCode if caching issues arise preventing a full build.

6. Run the sample. Before starting, you should launch device emulator (or actual device) to run the sample in Android. This sample is not available for real device in iOS due to Apple Development Policy. In order to run React Native sample in real device, follow [React Native official guide](https://facebook.github.io/react-native/docs/running-on-device.html) for your own setup.

        react-native run-android
        react-native run-ios
