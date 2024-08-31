import { cn } from "@/lib/utils";
import { IChessBox } from "../lib/chessBoxes";

const ChessBox = ({
  col,
  index,
  parentIndex,
}: {
  col: IChessBox;
  index: number;
  parentIndex: number;
}) => {
  return (
    <div
      className={` aspect-square  flex items-center justify-center border ${
        index % 2 !== 0 && parentIndex % 2 !== 0
          ? "bg-[#ebeccf]"
          : ""
      } 
      ${
        index % 2 === 0 && parentIndex % 2 === 0
          ? "bg-[#ebeccf]"
          : ""
      } 
      ${
        index % 2 === 0 && parentIndex % 2 !== 0
          ? "bg-green-500"
          : ""
      } 
      ${
        index % 2 !== 0 && parentIndex % 2 === 0
          ? "bg-green-500"
          : ""
      } 
           `}
    >
      {col.piece ? <i className={cn(col.piece, "text-3xl ")}></i> : null}
    </div>
  );
};

export default ChessBox;
