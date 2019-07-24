import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView, NavigationScreenProps } from "react-navigation";

import { Text } from "../components";
import globalColors from "../styles/globalColors";
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  SQUARE_WIDTH,
  SQUARE_HEIGHT
} from "../styles/globalStyles";
import { GlobalContext } from "../context/GlobalContextProvider";

type Props = {} & NavigationScreenProps;

const Game: React.FunctionComponent<Props> = props => {
  const { board, updateBoard } = useContext(GlobalContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.board}>
        <View style={[styles.verticalBoardLine, styles.firstVertical]} />
        <View style={[styles.verticalBoardLine, styles.secondVertical]} />
        <View style={[styles.horizontalBoardLine, styles.firstHorizontal]} />
        <View style={[styles.horizontalBoardLine, styles.secondHorizontal]} />

        {board.map((boardSquare, index) => (
          <TouchableOpacity
            onPress={() => updateBoard(index)}
            style={styles.square}
          >
            {boardSquare !== null && <Text>{boardSquare}</Text>}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  board: {
    height: BOARD_HEIGHT,
    width: BOARD_WIDTH,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  square: {
    width: SQUARE_WIDTH,
    height: SQUARE_HEIGHT,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  },
  horizontalBoardLine: {
    position: "absolute",
    height: 2,
    width: BOARD_WIDTH,
    backgroundColor: globalColors.black
  },
  firstHorizontal: {
    transform: [{ translateY: BOARD_HEIGHT / 3 }]
  },
  secondHorizontal: {
    transform: [{ translateY: (BOARD_HEIGHT / 3) * 2 }] // places the line at two square lengths
  },
  verticalBoardLine: {
    position: "absolute",
    height: BOARD_HEIGHT,
    width: 2,
    backgroundColor: globalColors.black
  },
  firstVertical: {
    transform: [{ translateX: BOARD_WIDTH / 3 }]
  },
  secondVertical: {
    transform: [{ translateX: (BOARD_WIDTH / 3) * 2 }] // places the line at two square lengths
  }
});

export default Game;
