import { ScreenE, useNavigation } from "Hooks/useNavigation";
import { Images } from "Images";
import React from "react";
import { StyleSheet, View } from "react-native";

import ButtonIconText from "./ButtonIconText";
import Text from "./Text";

type Props = {
  item: any;
};
const ChapterItem = ({ item }: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderBottomWidth: 0.5,
        paddingVertical: 16,
        borderBottomColor: "#EAEAEA",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 2 / 10 }}>
          <Text color="#B5B5B5" fontSize={14}>
            Ch.21
          </Text>
        </View>
        <View style={{ flex: 8 / 10 }}>
          <Text
            style={{
              fontFamily: "Roboto-Medium",
            }}
          >
            Tên của chương truyện có thể hiển thị mà không giới hạn ký tự
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 16,
        }}
      >
        <View style={{ flex: 2 / 10 }} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 8 / 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ButtonIconText
              textColor="#B5B5B5"
              source={Images.IC_COMMENT}
              text={`${
                item.comment.total - item.comment.unreadComment
              } Bình luận`}
              isShowBadge={!!item.comment.unreadComment}
            />
            {item.comment.unreadComment ? (
              <View
                style={{
                  backgroundColor: "#DA4936",
                  paddingHorizontal: 4,
                  paddingVertical: 4,
                  borderRadius: 24,
                  marginLeft: 8,
                }}
              >
                <Text fontSize={10} isBold color="#ffffff">
                  99+
                </Text>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View>
            <ButtonIconText
              textColor="#528AFF"
              source={Images.IC_PEN}
              text="Chỉnh sửa"
              onPress={() => {
                navigation.changeScreen?.(ScreenE.SCREEN2);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChapterItem;

const styles = StyleSheet.create({});
