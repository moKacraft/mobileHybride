import React, { Component, PropTypes } from 'react'
import {
  CameraRoll,
  Image,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

export default class Folders extends Component {

  constructor(props) {
    super(props)
    var controls = props.controls
    this.state = {
      images: [],
      selected: '',
      fetchParams: { first: 25 },
      groupTypes: 'SavedPhotos',
    }
    this._storeImages = this._storeImages.bind(this)
    this._selectImage = this._selectImage.bind(this)
  }

  componentDidMount() {
    CameraRoll.getPhotos(this.state.fetchParams, this._storeImages, this._logImageError);
  }

  _storeImages(data) {
    const assets = data.edges;
    const images = assets.map( asset => asset.node.image );
    this.setState({
        images: images,
    });
  }

  _selectImage(uri) {
    this.setState({
      selected: uri,
    });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={styles.container}>
            <View style={styles.imageGrid}>
            { this.state.images.map(image => {
              return (
               <TouchableHighlight onPress={() => this._selectImage(image.uri)}>
                 <Image style={styles.image} source={{ uri: image.uri }} />
               </TouchableHighlight>
             );
            })}
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
  },
  imageGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
  },
  image: {
      width: 100,
      height: 100,
      margin: 10,
  },
});
