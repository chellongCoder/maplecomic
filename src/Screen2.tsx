import CircleIconButton from "Components/CircleIconButton";
import Text from "Components/Text";
import { ScreenE, useNavigation } from "Hooks/useNavigation";
import { AwesomeButton } from "Hooks/withGradient";
import { Images } from "Images";
import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const Screen2 = () => {
  const navigation = useNavigation();
  const [isPublic, setIsPublic] = useState(false);
  const name = useRef("");
  const description = useRef("");

  return (
    <SafeAreaView
      style={{ flex: 1, marginTop: 10, backgroundColor: "#ffffff" }}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CircleIconButton
              onPress={() => {
                navigation.changeScreen?.(ScreenE.SCREEN1);
              }}
              size={32}
              backgroundColor="rgba(255,255,255,0.5)"
              source={Images.IC_BACK}
              style={{ borderWidth: 1, borderColor: "#E0E0E0" }}
            />
            <Text style={{ marginLeft: 8 }} isBold fontSize={16}>
              Viết mô tả truyện
            </Text>
          </View>
          <View>
            <AwesomeButton
              backgroundColor="#DB70D7"
              width={100}
              height={40}
              borderRadius={24}
              text="Xuất bản"
              textColor="#4920BC"
              alignSelf="center"
              marginTop={16}
              marginBottom={24}
              onPress={() => {
                navigation.changeScreen?.(ScreenE.SCREEN2);
              }}
              disabled={!isPublic}
              opacity={isPublic ? 0.8 : 0.3}
            />
          </View>
        </View>

        <View style={{ marginHorizontal: 16 }}>
          <TextInput
            focusable
            autoFocus
            style={{
              fontFamily: "Roboto-Regular",
              fontSize: 14,
            }}
            placeholder="Tên của truyện mới đã tạo"
            onChangeText={(t) => {
              name.current = t;
              if (name.current && description.current) {
                setIsPublic(true);
              } else {
                setIsPublic(false);
              }
            }}
          />
          <View style={{ marginTop: 20 }} />
          <ScrollView>
            <TextInput
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: 16,
                textAlignVertical: "top",
              }}
              multiline
              scrollEnabled={false}
              placeholder="Giới thiệu về tác phẩm mới của bạn "
              onChangeText={(t) => {
                description.current = t;
                if (name.current && description.current) {
                  setIsPublic(true);
                } else {
                  setIsPublic(false);
                }
              }}
            />
            <View style={{ height: 200 }} />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
