import { useEffect, useState, useContext } from "react";
import { chessBoxes as chessBoxesImport } from "./lib/chessBoxes";
import ChessBox from "./components/ChessBox";
import { intialState } from "./lib";
import UserContext from "@/context/UserContext";

const Chess = () => {
  const [chessBoxes, setChessBoxes] = useState(chessBoxesImport);
  useEffect(() => {
    setChessBoxes([...intialState(chessBoxes)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { session } = useContext(UserContext);

  return (
    <div className="container min-h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center lg:w-1/2 md:w-3/5 sm:w-4/5 w-full sm:mx-auto">
        <div className="flex flex-row w-full gap-5 mb-2 items-center">
          <img src={session?.avatar} className="rounded-full h-[40px]" />
          {session?.name}
        </div>
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
        <div className="flex flex-row w-full gap-5 mt-2 justify-end items-center">
          {session?.name}
          <img src={session?.avatar} className="rounded-full h-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default Chess;
