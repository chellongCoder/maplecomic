import React from "react";
import {
  InputAccessoryView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const StickyInput = ({}) => {
  return (
    <InputAccessoryView nativeID="asada">
      <TextInput
        style={{
          padding: 16,
          backgroundColor: "red",
          fontFamily: "Roboto-Regular",
          fontSize: 16,
        }}
        value="accTeasasdxt"
      />
    </InputAccessoryView>
  );
};

export default StickyInput;

const styles = StyleSheet.create({});
