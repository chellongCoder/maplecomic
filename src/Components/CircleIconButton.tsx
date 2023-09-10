import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  source: ImageSourcePropType;
  size: number;
  backgroundColor: string;
  sizeImage: number;
  onPress: () => void;
} & {
  style: ViewStyle;
};
const CircleIconButton = ({ sizeImage = 10, ...props }: Partial<Props>) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.container,
        {
          width: props.size,
          height: props.size,
          borderRadius: props.size ? props.size / 2 : undefined,
          backgroundColor: props.backgroundColor,
          ...props.style,
        },
      ]}
    >
      {props.source ? (
        <Image
          source={props.source}
          style={{
            width: sizeImage,
            height: sizeImage,
          }}
          resizeMode="contain"
        />
      ) : (
        <Text>!</Text>
      )}
    </TouchableOpacity>
  );
};

export default CircleIconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
