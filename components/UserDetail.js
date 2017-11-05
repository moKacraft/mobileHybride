import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Contacts from 'react-native-contacts';
import {
  List,
  ListItem,
  Tile,
  Icon,
} from 'react-native-elements';
import  '../App.js'

export default class UserDetail extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'ContactDetails',
    tabBarIcon: ({ tintColor }) => <Icon name="contacts" size={25} color={tintColor} />
  };

  componentDidMount() {
    fetch(SERVERLINK.'action/UserDetail');
  }

  render() {
    const item = this.props.navigation.state.params;

    return (
      <ScrollView>
      <Tile
      imageSrc={ item.hasThumbnail ? {uri: item.thumbnailPath} : require('../assets/default.jpg') }
      featured
      title={(typeof item.givenName) === `undefined` ? `No name` : `${item.givenName.toUpperCase()}`}
      caption={(typeof item.phoneNumbers[0] === `undefined`) ? `No phone number` : item.phoneNumbers[0].number}
      />
      <List>
      <ListItem
      title={(typeof item.phoneNumbers[0] === `undefined`) ? `` : item.phoneNumbers[0].label}
      rightTitle={(typeof item.phoneNumbers[0] === `undefined`) ? `No phone number` : item.phoneNumbers[0].number}
      hideChevron
      />
      <ListItem
      title="Email"
      rightTitle={(typeof item.emailAddresses[0] === `undefined`) ? `No mail` : item.emailAddresses[0].email}
      hideChevron
      />
      </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
