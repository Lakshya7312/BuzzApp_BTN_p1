import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Fb extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Facebook</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center"
  },
});
