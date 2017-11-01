import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import CameraRollPicker from 'react-native-camera-roll-picker';
import { Icon } from 'react-native-elements';

export default class Folders_ extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'folder',
    tabBarIcon: ({ tintColor }) => <Icon name="camera-roll" size={25} color={tintColor} />
  };
  pictureDetails = (item) => {
    this.props.navigation.navigate('FolderDetail', { ...item });
  };

  constructor(props) {
    super(props);

    this.state = {
      num: 0,
      selected: [],
    };
  }

  getSelectedImages(images, current) {
    var num = images.length;
    this.setState({
      num: num,
      selected: images,
    });
    console.log(current);
    console.log(this.state.selected);

    this.props.navigation.navigate('FolderDetail', { ...current });
  }

  render() {
    return (
      <View style={styles.container}>
        <CameraRollPicker
          scrollRenderAheadDistance={500}
          initialListSize={1}
          pageSize={3}
          removeClippedSubviews={false}
          groupTypes='SavedPhotos'
          batchSize={5}
          assetType='Photos'
          imagesPerRow={3}
          imageMargin={5}
          selected={this.state.selected}
          maximum={0}
          callback={this.getSelectedImages.bind(this)}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D',
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
