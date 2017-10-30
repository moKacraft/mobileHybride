import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class Cam extends Component {
  constructor(props) {
  super(props);
  this.state = {
    camera: {
      aspect: Camera.constants.Aspect.fill,
      captureTarget: Camera.constants.CaptureTarget.cameraRoll,
      type: Camera.constants.Type.front,
      orientation: Camera.constants.Orientation.auto,
      flashMode: Camera.constants.FlashMode.auto,
    }
  };
}
  render() {
    return (
      <View style={styles.container}>
      <Camera
      ref={(cam) => {
        this.camera = cam;
      }}
      style={styles.preview}
      orientation={Camera.constants.Orientation.auto}
      type={this.state.camera.type}
      aspect={Camera.constants.Aspect.fill}>
      <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
      <Text style={styles.switc} onPress={this.switchType.bind(this)}>[SWITCH]</Text>
      </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  }

  switchType() {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 5,
    margin: 20
  },
  switc: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 5,
    padding: 2,
    alignSelf: 'flex-end'
  }
});
