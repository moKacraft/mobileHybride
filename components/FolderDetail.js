import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from 'react-native';

import {
  List,
  ListItem,
  Tile,
  Icon,
} from 'react-native-elements';

export default class FolderDetail extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'folder',
    tabBarIcon: ({ tintColor }) => <Icon name="camera-roll" size={25} color={tintColor} />
  };
  render() {
    const win = Dimensions.get('window');
    const current = this.props.navigation.state.params;

    return (
      <ScrollView>
      <Image
          style={{width: win.width, height: win.height, flex: 1}}
          source={{uri: current.uri}}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
