import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  Button,
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

/**
 * Manipulates the progress of the lottie animation based on scroll position of the list.
 */
export default function ScrollPositionAnimation({ navigation }) {
  const animatedElRef = useRef();

  const scrollPosition = useRef(new Animated.Value(0)).current;
  const handleScroll = ({ nativeEvent }) => {
    const calculatedScrollPosition =
      nativeEvent.contentOffset.y /
      (nativeEvent.contentSize.height - nativeEvent.layoutMeasurement.height);
    scrollPosition.setValue(calculatedScrollPosition);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <LottieView
            ref={animatedElRef}
            source={require("../assets/progress_bar.json")}
            loop={false}
            autoPlay={false}
            style={{
              width: "100%",
            }}
            progress={scrollPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            })}
          />
        </View>
        <FlatList
          data={mockData}
          scrollEventThrottle={1}
          onScroll={handleScroll}
          keyExtractor={(item) => item?.key}
          renderItem={({ item }) => <ImageCard data={item} />}
        />
        <Button
          title="Go to matching"
          onPress={() => navigation.navigate("Matching")}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    zIndex: 1,
  },
  itemImage: {
    height: 400,
    width: "100%",
  },
});
