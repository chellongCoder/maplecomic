import NavigationProvider from "Hooks/useNavigation";
import Screen from "Screen";
import Screen1 from "Screen1";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/Fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("./assets/Fonts/Roboto-Black.ttf"),
    "Roboto-Light": require("./assets/Fonts/Roboto-Light.ttf"),
    "Roboto-Thin": require("./assets/Fonts/Roboto-Thin.ttf"),
    "Roboto-Medium": require("./assets/Fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/Fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <StatusBar style="auto" />
      {/* <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
      />

      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: -1, y: 0 }}
        style={{
          width: 300,
          height: 100,
        }}
        colors={["#DA70D6", "#5245EE"]}
      >
        <Text>Sign in with Facebook</Text>
      </LinearGradient> */}
      <NavigationProvider>
        <Screen />
      </NavigationProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
