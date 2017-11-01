import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
} from 'react-native';

import Contacts from 'react-native-contacts';
import {
  List,
  ListItem,
  SearchBar,
} from 'react-native-elements';

export default class UserContacts extends React.Component {
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

  hasPhone = (item) => {
    return (typeof item.phoneNumbers[0] === `undefined`) ? false : true;
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
        subtitle={this.hasPhone(item) ? `${item.phoneNumbers[0].label} ${item.phoneNumbers[0].number}` : `no phone number available`}
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
  icon: {
    width: 26,
    height: 26,
  },
});
