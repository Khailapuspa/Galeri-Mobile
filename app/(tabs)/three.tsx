import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import MasonryList from "@/components/MasonryList";
import pins from "@/assets/data/pins";
import { Entypo, Feather } from "@expo/vector-icons";
// import profile from "./../../assets/images/content2.jpg";
import profile from "./../../assets/images/content2.jpg"

export default function three() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}> 
          <Feather name="share" size={24} color="black" style={styles.icon} />
          <Entypo name="dots-three-horizontal" size={24} color= "black" style={styles.icon} />
        </View>
        <Image
          source={profile}
          style={{width: 200,
            height: 200,
            borderRadius: 200,}}
        />
        <Text style={styles.title}>Khaila Puspa</Text>
        <Text style={styles.subtitle}>Followers 1k | Follwoing 10</Text>
      </View>

      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 20,
  },
  subtitle: {
    color: "#181818",
    fontWeight: "600",
    margin: 10,
  },
  image: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 700,
    marginVertical: 10,
  },
  header: {
    alignItems:"center"
  },
  icons: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: 10
  },
  icon: {
    paddingHorizontal: 10,
  }
});
