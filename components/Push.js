import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  ActivityIndicator,
} from 'react-native';

import { Icon } from 'react-native-elements';
import { PushNotification } from 'react-native-push-notification';
import  '../App.js'

export default class Push extends React.Component {

  static navigationOptions = {
    tabBarLabel: 'Notifications',
    tabBarIcon: ({ tintColor }) => <Icon name="notifications" size={25} color={tintColor} />
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      returnDate: "",
      PushNotification: require('react-native-push-notification'),
    }
  }
  componentDidMount() {
    fetch(SERVERLINK+'action/PushNotification');
    this.requestDate();
  }

  requestDate = () => {
    fetch(SERVERLINK+'hour')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        returnDate: responseJson,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }
  requestPush = () => {
    this.state.PushNotification.localNotification({
      message: "You requested a notification?",
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Button
      style={styles.button}
      onPress={this.requestDate}
      title="Request date from server"
      color="#841584"
      accessibilityLabel="Click to request date from server"
      />
      <Text>{this.state.returnDate}</Text>
      <Button
      style={styles.button}
      onPress={this.requestPush}
      title="Request push notification"
      color="#841584"
      accessibilityLabel="Click to request push notification sent by server"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    bottom: 50
  },
});
