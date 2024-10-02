import chess from "./assets/chess.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Navbar from "../landing/components/Navbar";
import { useContext, useState } from "react";
import UserContext from "@/context/UserContext";
import useSocket from "@/hooks/useSocket";

function Lobby() {
  const { session } = useContext(UserContext);
  const [gameIdInput, setGameIdInput] = useState<string>("");
  const { socketHandler } = useSocket();

  if (!session) return <div>loading...</div>;
  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col items-center w-full justify-evenly h-[80vh] ">
        <img src={chess} className="lg:h-[500px] h-[300px]" />
        <div className="flex flex-col gap-2  ">
          <h1 className="md:text-5xl text-3xl">Play Chess Online </h1>
          <button
            onClick={() => {
              socketHandler?.newGame();
            }}
            className={cn(
              buttonVariants(),
              "bg-gradient-to-r from-green-700 to-cyan-600 font-bold"
            )}
          >
            Play Online
          </button>
          <div className="flex items-center gap-1 ">
            <input
              onChange={(e) => {
                setGameIdInput(e.target.value);
              }}
              value={gameIdInput}
              type="text"
              placeholder="Enter Custom"
              className="rounded-md p-1.5 w-full text-black"
            />
            <button
              onClick={() => {
                socketHandler?.joinGame(gameIdInput);
              }}
              className={cn(
                buttonVariants(),
                "bg-gradient-to-r from-green-700 to-cyan-600 "
              )}
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lobby;
