import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import globalColors from "../styles/globalColors";
import { SQUARE_WIDTH, SQUARE_HEIGHT } from "../styles/globalStyles";

type Props = {
  squareValue: "X" | "O" | null;
  onPress: () => void;
};

const GameSquare: React.FunctionComponent<Props> = ({
  onPress,
  squareValue
}) => (
  <TouchableOpacity onPress={onPress} style={styles.square}>
    {squareValue !== null && (
      <Icon
        name={squareValue === "X" ? "times" : "circle-o"}
        color={globalColors.green}
        size={46}
      />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  square: {
    width: SQUARE_WIDTH,
    height: SQUARE_HEIGHT,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});

export default GameSquare;
