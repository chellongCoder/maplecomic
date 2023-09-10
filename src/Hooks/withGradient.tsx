import ButtonIconText from "Components/ButtonIconText";
import CircleIconButton from "Components/CircleIconButton";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageSourcePropType,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type Props = {
  source: ImageSourcePropType;
  text: string;
  textColor: string;
  isGradient: boolean;
  disabled: boolean;
  onPress: () => void;
} & ViewStyle;
export const withGradient = (WrappedComponent: JSX.ElementType) =>
  class NewComponent extends React.Component<Partial<Props>> {
    render() {
      return this.props.isGradient ? (
        <TouchableOpacity
          disabled={this.props.disabled}
          onPress={this.props.onPress}
        >
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: -1, y: 0 }}
            style={{
              height: this.props.height,
              width: this.props.width,
              justifyContent: "center",
              borderRadius: 8,
            }}
            colors={["#DA70D6", "#5245EE"]}
          >
            <ButtonIconText
              textColor={this.props.textColor}
              text={this.props.text}
              source={this.props.source}
            />
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={this.props.onPress}
          disabled={this.props.disabled}
          style={{
            height: this.props.height,
            width: this.props.width,
            borderRadius: this.props.borderRadius,
            backgroundColor: this.props.backgroundColor,
            justifyContent: "center",
            ...this.props,
          }}
        >
          <ButtonIconText
            textColor={this.props.textColor}
            text={this.props.text}
            source={this.props.source}
          />
        </TouchableOpacity>
      );
    }
  };
export const AwesomeButton = withGradient(CircleIconButton);
