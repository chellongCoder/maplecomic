import CardComicInfo from "Components/CardComicInfo";
import ChapterItem from "Components/ChapterItem";
import Footer from "Components/Footer";
import Header from "Components/Header";
import { ScreenE, useNavigation } from "Hooks/useNavigation";
import { AwesomeButton } from "Hooks/withGradient";
import { Images } from "Images";
import { chapters } from "data";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";

const Screen1 = () => {
  const pan = React.useRef(new Animated.ValueXY()).current;
  const [isShowEdit, setIsShowEdit] = useState(false);
  const navigation = useNavigation();
  const startHeaderHeight = 250; //(ITEM_HEIGHT/4)
  const endHeaderHeight = 100; //(ITEM_HEIGHT/7)
  const HEADER_SCROLL_DISTANCE = startHeaderHeight - endHeaderHeight;
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
          outputRange: [1.2, 1],
        }),
      },
    ],
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Animated.Image
        source={require("./../assets/cover.png")}
        resizeMode="cover"
        style={[
          {
            transform: [
              {
                scale: pan.y.interpolate({
                  inputRange: [-3000, 0],
                  outputRange: [20, 1],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
          {
            width: "100%",
            height: pan.y.interpolate({
              inputRange: [0, HEADER_SCROLL_DISTANCE],
              outputRange: [startHeaderHeight, HEADER_SCROLL_DISTANCE],
              extrapolate: "clamp",
            }),
          },
        ]}
      />

      <Animated.View
        style={{
          transform: [
            {
              scale: pan.y.interpolate({
                inputRange: [-3000, 0],
                outputRange: [20, 1],
                extrapolate: "clamp",
              }),
            },
          ],
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          width: Dimensions.get("screen").width,
          height: pan.y.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [startHeaderHeight, HEADER_SCROLL_DISTANCE],
            extrapolate: "clamp",
          }),
          zIndex: 999,
          position: "absolute",
        }}
      />

      <Header />
      <CardComicInfo
        onPressButton={() => {
          setIsShowEdit(true);
          Animated.timing(_visibility, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }).start(() => {});
        }}
      />
      <ScrollView
        keyboardDismissMode="interactive"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: pan.y } } }],
          {
            useNativeDriver: false,
          },
        )}
        onTouchStart={() => {
          Animated.timing(_visibility, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
          }).start(() => {
            setIsShowEdit(false);
          });
        }}
        style={{ flex: 1, backgroundColor: "#ffffff" }}
      >
        <AwesomeButton
          backgroundColor="#F0F0F0"
          width="92%"
          height={40}
          borderRadius={8}
          text="Chỉnh sửa mô tả"
          textColor="#528AFF"
          alignSelf="center"
          source={Images.IC_PEN}
          marginTop={16}
          marginBottom={24}
          onPress={() => {
            navigation.changeScreen?.(ScreenE.SCREEN2);
          }}
        />
        <FlatList
          scrollEnabled={false}
          data={chapters}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 16 }}>
              <ChapterItem item={item} />
            </View>
          )}
          ListFooterComponent={
            <View
              style={{
                paddingBottom: 90,
              }}
            />
          }
        />
      </ScrollView>
      <Footer />
      {isShowEdit && (
        <KeyboardAccessoryView
          heightProperty="height"
          alwaysVisible
          androidAdjustResize
          bumperHeight={50}
          animateOn="all"
          onKeyboardShowDelay={false}
          style={{
            backgroundColor: "#ffffff",
            marginBottom: Platform.OS === "android" ? 0 : 20,
          }}
          hideBorder
          inSafeAreaView
        >
          <Animated.View
            style={[
              containerStyle,
              {
                borderTopWidth: 1,
                borderColor: "#D3C6F8",
                paddingVertical: 20,
                backgroundColor: "#ffffff",
                paddingLeft: 10,
              },
            ]}
          >
            <TextInput
              autoFocus
              focusable
              style={{
                backgroundColor: "#ffffff",
                fontFamily: "Roboto-Regular",
                fontSize: 16,
              }}
              placeholder="Mô tả"
            />
          </Animated.View>
        </KeyboardAccessoryView>
      )}
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
