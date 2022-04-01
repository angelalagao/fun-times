import { AnimatePresence, View, Text, useAnimationState } from "moti";
import { useReducer, useState } from "react";
import { Pressable, StyleSheet } from "react-native";

function Shape({ bg, children, shouldAnimate }) {
  const viewProps = shouldAnimate
    ? {
        from: {
          translateX: 50,
          opacity: 0,
        },
        animate: {
          translateX: 0,
          opacity: 1,
        },
        exit: {
          translateX: -50,
          opacity: 0,
        },
        transition: {
          type: "timing",
          duration: 250,
          scale: {
            type: "spring",
          },
        },
      }
    : {};

  const textProps = shouldAnimate
    ? {
        from: { opacity: 0, translateY: 15 },
        animate: { opacity: 1, translateY: 0 },
        exit: {
          translateY: -15,
          opacity: 0,
        },
        transition: {
          type: "timing",
          duration: 300,
          scale: {
            delay: 500,
          },
        },
      }
    : {};

  return (
    <View {...viewProps} style={[styles.shape, { backgroundColor: bg }]}>
      <Text {...textProps}>{children}</Text>
    </View>
  );
}

export default function StateTransition() {
  const [hasBeenPreselected, toggle] = useReducer((s) => !s, true);
  const [shouldAnimate, toggleAnimate] = useReducer((s) => !s, true);

  const renderItems = () => (
    <>
      {hasBeenPreselected ? (
        <Shape bg="#86d2c5" key="1" shouldAnimate={shouldAnimate}>
          I'm a preselected speciality
        </Shape>
      ) : (
        <Shape bg="#ec9587" key="2" shouldAnimate={shouldAnimate}>
          Different one
        </Shape>
      )}
    </>
  );

  return (
    <View style={styles.container}>
      <AnimatePresence exitBeforeEnter>{renderItems()}</AnimatePresence>
      <Pressable onPress={toggle} style={[styles.button, { marginTop: 100 }]}>
        <Text>{hasBeenPreselected ? "Pick a different one" : "Nevermind"}</Text>
      </Pressable>
      <Pressable
        onPress={toggleAnimate}
        style={[styles.button, { marginTop: 200, borderWidth: 0 }]}
      >
        <Text>Turn {shouldAnimate ? "off" : "on"} animation</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e47862",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
