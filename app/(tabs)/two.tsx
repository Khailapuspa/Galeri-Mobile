import { StyleSheet, Image, ScrollView } from "react-native";

import { Text, View } from "@/components/Themed";
import foto1 from "../../assets/images/content1.jpg";
import Pin from "@/components/Pin";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pin pin={{
          image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/3.jpeg",
          title: "foto1"
        }}  />
        <Pin pin={{
          image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/2.jpeg",
          title: "foto1"
        }}  />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
