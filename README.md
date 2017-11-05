# mobileHybride

A react native project with:

```
- Geolocation on map
- Phone Contacts list and contact details
- Front and back cameras usage, taking pictures
- Saved images folder(s)
- Push notifications
```

## Built by

* Nicolas Perdigon
* Nicolas Pinatel

## Application

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install and run them on Windows

- <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html">Download</a> and <a href="https://docs.oracle.com/javase/7/docs/webnotes/install/windows/jdk-installation-windows.html">install</a> JDK (v7 or newer)
- <a href="https://nodejs.org/en/">Download</a> and <a href="http://nodesource.com/blog/installing-nodejs-tutorial-windows/">install</a> Node (v8.1.4 or newer)
- <a href="https://www.genymotion.com/download/">Download</a> and <a href="https://docs.genymotion.com/Content/01_Get_Started/Installation.htm">install</a> Genymotion
- Install React Native globally, open a Command line and type:
```
npm install -g react-native-cli
```
- Create an environment variable with the Java SDK path: Windows → Search → System → Advanced System Settings → Environment variables → New
```
JAVA_HOME: C:\path\to\JavaSDK
ANDROID_HOME: C:\path\to\ANDROIDSDK
```
- Create a Genymotion virtual terminal
```
- Google Nexus 5
- V 5.1.0
- API 22
```
### Installing
```
- git clone https://github.com/moKacraft/mobileHybride.git
- cd mobileHybride/
- npm install
```

### Running
```
- Launch Genymotion Virtual Terminal
- Start GPS and camera
- react-native run-android
```

### APK

```
- cd android && ./gradlew assembleRelease
- react-native run-android --variant=release
or
- Drag and drop the application APK file from the apk-release folder into the virtual device window.
or
- Run the following command in the apk-release folder: adb install <application name>.apk.
```


## Server

### Installing

What things you need to install in order to start the server localy

Install express:
```
- cd mobileHybride/backend
- npm install express
- Change the "SERVERLINK" variable to "localhost:5000" in "${ROOT}/App.js" :
```

### Running

Run the server :
```
node server.js
```
