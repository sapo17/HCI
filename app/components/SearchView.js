import React, { Component, useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Color from '../config/Color';
import SearchBarStyle from '../styles/SearchBarStyle';
import ItemSeparatorView from '../components/ItemSeparatorView';
import ItemView from '../components/ItemView';

export default class SearchView extends Component {


  constructor(props) {
    super(props);
    
    this.state = {
      search: '',
      results: [],
    }
    this.baseUrl = 'https://www.theaudiodb.com';
    this.endPoint = '/api/v1/json/1/search.php?s=';

  }

  
  componentDidMount() {  
  }

  
  updateSearch = (search) => {
    this.setState( {search} );
    this.setState
    fetch( this.baseUrl + this.endPoint + search )
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

  mapResults( attribute ) {
    return this.state.results.map( artist => artist[attribute] );
  }


  render() {
    const { search } = this.state;
    
    return (
      <View>
        <SearchBar
          placeholder = '   Search music...'
          onChangeText = { this.updateSearch }
          value = { search }
          containerStyle = { SearchBarStyle.containerStyle }
          inputStyle = { SearchBarStyle.inputStyle }
          inputContainerStyle = { SearchBarStyle.containerStyle }
          placeholderTextColor= { Color.CREAM }
        />
        <FlatList
          data={ this.mapResults( 'strArtist' ) }
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem= { ({item}) => 
            <ItemView navigation = { this.props.navigation } item = { item } 
          />}
        />
      </View>
    );
  }

}