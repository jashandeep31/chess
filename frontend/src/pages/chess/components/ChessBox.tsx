import { ChessBox as IChessBox } from "../lib";
import { charToIndex } from "../lib/charToIndex";

const ChessBox = ({ box }: { box: IChessBox }) => {
  return (
    <div
      className={`aspect-square border flex justify-center items-center  relative ${
        charToIndex(box.col) % 2 !== 0 && box.row % 2 !== 0
          ? "bg-[#ebeccf]"
          : ""
      }
      ${
        charToIndex(box.col) % 2 === 0 && box.row % 2 === 0
          ? "bg-[#ebeccf]"
          : ""
      }
      ${
        charToIndex(box.col) % 2 === 0 && box.row % 2 !== 0
          ? "bg-green-500"
          : ""
      }
      ${
        charToIndex(box.col) % 2 !== 0 && box.row % 2 === 0
          ? "bg-green-500"
          : ""
      }
           `}
    >
      {box.piece && (
        <i
          className={`fa-solid fa-chess-${box.piece.name} text-4xl text-${box.piece.team} `}
        ></i>
      )}
      <span className="text-sm absolute bottom-0 left-0">
        {box.col},{box.row}
      </span>
    </div>
  );
};

export default ChessBox;
