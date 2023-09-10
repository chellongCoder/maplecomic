import React from "react";
import { StyleSheet, Text as RNText, TextStyle } from "react-native";

type Props = {
  children: string;
  isBold: boolean;
  color: string;
  fontSize: number;
} & {
  style: TextStyle;
};
const Text = ({
  children,
  isBold,
  color,
  fontSize,
  ...props
}: Partial<Props>) => {
  return (
    <RNText
      style={{
        fontFamily: isBold ? "Roboto-Bold" : "Roboto-Regular",
        color,
        fontSize,
        ...props.style,
      }}
    >
      {children}
    </RNText>
  );
};

export default Text;

const styles = StyleSheet.create({});
