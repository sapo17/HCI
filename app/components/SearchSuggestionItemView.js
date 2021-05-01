import React, { Component } from "react";
import { ListItem } from 'react-native-elements';
import { Text, Pressable } from "react-native";
import SearchSuggestionItemViewStyle from '../styles/SearchSuggestionItemViewStyle';
export default class SearchSuggestionItemView extends Component {

  constructor(props) {
    super( props );
  }

  // displays suggested/found artist name under the SearchBar
  // this component is used with SearchView.js
  render() {
    return (
      <Pressable 
        onPress={ () => this.props.navigation.navigate( 
          'SearchResultScreen',
         { artist: this.props.item } 
        )}
        style={SearchSuggestionItemViewStyle.pressableStyle}
      >
        <ListItem 
          bottomDivider
          containerStyle={SearchSuggestionItemViewStyle.containerStyle}
        >
          <Text style={SearchSuggestionItemViewStyle.textStyle}> 
            {this.props.item.strArtist} 
          </Text>
        </ListItem>
      </Pressable>
    );
  }
  
}