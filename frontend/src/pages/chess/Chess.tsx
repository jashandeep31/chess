import { useEffect, useState } from "react";
import { chessBoxes as chessBoxesImport } from "./lib/chessBoxes";
import ChessBox from "./components/ChessBox";
import { intialState } from "./lib";

const Chess = () => {
  const [chessBoxes, setChessBoxes] = useState(chessBoxesImport);
  useEffect(() => {
    setChessBoxes([...intialState(chessBoxes)]);
  }, []);

  const session = {
    name: "jashna",
    avatar: " ",
  };

  return (
    <div className="container min-h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center lg:w-1/2 md:w-3/5 sm:w-4/5 w-full sm:mx-auto">
        <div className=" w-full">user2</div>
        <div className="w-full ">
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
        <div className="w-full">
          <p>{session.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Chess;
// lg:w-1/2 md:w-3/5 sm:w-4/5 w-full sm:mx-auto
