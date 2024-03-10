import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// Pega as dimensões da tela
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = () => {
  return (
    <ImageBackground source={require("../assets/imgs/homebackground.png")}>
      <SafeAreaView />

      <View style={styles.page}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/imgs/logoelasnavez.png")}
            resizeMode="contain" // Garante que a imagem será redimensionada mantendo suas proporções
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("Olá");
          }}
        >
          <FontAwesome5
            name="arrow-right"
            size={50}
            color="white"
            style={styles.textButton}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  backgroundimage: { resizeMode: "repeat" },
  tinyLogo: {
    marginRight: 10,
    width: windowWidth * 0.7, // Define a largura para 50% da largura da tela
    height: windowHeight * 0.3, // Define a altura para 50% da altura da tela
    maxWidth: 300, // Você pode definir um maxWidth para evitar que a imagem fique muito grande em telas grandes
    maxHeight: 300, // O mesmo para a altura
  },
  button: {
    marginRight: 25,
    marginBottom: 25,
  },
  textButton: {
    color: "white",
    fontSize: 40,
  },
});
export default Home;
