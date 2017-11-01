import React from 'react';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Geo from './Geo';
import Cam from './Cam';
import Folders from './Folders';
import Folders_ from './Folders_';
import FolderDetail from './FolderDetail'
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

export const FoldersStack = StackNavigator({
  Folders: {
    screen: Folders_,
    navigationOptions: {header: null}
  },
  FolderDetail: {
    screen: FolderDetail,
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
    screen: FoldersStack,
  },
  Push: {
    screen: Push,
  },
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
  },
});

export default class App extends React.Component {
  render() {
    return <Tabs />;
  }
}
