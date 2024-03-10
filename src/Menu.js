import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";

// Considerando que você mantenha a imagem de fundo no mesmo local
const backgroundImagePath = "../assets/imgs/menubackground.jpg";

const Menu = ({ navigation }) => {
  return (
    <ImageBackground
      source={require(backgroundImagePath)}
      style={styles.background}
    >
      <SafeAreaView />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Menu;
