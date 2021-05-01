import React, { Component } from "react";
import { View, Text, Linking } from "react-native";
import { Icon, Avatar } from 'react-native-elements';
import * as GlobalFunctions from '../GlobalFunctions';
import * as GlobalVariables from '../GlobalVariables';
import ArtistInfoScreenStyle from "../styles/ArtistInfoScreenStyle";

export default class ArtistInfoScreen extends Component {

  constructor(props) {
    super( props );
    this.state = {
      heartReverse: false
    };
  }

  // updates the heart icon depending 
  // on artist is on the favourite list
  componentDidMount() {
    this.setState({ heartReverse: GlobalFunctions.contains( 
        GlobalVariables.favouriteArtists, this.props.artist, 
        GlobalVariables.strArtist
    ) });
  }

  setHeartReverse = (isReverse) => {
    this.setState({ heartReverse: isReverse });
  }

  // Displays minimal artist information
  render() {
    const { heartReverse } = this.state;
    return(
      <View style={ArtistInfoScreenStyle.viewStyle}>
        <View>
          <Avatar
              rounded
              size = 'xlarge'
              source={{
                uri: GlobalFunctions
                  .getNonEmptyUri(this.props.artist.strArtistThumb)
              }}
          />
          <Text style={ArtistInfoScreenStyle.textStyle}> 
            { this.props.artist.strArtist } 
          </Text>
          <Text style={ArtistInfoScreenStyle.textStyle}>
            Formed Year: { this.props.artist.intFormedYear } 
          </Text>
          <Text style={ArtistInfoScreenStyle.textStyle}>
            Country: { this.props.artist.strCountry } 
          </Text>
          <Text style={ArtistInfoScreenStyle.textStyle}>
            Style: { this.props.artist.strGenre } 
          </Text>
          <Text style={ArtistInfoScreenStyle.textStyle}>
            Website:
            <Text 
              style={ArtistInfoScreenStyle.textLinkStyle}
              onPress= {() => Linking.openURL(
                'https://' + this.props.artist.strWebsite)} >
              { this.props.artist.strWebsite } 
            </Text>
          </Text>
        </View>
          <Icon
            raised = {false}
            reverse={heartReverse}
            name='heart'
            type='font-awesome'
            color= {ArtistInfoScreenStyle.iconColor}
            reverseColor = {ArtistInfoScreenStyle.reverseIconColor}
            onPress={() => {
              this.setHeartReverse(!heartReverse);
              GlobalVariables.favouriteArtists = GlobalFunctions.modifyList(
                GlobalVariables.favouriteArtists, heartReverse, 
                this.props.artist, GlobalVariables.strArtist
              );
            }} 
          />
        <View>
          <Icon
            name='facebook'
            type='font-awesome'
            color= {ArtistInfoScreenStyle.iconColor}
            reverseColor = {ArtistInfoScreenStyle.reverseIconColor}
            onPress={() => Linking.openURL(
              'https://' + this.props.artist.strFacebook)} 
            containerStyle={ArtistInfoScreenStyle.iconContainerStyle}
          />
          <Icon
            name='twitter'
            type='font-awesome'
            color= {ArtistInfoScreenStyle.iconColor}
            reverseColor = {ArtistInfoScreenStyle.reverseIconColor}
            onPress={() => Linking.openURL(
              'https://' + this.props.artist.strTwitter)} 
          />
        </View>
      </View>
    );
  }

}