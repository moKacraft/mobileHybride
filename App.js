import React from 'react';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Geo from './components/Geo';
import Cam from './components/Cam';
import Folders_ from './components/Folders_';
import FolderDetail from './components/FolderDetail'
import UserContacts from './components/UserContacts';
import UserDetail from './components/UserDetail';
import Push from './components/Push';

SERVERLINK = "https://mobilehybryde.herokuapp.com/;

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
