import { useParams } from "react-router-dom";
import { createStartChess } from "./lib";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import useSocket from "@/hooks/useSocket";
import ChessBox from "./components/ChessBox";

const Chess = () => {
  const chess = createStartChess();
  // const { id } = useParams<{ id: string }>();
  // const { session } = useContext(UserContext);
  // const { game, socketHandler } = useSocket();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/3">
        {[...chess.chessBoxes].reverse().map((row, parentIndex) => {
          return (
            <div className="grid grid-cols-8 " key={parentIndex}>
              {row.map((box, index) => (
                <ChessBox key={index} box={box} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chess;
