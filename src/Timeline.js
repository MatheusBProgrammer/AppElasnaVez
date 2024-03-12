import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Importando o Icon do pacote de ícones MaterialCommunityIcons
import BrasilColonia from "./MenuScreens/BrasilColonia";

//import de imagens
const img1 = require("../assets/imgs/img1.jpg");
const img2 = require("../assets/imgs/img2.jpg");
const img3 = require("../assets/imgs/img3.jpg");
const img4 = require("../assets/imgs/img4.jpg");
const img5 = require("../assets/imgs/img5.jpg");
const img6 = require("../assets/imgs/img6.jpg");
const img7 = require("../assets/imgs/img7.jpg");
const img8 = require("../assets/imgs/img8.jpg");
const img9 = require("../assets/imgs/img9.jpg");
const img10 = require("../assets/imgs/img10.jpg");
/////////////////////////////////////////////////

//objetos de rendezização
const menuItems = [
  { id: 1, src: img1, name: "Brasil Colônia", componentKey: "BrasilColonia" },
  { id: 2, src: img2, name: "Brasil Império", componentKey: "BrasilImperio" },
  {
    id: 3,
    src: img3,
    name: "Período Regencial",
    componentKey: "PeriodoRegencial",
  },
  { id: 4, src: img4, name: "Renascimento", componentKey: "Renascimento" },
  {
    id: 5,
    src: img5,
    name: "Expansão Marítima",
    componentKey: "ExpansaoMaritima",
  },
  {
    id: 6,
    src: img6,
    name: "Reforma Protestante",
    componentKey: "ReformaProtestante",
  },
  {
    id: 7,
    src: img7,
    name: "Revolução Industrial",
    componentKey: "RevolucaoIndustrial",
  },
  {
    id: 8,
    src: img8,
    name: "Revolução Francesa",
    componentKey: "RevolucaoFrancesa",
  },
  {
    id: 9,
    src: img9,
    name: "Revolução Inglesa",
    componentKey: "RevolucaoInglesa",
  },
  {
    id: 10,
    src: img10,
    name: "Independência do Brasil",
    componentKey: "IndependenciaDoBrasil",
  },
];
///////////////////////////////////////////////

//Renderilação de Lista

const Timeline = ({ navigation }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedComponentKey, setSelectedComponentKey] = React.useState(null);

  const getPageComponent = (componentKey) => {
    switch (componentKey) {
      case "BrasilColonia":
        return <BrasilColonia />;

      default:
        return (
          <View>
            <Text>Componente não encontrado</Text>
          </View>
        );
    }
  };

  const flatlistItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => {
        setShowModal(true);
        setSelectedComponentKey(item.componentKey);
      }}
    >
      <Image source={item.src} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../assets/imgs/homebackground.jpg")}
      style={styles.backtgroundImage}
    >
      <View style={styles.page}>
        <Text style={styles.header}>Selecione um Período Histórico</Text>

        <FlatList
          data={menuItems}
          renderItem={flatlistItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.container}
        />

        <Modal
          animationType="slide"
          transparent={false}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          {getPageComponent(selectedComponentKey)}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}
          >
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Modal>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.navigationReturn}
        >
          <Icon name="arrow-left" size={30} color="#532424" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backtgroundImage: {
    flex: 1,
  },
  page: {
    paddingTop: 200,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "900",
    color: "#532424",
  },
  container: {
    alignItems: "center",
    padding: 10,
  },
  menuItem: {
    marginRight: 20,
    alignItems: "center",
  },
  image: {
    width: 300, // Adjusted for better visibility
    height: 300, // Adjusted for better visibility
    borderRadius: 20, // Circular images
  },
  text: {
    fontSize: 30,
    marginTop: 5,
    color: "#532424",
  },
  navigationReturn: {
    padding: 10,
    height: 100,
  },
});

export default Timeline;
