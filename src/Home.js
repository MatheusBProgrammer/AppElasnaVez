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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = ({ navigation }) => {
  return (
    <ImageBackground source={require("../assets/imgs/homebackground.png")}>
      <SafeAreaView />

      <View style={styles.page}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={require("../assets/imgs/logoelasnavez.png")}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Menu");
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
    width: windowWidth * 0.7,
    height: windowHeight * 0.3,
    maxWidth: 300,
    maxHeight: 300,
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
