import { AnimatePresence, View, Text, useAnimationState } from "moti";
import { useReducer, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { Collapsable, StateTransition } from "./components";
import { FancyAnimation, ScrollPositionAnimation, Splash } from "./behaviours";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Splash navigation={navigation} />
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollPositionAnimation navigation={navigation} />
    </View>
  );
};

const Matching = () => {
  return (
    <View style={styles.container}>
      <FancyAnimation />
    </View>
  );
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerBackVisible: false }}
        />
        <Stack.Screen name="Matching" component={Matching} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
