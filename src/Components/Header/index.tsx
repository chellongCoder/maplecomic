import CircleIconButton from "Components/CircleIconButton";
import Text from "Components/Text";
import { AwesomeButton } from "Hooks/withGradient";
import { Images } from "Images";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <SafeAreaView
      style={{
        width: Dimensions.get("screen").width - 32,
        zIndex: 999,
        position: "absolute",
        marginTop: 20,
        alignSelf: "center",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <CircleIconButton
          size={32}
          backgroundColor="rgba(255,255,255,0.5)"
          source={Images.IC_BACK}
        />
        <AwesomeButton
          backgroundColor="#E7EEFF"
          source={Images.IC_UPLOAD}
          width={145}
          height={32}
          borderRadius={24}
          text="Thay ảnh bìa"
          textColor="#528AFF"
        />
        <CircleIconButton
          size={32}
          backgroundColor="rgba(255,255,255,0.5)"
          source={Images.IC_SETTING}
          sizeImage={20}
        />
      </View>
      <View style={{ marginTop: 16 }}>
        <Text fontSize={18} isBold color="#ffffff">
          Tên của bộ truyện có thể dài hơn 2 dòng nhưng yêu cầu giới hạn ký tự
          (có thể quy định sau) Số lượng: 12 chương
        </Text>
      </View>
      <View style={{ marginTop: 8 }}>
        <Text fontSize={14} color="#B5B5B5">
          Số lượng: 12 chương
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
