import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InfoView from '../components/InfoView';
import SearchView from '../components/SearchView';
import StartScreenStyle from '../styles/StartScreenStyle';

function StartScreen( {navigation} ) {
  return (
    <View style = {StartScreenStyle.container}>
      <InfoView/>
      <SearchView/>
      <StatusBar style="auto" />
    </View>
  );
}

export default StartScreen;