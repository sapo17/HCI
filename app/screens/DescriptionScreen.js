import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import DescriptionScreenStyle from "../styles/DescriptionScreenStyle";

export default class DescriptionScreen extends Component {

  constructor(props) {
    super( props );
  }

  // displays artist description
  render() {
    return(
      <View style={DescriptionScreenStyle.viewStyle}>
        <ScrollView>
          <Text style={DescriptionScreenStyle.textStyle}>
            { this.props.artist.strBiographyEN }
          </Text>
        </ScrollView>
      </View>
    );
  }

}