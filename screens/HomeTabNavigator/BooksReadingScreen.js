import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BooksReadingScreen = props => (
  <View style={styles.container}>
    <Text>BooksReadingScreen</Text>
  </View>
);

export default BooksReadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
