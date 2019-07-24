import React from "react";

export const GlobalContext = React.createContext<GlobalContextType>(
  {} as GlobalContextType
);

export type GlobalContextType = {
  board: Array<null | "X" | "O">;
  turn: number;
  players: any[];
  updateBoard: (boardPosition: number) => void;
};

type Props = {};

class GlobalContextProvider extends React.Component<Props, GlobalContextType> {
  updateBoard = (boardPosition: number) => {
    this.setState(state => ({
      board: state.board.map((value, index) => {
        if (index !== boardPosition) return value;

        // figure out what player to add to this board position
        const currentPlayer = state.players[state.turn % 2];
        return currentPlayer;
      }),
      turn: state.turn + 1
    }));
  };

  state: GlobalContextType = {
    players: ["X", "O"],
    board: [null, null, null, null, null, null, null, null, null],
    turn: 0,
    updateBoard: this.updateBoard
  };
  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;
