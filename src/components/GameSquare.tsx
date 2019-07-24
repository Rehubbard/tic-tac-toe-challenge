import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import globalColors from "../styles/globalColors";
import { SQUARE_WIDTH, SQUARE_HEIGHT } from "../styles/globalStyles";
import { GlobalContext } from "../context/GlobalContextProvider";

type Props = {
  squareValue: "X" | "O" | null;
  squarePosition: number;
  onPress: () => void;
};

const GameSquare: React.FunctionComponent<Props> = ({
  onPress,
  squareValue,
  squarePosition
}) => {
  const { ended, winningCombination } = useContext(GlobalContext);
  const squareIsAWinner =
    winningCombination !== null && winningCombination.includes(squarePosition);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.square, squareIsAWinner && styles.winningSquare]}
      disabled={ended}
    >
      {squareValue !== null && (
        <Icon
          name={squareValue === "X" ? "times" : "circle-o"}
          color={globalColors.green}
          size={46}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: SQUARE_WIDTH,
    height: SQUARE_HEIGHT,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  winningSquare: {
    backgroundColor: globalColors.lightestGreen
  }
});

export default GameSquare;
