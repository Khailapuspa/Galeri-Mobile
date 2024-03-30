import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import MasonryList from "@/components/MasonryList";
import pins from "@/assets/data/pins";
import { Entypo, Feather } from "@expo/vector-icons";

export default function three() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.icons}> 
          <Feather name="share" size={24} color="black" style={styles.icon} />
          <Entypo name="dots-three-horizontal" size={24} color= "black" style={styles.icon} />
        </View>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>three</Text>
        <Text style={styles.subtitle}>Hi I'm james</Text>
      </View>

      <MasonryList pins={pins} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
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
    width: 200,
    aspectRatio: 1,
    borderRadius: 200,
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
