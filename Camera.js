import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Camera extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
