import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Insta extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Instagram</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
});
