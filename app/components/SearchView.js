import React, { Component } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Color from '../config/Color';
import SearchBarStyle from '../styles/SearchBarStyle';

export default class SearchView extends Component {

  state = {
    search: '',
  }

  updateSearch = (search) => {
    this.setState( {search} );
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
          placeholderTextColor= '#FEFFD6'
        />
      </View>
    );
  }

}