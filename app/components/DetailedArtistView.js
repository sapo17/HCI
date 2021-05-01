import React, { Component } from "react";
import { View, Text } from "react-native";
import { Avatar, } from 'react-native-elements';
import * as GlobalFunctions from '../GlobalFunctions';
import DetailedArtistViewStyle from "../styles/DetailedArtistViewStyle";

class DetailedArtistView extends Component {

  constructor(props) {
    super(props);
  }

  // displays detailed artist information
  // this component is used with AbstractItemView
  render() {
    return (
      <View>
        <Avatar
          rounded
          size = 'xlarge'
          source={{ 
            uri: GlobalFunctions
              .getNonEmptyUri(this.props.object.strArtistThumb)
          }}
          containerStyle={DetailedArtistViewStyle.avatarContainerStyle}
        />
        <Text style={DetailedArtistViewStyle.textStyle}>
          {this.props.object.strArtist}
        </Text>
        <Text style={DetailedArtistViewStyle.textStyle}>
          Formed Year: {this.props.object.intFormedYear}
        </Text>
        <Text style={DetailedArtistViewStyle.textStyle}>
          Genre: {this.props.object.strGenre}
        </Text>
        <Text
          numberOfLines={DetailedArtistViewStyle.descriptionMaxNumOfLines}
          style={DetailedArtistViewStyle.textStyle}
        >
          Description: {this.props.object.strBiographyEN}
        </Text>
      </View>
    );
  }
}

export default DetailedArtistView;