import React, { Component, useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import SearchSuggestionItemView from './SearchSuggestionItemView';
import * as GlobalVariables from '../GlobalVariables';
import SearchViewStytle from '../styles/SearchViewStytle';

export default class SearchView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      results: [],
    }
  }

  // updates this.state.search string
  updateSearch = (search) => {
    this.setState( {search} );
  }

  // fetches artist if search is
  // different then the previous state
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.search !== this.state.search) {
      if ( this.state.search !== '') {
        this.fetchArtist();
      }
    }
  }

  // fetches artist object using given input( this.state.search )
  fetchArtist() {
    fetch( 
      GlobalVariables.baseUrl + GlobalVariables.endPoints.artistSearch 
      + this.state.search
    )
      .then( body => body.json() )
      .then( result => {
        let artists = result['artists'];
        if ( artists != null ) {
          this.setState( {results: artists} );
        }
      })
      .catch( err => {
        alert(err);
      });
  }

  clearResults = () => {
    this.setState( {results: []} );
  }

  // displays search results and
  // if result is clicked, the found artist
  // object is passed to SearchResultScreen
  renderItem( item ) {
    return(
      <SearchSuggestionItemView 
        navigation = { this.props.navigation } 
        item = { item } 
      />
    );
  }

  // dipslays SearchBar & Search results
  render() {
    const { search } = this.state;
    return (
      <View style={SearchViewStytle.viewStyle}>
        <Icon
          name='music-clef-treble'
          type='material-community'
          color={SearchViewStytle.iconColor}
          size={SearchViewStytle.musicIconSize}
        />
        <SearchBar
          placeholder = 'Search Artist...'
          onChangeText = { this.updateSearch }
          onClear = { this.clearResults }
          value = { search }
          containerStyle = { 
            SearchViewStytle.searchBarStyle.containerStyle
          }
          inputStyle = { 
            SearchViewStytle.searchBarStyle.inputStyle
          }
          inputContainerStyle = { 
            SearchViewStytle.searchBarStyle.inputContainerStyle
          }
          placeholderTextColor= { 
            SearchViewStytle.searchBarStyle.placeHolderColor
          }
          searchIcon={{color: SearchViewStytle.searchBarStyle.searchIconColor}}
          clearIcon={{color: SearchViewStytle.searchBarStyle.clearIconColor}}
       />
        <FlatList
          data={ this.state.results }
          keyExtractor={(item, index) => index.toString()}
          renderItem= { ({item}) => this.renderItem(item)}
        />
      </View>
    );
  }

}