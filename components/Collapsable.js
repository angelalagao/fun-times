import React, { ComponentProps, useReducer, useState } from "react";
import { MotiView } from "moti";
import { Button, View } from "react-native";
function useLayout() {
  const [layout, setLayout] = useState({
    height: 0,
  });
  const onLayout = ({ nativeEvent }) => {
    setLayout(nativeEvent.layout);
  };
  return [layout, onLayout];
}
export default function Collapsable() {
  const [{ height }, onLayout] = useLayout();
  const [open, toggle] = useReducer((s) => !s, false);
  return (
    <>
      <MotiView
        animate={{ height }}
        style={{ overflow: "hidden" }}
        transition={{
          // type: "timing",
          duration: 250,
          scale: {
            type: "spring",
          },
        }}
      >
        <View
          onLayout={onLayout}
          style={{
            height: open ? 100 : 300,
            backgroundColor: "#ffd601",
            // flex: 1,
          }}
        />
      </MotiView>
      <Button title="toggle" onPress={toggle} />
    </>
  );
}
