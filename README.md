# mobileHybride

A react native project with:
```
- Geolocation on map
- Phone Contacts list and contact details
- Front and back cameras usage, taking pictures
- Saved images folder(s)
- Push notifications
```

## Getting Started

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
- react-native run-android
```

### APK

```
- cd android && ./gradlew assembleRelease
- react-native run-android --variant=release
or
- Drag and drop the application APK file into the virtual device window.
or
- Run the following command: adb install <application name>.apk.
```


## Deployment

Server deployment

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
