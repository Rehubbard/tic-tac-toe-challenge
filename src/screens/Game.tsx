import React, { useContext } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView, NavigationScreenProps } from "react-navigation";

import { Text, GameSquare } from "../components";
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
  const {
    board,
    playersTurn,
    ended,
    winner,
    updateBoard,
    resetBoard
  } = useContext(GlobalContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statusContainer}>
        {ended ? (
          <React.Fragment>
            <Text style={styles.winner} type="bold">
              {winner !== null ? `${winner}'s won!` : `It's a tie!`}
            </Text>
            <TouchableOpacity
              onPress={resetBoard}
              style={styles.playAgainButton}
            >
              <Text style={styles.playAgainButtonText} type="bold">
                Play Again
              </Text>
            </TouchableOpacity>
            <Text style={styles.winnerDescription}>
              {winner !== null
                ? `${winner}'s go first next game`
                : "The last player that won goes first. If nobody has won, X's go first 😊"}
            </Text>
          </React.Fragment>
        ) : (
          <Text style={styles.playersTurn} type="bold">
            {playersTurn}'s turn
          </Text>
        )}
      </View>
      <View style={styles.boardContainer}>
        <View style={styles.board}>
          <View style={[styles.verticalBoardLine, styles.firstVertical]} />
          <View style={[styles.verticalBoardLine, styles.secondVertical]} />
          <View style={[styles.horizontalBoardLine, styles.firstHorizontal]} />
          <View style={[styles.horizontalBoardLine, styles.secondHorizontal]} />

          {board.map((squareValue, index) => (
            <GameSquare
              onPress={() => updateBoard(index)}
              squareValue={squareValue}
              key={index}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  statusContainer: {
    marginTop: 25,
    height: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  playersTurn: {
    fontSize: 34,
    color: globalColors.black
  },
  winner: {
    fontSize: 34,
    color: globalColors.black
  },
  playAgainButton: {
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: globalColors.green,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: 225,
    alignItems: "center"
  },
  playAgainButtonText: {
    color: globalColors.white,
    fontSize: 16
  },
  winnerDescription: {
    fontSize: 12,
    paddingHorizontal: 35,
    color: globalColors.grey
  },
  boardContainer: {
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
