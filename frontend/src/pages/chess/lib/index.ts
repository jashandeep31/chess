import { charToIndex } from "./charToIndex";
import { IChessBox } from "./chessBoxes";
export const intialState = (chessBoxes: IChessBox[][]) => {
  for (const row of chessBoxes) {
    for (const box of row) {
      if (
        (box.col === "a" && box.row === 1) ||
        (box.col === "h" && box.row === 1)
      ) {
        box.piece = "fa-solid fa-chess-rook text-black";
      } else if (
        (box.col === "b" && box.row === 1) ||
        (box.col === "g" && box.row === 1)
      ) {
        box.piece = "fa-solid fa-chess-knight text-black";
      } else if (
        (box.col === "c" && box.row === 1) ||
        (box.col === "f" && box.row === 1)
      ) {
        box.piece = "fa-solid fa-chess-bishop text-black";
      } else if (box.col === "d" && box.row === 1) {
        box.piece = "fa-solid fa-chess-king text-black";
      } else if (box.col === "e" && box.row === 1) {
        box.piece = "fa-solid fa-chess-queen text-black";
      } else if (
        (box.col === "a" && box.row === 8) ||
        (box.col === "h" && box.row === 8)
      ) {
        box.piece = "fa-solid fa-chess-rook text-white";
      } else if (
        (box.col === "b" && box.row === 8) ||
        (box.col === "g" && box.row === 8)
      ) {
        box.piece = "fa-solid fa-chess-knight text-white";
      } else if (
        (box.col === "c" && box.row === 8) ||
        (box.col === "f" && box.row === 8)
      ) {
        box.piece = "fa-solid fa-chess-bishop text-white";
      } else if (box.col === "d" && box.row === 8) {
        box.piece = "fa-solid fa-chess-king text-white";
      } else if (box.col === "e" && box.row === 8) {
        box.piece = "fa-solid fa-chess-queen text-white";
      } else if (box.row === 7) {
        box.piece = "fa-solid fa-chess-pawn text-white";
      } else if (box.row === 2) {
        box.piece = "fa-solid fa-chess-pawn text-black";
      }
    }
  }
  return chessBoxes;
};
/*

pawn  first 2 then 1, 
queen 1 
king all 
bishop diagonal


*/

// function pawanMovesChecker(postion: string) {
//   const row = postion[0];
//   const col = postion[1];
//   const moves = [];
//   if (row === "a") {
//     moves.push(`${String.fromCharCode(row.charCodeAt(0) + 1)}${col}`);
//     moves.push(`${String.fromCharCode(row.charCodeAt(0) + 2)}${col}`);
//   } else {
//     moves.push(`${String.fromCharCode(row.charCodeAt(0) + 1)}${col}`);
//   }
//   return moves;
// }

export class Chess {
  chessBoxes: ChessBox[][];
  constructor() {
    this.chessBoxes = [];
  }
}
export class ChessBox {
  row: number;
  col: string;
  piece: null | Piece;
  constructor(row: number, col: string, piece: null | Piece) {
    this.row = row;
    this.col = col;
    this.piece = piece;
  }
}

class Piece {
  id: string;
  position: string;
  moved: boolean;
  intialPosition: string;
  name: string;
  team: "black" | "white";
  checker: (position: string, moved: boolean) => string[];
  validMoves: string[] = [];
  constructor(
    position: string,
    name: string,
    checker: (position: string, moved: boolean) => string[],
    team: "black" | "white"
  ) {
    this.id = `${name}-${position}`;
    this.position = position;
    this.moved = false;
    this.intialPosition = position;
    this.name = name;
    this.checker = checker;
    this.validMoves = checker(this.position, this.moved);
    this.team = team;
  }
}

