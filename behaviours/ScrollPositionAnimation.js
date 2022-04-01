import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { mockData } from "./data";

const ImageCard = ({ data }) => {
  return (
    <View>
      <Image
        source={{ uri: data?.img }}
        resizeMode={"cover"}
        style={styles.itemImage}
      />
    </View>
  );
};

export default function FancyAnimation() {
  const animatedElRef = useRef();

  // useEffect(() => {
  //   console.log("animatedElRef", animatedElRef.current.play);
  //   animatedElRef.current.play();
  // }, []);

  return (
    <>
      <LottieView
        ref={animatedElRef}
        source={require("../assets/progress_bar.json")}
        loop={false}
        autoPlay={false}
      />
      <FlatList
        // showsVerticalScrollIndicator={false}
        data={mockData}
        keyExtractor={(item) => item?.key}
        renderItem={({ item }) => <ImageCard data={item} />}
      />
    </>
  );
}

const styles = StyleSheet.create({
  itemImage: {
    height: 400,
    width: "100%",
  },
});
