import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import foto1 from "./../assets/images/content1.jpg";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";


const Pin = (props: { pin: { image: any; title: string } }) => {
  const { image, title } = props.pin;

  const [ratio, setRatio] = useState(1);

  //value = 1;
  const onLike = () => {};

  useEffect(() => {
    if (image) {
      Image.getSize(image, (width, height) => setRatio(width / height));
    }
  }, [image]);

  return (
    <View style={styles.pin}>
      <View>
        <Image
          source={{ uri: image }}
          style={{ ...styles.image, aspectRatio: ratio }}
        />
        <Pressable onPress={onLike} style={styles.heartBtn}>
          <AntDesign name="hearto" size={24} color="black" />
        </Pressable>
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pin: {
    width: "100%",
    padding: 4,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "600",
    margin: 5,
    color: "#181818",
  },
  image: {
    width: "100%",
    borderRadius: 20,
    aspectRatio: 1 / 2,
  },
  heartBtn: {
    backgroundColor: "#D3CFD4",
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
  },
});

export default Pin;
