import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import styled from "styled-components";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends React.Component<object, object> {
  render() {
    return (
      <Container>
        <Welcome>Welcome to React Native + Styled Components!</Welcome>
        <Instructions>To get started, edit App.js</Instructions>
        <Instructions>{instructions}</Instructions>
      </Container>
    );
  }
}

const Welcome = styled.text`
  font-size: 20;
  text-align: "center";
  margin: 10;
`;

const Instructions = styled.text`
  text-align: "center";
  color: "#333333";
  margin-bottom: 5;
`;

const Container = styled.view`
  flex: 1;
  justify-content: "center";
  align-items: "center";
  background-color: "#F5FCFF;
`;
