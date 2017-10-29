/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Contacts from "react-native-contacts";

export default class UserContacts extends Component<{}> {
  constructor() {
    super();
    this.state = {
      textValue:'Click the button to display contacts',
      data: []
    }
  }
  getContacts() {
    Contacts.getAll((err, data) => {
      if (err)
      throw err;

      for (let item of data) {
        console.log('getAll:', item)
        this.setState({
          textValue: item.givenName,
          data: item
        });
      }
    })
  }



  render() {
    return (
      <View>
      <Button
      onPress={this.getContacts.bind(this)}
      title="Get contacts"
      color="#841584"/>
      <Text style={styles.hello}>{this.state.textValue}</Text>

      <FlatList
      data={this.state.data}
          renderItem={({ item }) => (
            <Text style={styles.hello}>{this.state.textValue}</Text>
          )}
          keyExtractor={item => this.state.data.email}
          />
      </View>
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
