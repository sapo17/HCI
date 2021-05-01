import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';

import StudentInfoView from '../components/StudentInfoView';
import SearchView from '../components/SearchView';
import StartScreenStyle from '../styles/StartScreenStyle';

export default class StartScreen extends Component {

  constructor(props) {
    super(props);
  }

  // displays home screen:
  // Student information, Search bar & Favourites button
  render() {
    return(
      <View style = {StartScreenStyle.viewStyle}>
        <StudentInfoView/>
        <SearchView navigation = { this.props.navigation } />
        <Icon
          containerStyle={StartScreenStyle.iconContainerStyle}
          raised
          reverse
          size={StartScreenStyle.iconSize}
          name='heart'
          type='font-awesome'
          color= {StartScreenStyle.iconColor}
          reverseColor = {StartScreenStyle.iconReversedColor}
          onPress={ () => this.props.navigation.navigate( 'FavouritesScreen') } 
        />
        <StatusBar style="auto" />
      </View>
    );
  }

}
