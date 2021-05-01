import React, { Component } from "react";
import { Image, Text, Pressable, View, Button } from "react-native";
import { Overlay } from 'react-native-elements';
import AbstractItemViewStyle from "../styles/AbstractItemViewStyle";


class AbstractItemView extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: false
  };

  // sets overlay screen visible/invisible
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  // displays received array of data 
  // using received ListItemComponent
  // if list item is clicked, an overlay screen
  // will be displayed using received OverlayComponent
  render() {
    const { modalVisible } = this.state;
    return (
      <View>
        <Overlay
          isVisible={modalVisible} 
          onBackdropPress={ () => {
            this.setModalVisible(!modalVisible);
          }}
          overlayStyle={AbstractItemViewStyle.overlayStyle}
        >
          { this.props.OverlayComponent() }
          <Button
            onPress={() => this.setModalVisible(!modalVisible)}
            title={'Hide'}
            color={AbstractItemViewStyle.buttonColor}
          />
        </Overlay>
        <Pressable onPress={ () => this.setModalVisible(true) } >
          { this.props.ListItemComponent() }
        </Pressable>
      </View>
    );
  }
}

export default AbstractItemView;