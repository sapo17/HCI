import React, { Component } from "react";
import { FlatList, View } from "react-native";
import ItemsScreenStyle from "../styles/ItemsScreenStyle";

export default class ItemsScreen extends Component {

  constructor(props) {
    super( props );
  }
  
  keyExtractor = ( item, index ) => index.toString();

  // displays each list item element
  // by using received ItemView component
  // see AbstractItemView.js for more info
  renderItem( item ) {
    return (
      this.props.ItemView(item)
    );
  }

  // displays a flat list using received data
  render() {
    return(
      <View style={ItemsScreenStyle.viewStyle}> 
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.items}                 
          renderItem={(item) => this.renderItem(item)}
          Item
        />
      </View>
    );
  }

}