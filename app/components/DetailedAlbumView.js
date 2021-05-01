import React, { Component } from "react";
import { View, Text } from "react-native";
import { Avatar, } from 'react-native-elements';
import * as GlobalFunctions from '../GlobalFunctions';
import DetailedAlbumViewStyle from "../styles/DetailedAlbumViewStyle";


class DetailedAlbumView extends Component {

  constructor(props) {
    super(props);
  }

  // displays detailed album information
  // this component is used with AbstractItemView
  render() {
    return (
      <View>
        <Avatar
          rounded
          size = 'xlarge'
          source={{ 
            uri: GlobalFunctions
              .getNonEmptyUri(this.props.object.strAlbumThumb)
          }}
          containerStyle={DetailedAlbumViewStyle.avatarContainerStyle}
        />
        <Text style={DetailedAlbumViewStyle.textStyle}>
          {this.props.object.strAlbum}
        </Text>
        <Text style={DetailedAlbumViewStyle.textStyle}>
          Release Date: {this.props.object.intYearReleased}
        </Text>
        <Text style={DetailedAlbumViewStyle.textStyle}>
          Genre: {this.props.object.strGenre}
        </Text>
        <Text 
          numberOfLines={DetailedAlbumViewStyle.descriptionMaxNumOfLines} 
          style={DetailedAlbumViewStyle.textStyle} 
        >
          Description: {this.props.object.strDescriptionEN}
        </Text>
      </View>
    );
  }
}

export default DetailedAlbumView;