import { AnimatePresence, View, Text, useAnimationState } from "moti";
import { useReducer, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
// import { Collapsable, StateTransition } from "./components";
import { FancyAnimation, ScrollPositionAnimation } from "./behaviours";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StateTransition /> */}
      {/* <Collapsable /> */}
      <FancyAnimation />
      {/* <ScrollPositionAnimation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
