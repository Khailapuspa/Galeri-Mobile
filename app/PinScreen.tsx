import { Text, Image, StyleSheet, View, Pressable } from "react-native";
import pins from "@/assets/data/pins";
import { useEffect, useState } from "react";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

const PinScreen = () => {
  const pin = pins[1];
  const [ratio, setRatio] = useState(1);

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (pin.image) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <StatusBar style="light" />
      <View style={styles.root}>
        <Image
          source={{ uri: pin.image }}
          style={{ ...styles.image, aspectRatio: ratio }}
        />
        <Text style={styles.tittle}>{pin.title}</Text>
      </View>
      <Pressable onPress={goBack} style={{...styles.backBtn, top: insets.top + 20}}>
        <Ionicons name={"chevron-back"} size={35} color={"white"} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  image: {
    width: "100%",
  },
  tittle: {
    margin: 10,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 35,
  },
  backBtn: {
    position: 'absolute',
    left: 20,
  }
});

export default PinScreen;
