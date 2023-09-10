import CircleIconButton from "Components/CircleIconButton";
import Text from "Components/Text";
import React from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

type Props = {
  source: ImageSourcePropType;
  count: string;
  text: string;
};
const Param = (props: Partial<Props>) => {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <CircleIconButton
        size={32}
        source={props.source}
        backgroundColor="#F0F0F0"
        sizeImage={15}
      />
      <View style={{ marginLeft: 4 }}>
        <Text isBold>{props.count?.toString()}</Text>
        <Text isBold color="#B5B5B5">
          {props.text}
        </Text>
      </View>
    </View>
  );
};

export default Param;

const styles = StyleSheet.create({});
