import React, { Component } from "react";
import { View } from "react-native";
import ItemSeparatorViewStyle from '../styles/ItemSeparatorViewStyle';

export default class ItemSeparatorView extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style = {ItemSeparatorViewStyle.style} />
    );
  }
}