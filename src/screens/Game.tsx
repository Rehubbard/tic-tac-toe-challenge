import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, NavigationScreenProps } from "react-navigation";

import { Text } from "../components";
import globalColors from "../styles/globalColors";
import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  SQUARE_WIDTH,
  SQUARE_HEIGHT
} from "../styles/globalStyles";

type Props = {} & NavigationScreenProps;

class Game extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.board}>
          <View style={[styles.verticalBoardLine, styles.firstVertical]} />
          <View style={[styles.verticalBoardLine, styles.secondVertical]} />
          <View style={styles.square}>
            <Text>X</Text>
          </View>
          <View style={styles.square}>
            <Text>X</Text>
          </View>
          <View style={styles.square}>
            <Text>X</Text>
          </View>
          <View style={styles.boardLine} />
          <View style={styles.square}>
            <Text>X</Text>
          </View>
          <View style={styles.square}>
            <Text>X</Text>
          </View>
          <View style={styles.square}>
            <Text>X</Text>
          </View>
          <View style={styles.boardLine} />
          <View style={styles.square}>
            <Text>X</Text>
          </View>
          <View style={styles.square}>
            <Text>X</Text>
          </View>
          <View style={styles.square}>
            <Text>X</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

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
  boardLine: {
    height: 2,
    width: BOARD_WIDTH,
    backgroundColor: globalColors.black
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
    transform: [{ translateX: (BOARD_WIDTH / 3) * 2 }]
  }
});

export default Game;
