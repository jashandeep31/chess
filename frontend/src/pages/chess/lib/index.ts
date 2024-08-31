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
