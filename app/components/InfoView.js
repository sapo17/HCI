import React, { Component } from "react";
import { Text, View } from "react-native";
import StudentInfo from "../StudentInfo";

export default class InfoView extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>Name:{ StudentInfo.name} </Text>
        <Text>Student Number:{ StudentInfo.studentNumber} </Text>
      </View>
    );
  }

}