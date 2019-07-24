import React from "react";

export const GlobalContext = React.createContext<GlobalContextType>(
  {} as GlobalContextType
);

export type GlobalContextType = {
  board: Array<null | "X" | "O">;
  turn: number;
  players: any[];
  playersTurn: "X" | "O";
  ended: boolean;
  winner: "X" | "O" | null;
  previousWinner: "X" | "O";
  updateBoard: (boardPosition: number) => void;
  resetBoard: () => void;
};

type Props = {};

const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];

class GlobalContextProvider extends React.Component<Props, GlobalContextType> {
  updateBoard = (newBoardPosition: number) => {
    if (this.state.board[newBoardPosition] !== null) return; // not a valid play

    const currentPlayer = this.state.players[this.state.turn % 2];
    const newBoard = this.state.board.map((value, index) => {
      if (index === newBoardPosition) {
        if (value !== null) return value; // player has already played here. skip

        // valid play
        return currentPlayer;
      }
      return value;
    });
    const weHaveAWinner = winningCombinations
      .filter(combination => combination.includes(newBoardPosition))
      .some(combination =>
        combination.every(
          winningPosition => newBoard[winningPosition] === currentPlayer // check if currentPlayer has a mark in a winning combination
        )
      );

    this.setState(state => ({
      board: newBoard,
      turn: state.turn + 1,
      playersTurn: state.playersTurn === "X" ? "O" : "X",
      ended: weHaveAWinner
        ? true
        : newBoard.every(boardValue => boardValue !== null), // if no null value is left, all squares have been taken. game over
      winner: weHaveAWinner ? currentPlayer : null,
      previousWinner: weHaveAWinner ? currentPlayer : state.previousWinner
    }));
  };

  resetBoard = () => {
    // whoever won gets to go first next game
    // if it was a tie, the last winner goes first
    const winnerWhoGoesFirst =
      this.state.winner !== null
        ? this.state.winner
        : this.state.previousWinner;
    const players = winnerWhoGoesFirst === "O" ? ["O", "X"] : ["X", "O"];
    this.setState({
      players,
      playersTurn: winnerWhoGoesFirst,
      board: [null, null, null, null, null, null, null, null, null],
      turn: 0,
      ended: false,
      winner: null,
      updateBoard: this.updateBoard
    });
  };

  state: GlobalContextType = {
    players: ["X", "O"],
    playersTurn: "X",
    board: [null, null, null, null, null, null, null, null, null],
    turn: 0,
    ended: false,
    winner: null,
    previousWinner: "X", // since X is default first, the they are default previous winner for ties
    updateBoard: this.updateBoard,
    resetBoard: this.resetBoard
  };
  render() {
    console.log("GlobalContext: ", this.state);
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;