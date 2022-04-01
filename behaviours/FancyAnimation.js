import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Button, View } from "react-native";

export default function FancyAnimation() {
  const animatedElRef = useRef();

  useEffect(() => {
    console.log("animatedElRef", animatedElRef.current.play);
    animatedElRef.current.play();
  }, []);

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
