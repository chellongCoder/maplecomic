import { AwesomeButton } from "Hooks/withGradient";
import { Images } from "Images";
import React from "react";
import { StyleSheet, View } from "react-native";

import Param from "./Param";

const CardComicInfo = ({ onPressButton }) => {
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        paddingHorizontal: 16,
        paddingVertical: 16,
        marginHorizontal: 16,
        marginTop: -36,
        zIndex: 999,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.36,
        shadowRadius: 10,
        elevation: 11,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <Param count="8" text="Thể loại" source={Images.IC_CATEGORY} />
        <Param count="24" text="Hashtag" source={Images.IC_CATEGORY} />
        <Param count="1,234" text="Theo dõi" source={Images.IC_CATEGORY} />
      </View>
      <AwesomeButton
        backgroundColor="#EDE7FE"
        width="100%"
        height={32}
        borderRadius={8}
        text="Xác nhận truyện đã hoàn thành"
        textColor="#4920BC"
        borderWidth={1}
        borderColor="#D3C6F8"
        alignSelf="center"
        onPress={onPressButton}
      />
    </View>
  );
};

export default CardComicInfo;

const styles = StyleSheet.create({});
