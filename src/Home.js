import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.page}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    backgroundColor: "grey",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default Home;
