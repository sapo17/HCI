import React, { Component } from "react";
import { Text, View } from "react-native";
import StudentInfo from "../StudentInfo";
import StudentInfoViewStyle from "../styles/StudentInfoViewStyle";
export default class StudentInfoView extends Component {

  constructor() {
    super();
  }

  // displays student information
  render() {
    return (
      <View style={StudentInfoViewStyle.viewStyle}>
        <Text style={StudentInfoViewStyle.textStyle}>Name:{ StudentInfo.name} </Text>
        <Text style={StudentInfoViewStyle.textStyle}>Student Number:{ StudentInfo.studentNumber} </Text>
      </View>
    );
  }

}