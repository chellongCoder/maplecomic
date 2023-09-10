import { Fade } from "Components/Fade";
import { ScreenE, useNavigation } from "Hooks/useNavigation";
import Screen1 from "Screen1";
import Screen2 from "Screen2";
import React from "react";
import { StyleSheet, View } from "react-native";

const Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {navigation.indexScreen === ScreenE.SCREEN1 && (
        <Fade style={{ flex: 1 }} visible>
          <Screen1 />
        </Fade>
      )}
      {navigation.indexScreen === ScreenE.SCREEN2 && (
        <Fade style={{ flex: 1 }} visible>
          <Screen2 />
        </Fade>
      )}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({});
