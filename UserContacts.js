/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Contacts from "react-native-contacts";
import { List, ListItem, SearchBar } from "react-native-elements";

export default class UserContacts extends Component<{}> {
  constructor() {
    super();
    this.state = {
      textValue:'Click the button to display contacts',
      contact: []
    }
  }
  getContacts() {
    Contacts.getAll((err, data) => {
      if (err)
      throw err;
      else {
        this.setState({
          contact: data
        });
      }

      for (let item of data) {
        console.log('getAll:', item)
        this.setState({
          textValue: item.givenName
        });
      }
    })
  }


  renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "86%",
        backgroundColor: "#CED0CE",
        marginLeft: "14%"
      }}
    />
  );
};

renderHeader = () => {
  return <SearchBar placeholder="Type Here..." lightTheme round />;
};

renderFooter = () => {

  return (
    <View
      style={{
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"
      }}
    >
    </View>
  );
};

  render() {
    return (
      <View>
      <Button
      onPress={this.getContacts.bind(this)}
      title="Get contacts"
      color="#841584"/>
      <Text style={styles.hello}>{this.state.textValue}</Text>

      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.contact}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`${this.state.textValue} ${this.state.contact.givenName}`}
              subtitle={this.state.textValue}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
        />
      </List>
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
