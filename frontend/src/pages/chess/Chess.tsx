import { useEffect, useState } from "react";
import { chessBoxes as chessBoxesImport } from "./lib/chessBoxes";
import ChessBox from "./components/ChessBox";
import { intialState } from "./lib";

const Chess = () => {
  const [chessBoxes, setChessBoxes] = useState(chessBoxesImport);
  useEffect(() => {
    setChessBoxes([...intialState(chessBoxes)]);
  }, []);

  return (
    <div className="lg:w-1/2 md:w-3/5 sm:w-4/5 w-full sm:mx-auto ">
      {[...chessBoxes].reverse().map((row, parentIndex) => {
        return (
          <div className="grid grid-cols-8 " key={parentIndex}>
            {row.map((col, index) => (
              <ChessBox
                key={index}
                parentIndex={parentIndex}
                index={index}
                col={col}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Chess;
