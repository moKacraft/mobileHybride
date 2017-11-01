import React from 'react';
import Icon from 'react-native-elements';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Geo from './Geo';
import Cam from './Cam';
import Folders from './Folders';
import Folders_ from './Folders_';
import UserContacts from './UserContacts';
import UserDetail from './UserDetail';
import Push from './Push';

export const ContactStack = StackNavigator({
  Contact: {
    screen: UserContacts,
    navigationOptions: {header: null}
  },
  UserDetail: {
    screen: UserDetail,
  },
});

export const Tabs = TabNavigator({
  Geo: {
    screen: Geo,
  },
  Contact: {
    screen: ContactStack,
  },
  Cam: {
    screen: Cam,
  },
  Folders: {
    screen: Folders_,
  },
  Push: {
    screen: Push,
  },
});

export default class App extends React.Component {
  render() {
    return <Tabs />;
  }
}
