import {
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import ProfileUser from "./../../assets/images/user.jpg";
import Foto1 from "./../../assets/images/content1.jpg";
import Foto2 from "./../../assets/images/content2.jpg";
import Foto3 from "./../../assets/images/content3.jpg";
import Foto4 from "./../../assets/images/content4.jpg";
import Foto5 from "./../../assets/images/content5.jpeg";
import Foto6 from "./../../assets/images/content6.jpeg";
import Foto7 from "./../../assets/images/content7.jpeg";
import Foto8 from "./../../assets/images/content8.jpeg";

export default function TabOneScreen() {
  const images = [
    { id: "1", image: Foto1 },
    { id: "2", image: Foto2 },
    { id: "3", image: Foto3 },
    { id: "4", image: Foto4 },
    { id: "5", image: Foto5 },
    { id: "6", image: Foto6 },
    { id: "7", image: Foto7 },
    { id: "8", image: Foto8 },
  ];

  return (
    <FlatList
      data={[""]}
      keyExtractor={() => "empty-key"}
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.row}>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  padding: 10,
                }}
              >
                Hi, Kila!
              </Text>
              <FontAwesome
                name="bell"
                size={20}
                color={"#FFFFFF"}
                style={{ marginStart: "auto" }}
              />
              <Image
                source={ProfileUser}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginLeft: 10,
                }}
              />
            </View>

            <Text style={{ fontSize: 13, color: "#FFFFFF", marginLeft: 10 }}>
              Apa yang kamu cari hari ini ?
            </Text>

            <View style={styles.searchContainer}>
              <TextInput placeholder="Search ..." style={styles.searchInput} />
            </View>
          </View>

          <View style={styles.cardContainer}>
            <View style={{ ...styles.card, backgroundColor: "#6ACACA" }}>
              <FontAwesome name="bar-chart" size={20} color={"#FFFFFF"} />
            </View>
            <View
              style={{
                ...styles.card,
                marginHorizontal: 10,
                backgroundColor: "#80CCBF",
              }}
            >
              <FontAwesome name="picture-o" size={20} color={"#FFFFFF"} />
            </View>
            <View style={{ ...styles.card, backgroundColor: "#6AAFA3" }}>
              <FontAwesome name="folder-open" size={20} color={"#FFFFFF"} />
            </View>
          </View>

          <View style={styles.textContainer}>
            <Text
              style={{ color: "#000000", fontSize: 18, fontWeight: "bold" }}
            >
              Popular Picture
            </Text>
            <Text
              style={{
                color: "#2068DF",
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 4,
                marginLeft: 150,
              }}
            >
              See All
            </Text>
          </View>

          <View style={styles.contentContainer}>
            <FlatList
              data={images}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Image source={item.image} style={styles.content} />
              )}
              contentContainerStyle={styles.list}
              numColumns={2}
            />
          </View>
        </View>
      )}
      renderItem={() => null}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  subContainer: {
    width: "100%",
    backgroundColor: "#5F9EA0",
    height: 150,
    padding: 20,
    borderBottomLeftRadius: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  searchContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    height: 50,
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#C0E5DE",
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    display: "flex",
    width: "100%",
    padding: 20,
    flexDirection: "row",
    backgroundColor: "transparent",
    marginTop: 10,
  },
  wrapper: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    backgroundColor: "#70CA6A",
    flexWrap: "wrap",
    marginBottom: 10,
    paddingVertical: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    height: "100%",
    flexDirection: "column",
    margin: 5,
    aspectRatio: 1,
  },
  list: {
    justifyContent: "space-between",
  },
});
