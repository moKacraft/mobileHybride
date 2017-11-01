import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';

import Contacts from 'react-native-contacts';
import {
  List,
  ListItem,
  Tile
} from 'react-native-elements';

export default class UserDetail extends React.Component {

  render() {
    const item = this.props.navigation.state.params;

    return (
      <ScrollView>
      <Tile
      imageSrc={ item.hasThumbnail ? {uri: item.thumbnailPath} : require('./assets/default.jpg') }
      featured
      title={`${item.givenName.toUpperCase()}`}
      caption={item.phoneNumbers[0].number}
      />
      <List>
      <ListItem
      title={item.phoneNumbers[0].label}
      rightTitle={item.phoneNumbers[0].number}
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
