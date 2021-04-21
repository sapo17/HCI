import React, { Component } from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import ItemViewStyle from '../styles/ItemViewStyle';

export default class ItemView extends Component {

  constructor(props) {
    super( props );
  }

  render() {
    return (
      <View>
        <TouchableNativeFeedback
          onPress = { () => 
            this.props.navigation.navigate( 
              'SearchResultScreen', { artist: this.props.item } 
            ) 
          }
        >
          <Text style = { ItemViewStyle.style } >
           { this.props.item }
          </Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}