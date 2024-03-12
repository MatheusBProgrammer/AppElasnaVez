import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import brasilColoniaImg from "../../assets/imgs/brasilcoloniaimg.jpg";
import catarina from "../../assets/imgs/catarina.jpg";
import anastacia from "../../assets/imgs/anastacia.jpg";
// Assuming AnimatedPage is adapted for React Native or replaced with equivalent functionality

function BrasilColonia() {
  const [showInfo, setShowInfo] = React.useState(null);
  const [showMore, setShowMore] = React.useState(null);

  React.useEffect(() => {}, [showInfo, showMore]);

  const subTopicImages = [
    { src: catarina, name: "Catarina Álvares Paraguaçu" },
    { src: anastacia, name: "Anastácia" },
  ];

  const informacoes = [
    {
      name: "Catarina",
      article: `Paraguaçu foi uma indígena tupinambá que teve um papel notável na história do Brasil colonial. Ela foi uma das primeiras indígenas batizadas no cristianismo no Brasil e se casou com o colonizador português Diogo Álvares Correia, conhecido como Caramuru. Sua história é importante por simbolizar as primeiras relações entre europeus e os povos indígenas brasileiros. Paraguaçu é uma figura emblemática, representando tanto a resistência quanto a assimilação e a intermediação cultural entre os indígenas e os portugueses. Ela viajou para a França com Caramuru e lá foi batizada como Catarina Álvares Paraguaçu. Ao retornarem ao Brasil, contribuíram para a fundação da cidade de Salvador, na Bahia.`,
    },
    {
      name: "Anastácia",
      article: `Embora envolta em lendas e mistérios, a figura de Anastácia é um símbolo de resistência contra a escravidão no Brasil. Descrita como uma mulher africana de extraordinária beleza e força de espírito, Anastácia é frequentemente representada com uma máscara de ferro, um instrumento de tortura usado para silenciá-la. Segundo as histórias, ela foi uma escrava que lutou contra a sua condição, resistindo às opressões e abusos dos senhores de escravos. A história de Anastácia se mistura entre a realidade e a lenda, mas ela é venerada como uma santa popular por muitos brasileiros, especialmente na comunidade afro-brasileira, representando a luta pela liberdade e dignidade.`,
    },
  ];

  return (
    <ScrollView style={styles.generalInfo}>
      {/* AnimatedPage equivalent for React Native */}
      <View>
        <Text style={styles.title}>Brasil Colonial</Text>
        <Image source={brasilColoniaImg} style={styles.image} />
        <Text style={styles.paragraph}>
          O Brasil Colonial refere-se ao período da história brasileira entre O
          Brasil Colonial se refere ao período da história do Brasil que se
          estende de 1500, ano da chegada dos portugueses liderados por Pedro
          Álvares Cabral, até 1822, quando o país declarou sua independência de
          Portugal. Este é um período marcante, repleto de transformações
          políticas, econômicas, sociais e culturais que foram fundamentais para
          a formação da sociedade brasileira contemporânea. Inicialmente, o
          interesse de Portugal no Brasil centrava-se na exploração do
          pau-brasil, uma madeira valiosa por seu pigmento vermelho, utilizado
          para tingir tecidos na Europa. Esse comércio era realizado
          principalmente por meio do escambo com os povos indígenas. Com o
          tempo, a introdução da cana-de-açúcar no território brasileiro, por
          volta da metade do século XVI, marcou o início da economia de
          plantação no Brasil, exigindo uma grande quantidade de mão de obra
          escravizada, trazida da África através do tráfico transatlântico de
          escravos. A administração colonial era exercida inicialmente pelo
          sistema de capitanias hereditárias, e mais tarde por um governo geral,
          com o objetivo de melhor explorar e colonizar o território. A
          sociedade colonial era caracterizada por uma rígida estratificação,
          baseada em raça, nascimento e riqueza. As mulheres tiveram um papel
          crucial, ainda que frequentemente subestimado, durante este período.
          As contribuições das mulheres variavam significativamente de acordo
          com sua classe social, raça e origem, abrangendo desde o trabalho na
          agricultura até a participação na economia doméstica e, em certos
          casos, o envolvimento em atividades comerciais e artesanais. As
          mulheres indígenas desempenharam um papel fundamental na mediação
          cultural e na miscigenação durante os primeiros anos da colonização.
          Foram essenciais na transmissão de conhecimentos sobre as técnicas
          agrícolas locais, a medicina tradicional e as línguas nativas. Sua
          contribuição não se limitava apenas ao âmbito doméstico, mas
          estendia-se à resistência e à interação com os colonizadores. Por
          outro lado, as mulheres africanas e afrodescendentes, muitas vezes
          escravizadas, ocuparam uma posição central na economia doméstica
          colonial e na agricultura. Além de enfrentarem as adversidades
          impostas pela escravidão, essas mulheres foram protagonistas na
          formação cultural do Brasil, através de sua resistência, seja por meio
          de fugas, a formação de quilombos ou a resistência cotidiana. As
          mulheres europeias, sobretudo aquelas de classes mais abastadas,
          tinham sua influência concentrada no ambiente doméstico e social. No
          entanto, algumas delas se destacaram em áreas como a educação e a
          assistência social, contribuindo significativamente para o
          desenvolvimento da sociedade colonial. Portanto, as mulheres no Brasil
          Colonial não foram apenas espectadoras passivas, mas agentes ativos
          que moldaram, em diversos níveis, a história e a cultura do Brasil.
          Suas histórias, lutas e conquistas são peças fundamentais para
          compreender a complexidade e a riqueza do período colonial brasileiro.
        </Text>
        {/* Other sections and paragraphs */}
        <Text style={styles.subTitle}>Mulheres em Destaque:</Text>
        <View style={styles.subTopicsMenu}>
          {subTopicImages.map((image, index) => (
            <View key={index} style={styles.topicItem}>
              <TouchableOpacity
                onPress={() => {
                  setShowMore(null);
                  setShowInfo(showInfo === index ? null : index);
                }}
                onLongPress={() =>
                  setShowMore(showInfo === index ? null : index)
                }
              >
                <Image source={image.src} style={styles.image} />
                <Text style={styles.name}>{image.name}</Text>
                {showMore === index && (
                  <Text
                    style={styles.more}
                    onPress={() => {
                      setShowMore(null);
                      setShowInfo(showInfo === index ? null : index);
                    }}
                  >
                    Mostrar mais...
                  </Text>
                )}
              </TouchableOpacity>
              {showInfo === index && (
                <Text style={styles.article}>{informacoes[index].article}</Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  generalInfo: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginTop: 10,
  },
  subTopicsMenu: {
    marginTop: 20,
  },
  topicItem: {
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  more: {
    fontSize: 16,
    color: "blue",
  },
  article: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default BrasilColonia;
