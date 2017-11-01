import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';

import Contacts from 'react-native-contacts';
import { List, ListItem, SearchBar } from 'react-native-elements';

export default class UserContacts extends Component {
  userDetails = (item) => {
      this.props.navigation.navigate('UserDetail', { ...item });
    };

  constructor() {
    super();
    this.state = {
      textValue:'Click the button to display contacts',
      contact: [],
      default: '/assets/default.jpg',
    }
  }

  componentDidMount() {
    this.getContacts();
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

  render() {
    return (
      <View style={styles.container}>
      <FlatList
      data={this.state.contact}
      renderItem={({ item }) => (
        <ListItem
        roundAvatar
        title={`${item.givenName}`}
        subtitle={`${item.phoneNumbers[0].label} ${item.phoneNumbers[0].number}`}
        avatar={ item.hasThumbnail ? {uri: item.thumbnailPath} : require('./assets/default.jpg') }
        containerStyle={{ borderBottomWidth: 0 }}
        onPress={() => this.userDetails(item)}
        />
      )}
      keyExtractor={item => item.givenName}
      ItemSeparatorComponent={this.renderSeparator}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
