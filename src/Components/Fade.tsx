import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";

export const Fade = ({
  children,
  style,
  visible,
}: {
  visible: boolean;
  style?: ViewStyle;
  children: React.ReactNode;
}) => {
  const _visibility = useRef(new Animated.Value(0)).current;
  const containerStyle = {
    opacity: _visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        scale: _visibility.interpolate({
          inputRange: [0, 1],
          outputRange: [1.1, 1],
        }),
      },
    ],
  };
  const combinedStyle = [containerStyle, style];

  useEffect(() => {
    Animated.timing(_visibility, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [visible]);

  return <Animated.View style={combinedStyle}>{children}</Animated.View>;
};

const styles = StyleSheet.create({});
