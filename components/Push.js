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
    }
  }
  componentDidMount() {
    this.requestDate();
  }

  requestDate = () => {
    fetch('https://mobilehybryde.herokuapp.com/hour')
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
    fetch('https://mobilehybryde.herokuapp.com/hour')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      var PushNotification = require('react-native-push-notification');
      PushNotification.localNotification({
        message: this.state.returnDate,
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <Button
      style={styles.button}
      onPress={this.requestDate}
      title="Request date"
      color="#841584"
      accessibilityLabel="Click to request date from server"
      />
      <Text>{this.state.returnDate}</Text>

      <Button
      style={styles.button}
      onPress={this.requestPush}
      title="Request push"
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
