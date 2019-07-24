import React from "react";
import { Text as RNText, TextProps, StyleSheet } from "react-native";

type Props = {
  type?: "regular" | "bold" | "medium" | "light";
  style?: Object;
} & TextProps;

const Text: React.FunctionComponent<Props> = ({
  type = "regular",
  style,
  ...restProps
}: Props) => (
  <RNText style={[styles.baseStyles, styles[type], style]} {...restProps} />
);

const styles = StyleSheet.create({
  baseStyles: {
    color: "black",
    fontSize: 14
  },
  regular: {
    fontFamily: "Roboto"
  },
  light: {
    fontFamily: "Roboto Light"
  },
  bold: {
    fontFamily: "Roboto-Bold"
  },
  medium: {
    fontFamily: "Roboto Medium"
  }
});

export default Text;
