import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ListView,
  ActivityIndicator,
} from 'react-native';


export default class UserContacts extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}

componentDidMount() {
    return fetch('https://mobilehybryde.herokuapp.com/hour')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          test2:responseJson
        });
        // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // this.setState({
        //   isLoading: false,
        //   dataSource: ds.cloneWithRows(responseJson),
        // }, function() {
        //   // do something with new state
        // });
      })
      .catch((error) => {
        console.error(error);
      });
  }

test() {
  return "toto";
}
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.test2}</Text>
        <Button
          style={styles.button}
          onPress={this.test()}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
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
