import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Importando o Icon do pacote de ícones MaterialCommunityIcons

const backgroundImagePath = "../assets/imgs/menubackground.jpg";

const windowWidth = Dimensions.get("screen").width;

const Menu = ({ navigation }) => {
  return (
    <ImageBackground
      source={require(backgroundImagePath)}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.page}>
          <View style={styles.menuItens}>
            <TouchableOpacity onPress={() => navigation.navigate("timeline")}>
              <Text>
                <Icon name="menu" size={60} color="#532424" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text>
                <Icon name="home" size={100} color="#532424" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Text>
                <Icon name="chat" size={60} color="#532424" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center", // Centraliza os ícones na tela
    alignItems: "center", // Alinha ícones ao centro
  },
  page: {
    justifyContent: "flex-end",
    flex: 1,
  },
  menuItens: {
    marginBottom: 50,
    flexDirection: "row",
    width: windowWidth,
    alignItems: "baseline",
    justifyContent: "space-around",
  },
});

export default Menu;
