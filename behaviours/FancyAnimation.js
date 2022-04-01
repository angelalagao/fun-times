import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { Button, View } from "react-native";

export default function FancyAnimation() {
  const animatedElRef = useRef();

  useEffect(() => {
    animatedElRef.current.play();
  }, []);

  // based on status update, can use this to progress the animation?

  return (
    <>
      <LottieView
        ref={animatedElRef}
        source={require("../assets/matching_animation.json")}
      />
      {/* <Button title="toggle" onPress={toggle} /> */}
    </>
  );
}
