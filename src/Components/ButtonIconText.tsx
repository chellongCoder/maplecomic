import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Text from "./Text";
type Props = {
  source: ImageSourcePropType;
  text: string;
  textColor: string;
  onPress: () => void;
  isShowBadge: boolean;
};
const ButtonIconText = (props: Partial<Props>) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.source ? (
        <View>
          <Image
            source={props.source}
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"
          />
          {props.isShowBadge && (
            <View
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "red",
              }}
            />
          )}
        </View>
      ) : (
        <Text />
      )}
      <View style={{ marginLeft: 8 }} />
      <Text color={props.textColor} isBold>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonIconText;

const styles = StyleSheet.create({});
