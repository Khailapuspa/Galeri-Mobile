import { StyleSheet, Image, ScrollView, FlatList } from "react-native";

import { Text, View } from "@/components/Themed";
import foto1 from "../../assets/images/content1.jpg";
import Pin from "@/components/Pin";
import pins from "../../assets/data/pins";
import MasonryList from "@/components/MasonryList";

export default function TabTwoScreen() {
  return (
    <MasonryList pins={pins} />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
  },
  column: {
    flex: 1
  }
});
