import { StyleSheet, Image, ScrollView, FlatList } from "react-native";

import { Text, View } from "@/components/Themed";
import foto1 from "../../assets/images/content1.jpg";
import Pin from "@/components/Pin";
import pins from "../../assets/data/pins";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* 1st column */}
        <View style={styles.column}>
          {/* <Pin pin={pins[0]} />
          <Pin pin={pins[1]} />
          <Pin pin={pins[2]} />
          <Pin pin={pins[3]} />
          <Pin pin={pins[4]} /> */}

          {pins
            .filter((_, index) => index % 2 === 0)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
        {/* 2st column */}
        <View style={styles.column}>
          {/* <Pin pin={pins[5]} />
          <Pin pin={pins[6]} />
          <Pin pin={pins[7]} />
          <Pin pin={pins[8]} />
          <Pin pin={pins[9]} /> */}

          {pins
            .filter((_, index) => index % 2 === 1)
            .map((pin) => (
              <Pin pin={pin} key={pin.id} />
            ))}
        </View>
      </View>
    </ScrollView>
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
