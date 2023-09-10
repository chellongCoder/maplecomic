import { ScreenE, useNavigation } from "Hooks/useNavigation";
import { AwesomeButton } from "Hooks/withGradient";
import { Images } from "Images";
import React from "react";
import { StyleSheet, View } from "react-native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "#ffffff",
        width: "100%",
        paddingBottom: 32,
        paddingTop: 16,
        paddingHorizontal: 16,
      }}
    >
      <AwesomeButton
        backgroundColor="#E7EEFF"
        source={Images.IC_PLUS}
        width="100%"
        height={40}
        borderRadius={24}
        text="Viết chương mới"
        textColor="#ffffff"
        isGradient
        onPress={() => {
          navigation.changeScreen?.(ScreenE.SCREEN2);
        }}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
