import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import Contacts from 'react-native-contacts';
import { List, ListItem, SearchBar } from 'react-native-elements';

export default class UserContacts extends Component<{}> {
  constructor() {
    super();
    this.state = {
      textValue:'Click the button to display contacts',
      contact: [],
      default: '/assets/default.jpg',
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
    })
  }

  renderSeparator = () => {
    return (
      <View
      style={{
        height: 1,
        width: '100%',
        backgroundColor: '#CED0CE'
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
        borderColor: '#CED0CE'
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
      title='Get contacts'
      color='#841584'/>
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
      <FlatList
      data={this.state.contact}
      renderItem={({ item }) => (
        <ListItem
        roundAvatar
        title={`${item.givenName}`}
        subtitle={`${item.phoneNumbers[0].label} ${item.phoneNumbers[0].number}`}
        avatar={ item.hasThumbnail ? {uri: item.thumbnailPath} : require('./assets/default.jpg') }
        containerStyle={{ borderBottomWidth: 0 }}
        />
      )}
      keyExtractor={item => item.givenName}
      ItemSeparatorComponent={this.renderSeparator}
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
