import React, { Component } from "react";
import { View, Text } from "react-native";

export default class SearchResultScreen extends Component {

  constructor(props) {
    super( props );
    this.artist = this.props.route.params.artist;
    this.baseUrl = 'https://www.theaudiodb.com';
    this.endPoint = '/api/v1/json/1/search.php?s=';
    this.state = {
      info: []
    }
  }

  componentDidMount() {
    
    fetch( this.baseUrl + this.endPoint + this.artist )
      .then( body => body.json() )
      .then( result => {
        let artists = result['artists'];
        if ( artists != null ) {
          if ( artists.length > 0 ) {
            let artist = artists[0];
            if ( artist != null ) {
              let artistName = artist['strArtist'];
              this.setState( {info: artistName } );
            }
          }
        }
      })
      .catch( err => {
        alert(err);
      });
  }

  render() {
    return(
      <View>
        <Text> Band Members </Text>
        <Text> { this.state.info } </Text>
      </View>
    );
  }

}