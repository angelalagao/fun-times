import React, { useEffect, useRef } from "react";
import LottieView from "lottie-react-native";
import { Button, View } from "react-native";

export default function Splash({ navigation }) {
  const animatedElRef = useRef();

  useEffect(() => {
    animatedElRef.current.play();
  }, []);

  return (
    <>
      <LottieView
        ref={animatedElRef}
        source={require("../assets/splash.json")}
        onAnimationFinish={() => navigation.navigate("Home")}
        loop={false}
      />
    </>
  );
}
