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
    <div className="container ">
      <div className="mt-12">
        <h1 className="text-lg font-bold ">Chess</h1>
        <div className="w-1/2 mx-auto">
          {[...chessBoxes].reverse().map((row, parentIndex) => {
            return (
              <div className="grid grid-cols-8" key={parentIndex}>
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
      </div>
    </div>
  );
};

export default Chess;
