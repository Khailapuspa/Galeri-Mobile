import { StyleSheet, Image, TextInput } from "react-native";
import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import ProfileUser from "./../../assets/images/user.jpg";

export default function TabOneScreen() {
  return (
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
            style={{ width: 50, height: 50, borderRadius: 25, marginLeft: 10 }}
          />
        </View>

        <Text style={{ fontSize: 13, color: "#FFFFFF", marginLeft: 10 }}>
          Apa yang kamu cari hari ini ?
        </Text>

        <View style={styles.searchContainer}>
          {/* <FontAwesome
            name="search"
            size={20}
            color={"#E4E0E0"}
            style={{marginRight:10}}
          /> */}
          <TextInput placeholder="Search ..." style={styles.searchInput} />
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card1}>
          <Text>Crad1</Text>
        </View>
        <View style={ {...styles.card1,marginHorizontal:10}}>
          <Text>Crad2</Text>
        </View>
        <View style={styles.card1}>
          <Text>Crad3</Text>
        </View>
      </View>
    </View>
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
    height: "25%",
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
  card1: {
    flex: 1,
    backgroundColor: "#C0E5DE",
    height: 150,
  },
});