function pawanMovesChecker(position: string, moved: boolean) {
  const moves = [];
  if (moved) {
    moves.push(
      `${String.fromCharCode(position.charCodeAt(0))}${position[1] + 1}`
    );
  }
  moves.push(
    ...[
      `${String.fromCharCode(position.charCodeAt(0))}${+position[1] + 1}`,
      `${String.fromCharCode(position.charCodeAt(0))}${+position[1] + 2}`,
    ]
  );
  return moves;
}

export function createStartChess() {
  const chess = new Chess();
  for (let i = 1; i <= 8; i++) {
    const row = [];
    for (const col of ["a", "b", "c", "d", "e", "f", "g", "h"]) {
      row.push(new ChessBox(i, col, null));
    }
    chess.chessBoxes.push([...row]);
  }
  const addingPawns = (team: "black" | "white") => {
    const row = team === "black" ? 2 : 7;
    for (const col of ["a", "b", "c", "d", "e", "f", "g", "h"]) {
      chess.chessBoxes[row - 1][col.charCodeAt(0) - 97].piece = new Piece(
        `${col}${row}`,
        "pawn",
        pawanMovesChecker,
        team
      );
    }
  };

  const addingRooks = (team: "black" | "white") => {
    const row = team === "black" ? 1 : 8;
    for (const col of ["a", "h"]) {
      chess.chessBoxes[row - 1][charToIndex(col)].piece = new Piece(
        `a${row}`,
        "rook",
        (position: string) => {
          const moves = [];
          for (let i = 1; i <= 8; i++) {
            moves.push(`${String.fromCharCode(position.charCodeAt(0))}${i}`);
          }
          return moves;
        },
        team
      );
    }
  };

  const addingKing = (team: "black" | "white") => {
    const row = team === "black" ? 1 : 8;
    for (const col of ["e"]) {
      chess.chessBoxes[row - 1][charToIndex(col)].piece = new Piece(
        `e${row}`,
        "king",
        (position: string) => {
          const moves = [];
          for (let i = 1; i <= 8; i++) {
            moves.push(`${String.fromCharCode(position.charCodeAt(0))}${i}`);
          }
          return moves;
        },
        team
      );
    }
  };

  const addingQueen = (team: "black" | "white") => {
    const row = team === "black" ? 1 : 8;
    for (const col of ["d"]) {
      chess.chessBoxes[row - 1][charToIndex(col)].piece = new Piece(
        `d${row}`,
        "queen",
        (position: string) => {
          const moves = [];
          for (let i = 1; i <= 8; i++) {
            moves.push(`${String.fromCharCode(position.charCodeAt(0))}${i}`);
          }
          return moves;
        },
        team
      );
    }
  };
  const addingBishop = (team: "black" | "white") => {
    const row = team === "black" ? 1 : 8;
    for (const col of ["c", "f"]) {
      chess.chessBoxes[row - 1][charToIndex(col)].piece = new Piece(
        `${col}${row}`,
        "bishop",
        (position: string) => {
          const moves = [];
          for (let i = 1; i <= 8; i++) {
            moves.push(`${String.fromCharCode(position.charCodeAt(0))}${i}`);
          }
          return moves;
        },
        team
      );
    }
  };

  const addingKnight = (team: "black" | "white") => {
    const row = team === "black" ? 1 : 8;
    for (const col of ["b", "g"]) {
      chess.chessBoxes[row - 1][charToIndex(col)].piece = new Piece(
        `${col}${row}`,
        "knight",
        (position: string) => {
          const moves = [];
          for (let i = 1; i <= 8; i++) {
            moves.push(`${String.fromCharCode(position.charCodeAt(0))}${i}`);
          }
          return moves;
        },
        team
      );
    }
  };
  addingKnight("white");
  addingKnight("black");
  addingBishop("black");
  addingBishop("white");
  addingQueen("white");
  addingQueen("black");
  addingKing("black");
  addingKing("white");
  addingPawns("black");
  addingPawns("white");
  addingRooks("black");
  addingRooks("white");
  return chess;
}

createStartChess();
