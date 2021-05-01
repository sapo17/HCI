import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import Color from '../config/Color';
import LoadingViewStyle from "../styles/LoadingViewStyle";

export default class LoadingView extends Component {

  constructor() {
    super();
  }

  // displays loading screen
  // this component is used in SearchResultScreen
  render() {
    return (
      <View style={LoadingViewStyle.viewStyle}>
        <ActivityIndicator 
          size="large" 
          color={Color.FOREGROUND} 
          style={LoadingViewStyle.activityIndicatorStyle}
        />
      </View>
    );
  }

}