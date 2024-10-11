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
      <hr />
      <section className="container md:flex justify-between mt-20 ">
        {/* first half */}
        <div className="flex flex-col justify-center md:items-start items-center w-full relative z-[5]">
          <div className="flex items-center justify-center ">
            <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold md:text-start text-center">
              Welcome to
              <span className="text-green-gradient"> Chess World!</span>
            </h1>
          </div>

          <p className="my-3 md:text-start text-center">
            Play, Learn and Connect with Chess Enthusiasts Worldwide.
          </p>
          <button
            onClick={() => {
              socketHandler?.newGame();
            }}
            className={cn(
              buttonVariants(),
              "bg-gradient-to-r from-green-700 to-cyan-600 font-bold font-lg"
            )}
          >
            Play Online
          </button>

          <div className="absolute z-[-1] -left-1/2 top-0 w-[60%] h-[60%] rounded-full blue__gradient" />
        </div>

        {/* second half */}
        <div className="flex justify-center relative w-full pointer-events-none ">
          <img
            src={chess}
            alt="chess"
            className="z-[5] relative md:h-min h-[300px] m-10 border-4 border-zinc-900 "
          />

          {/* gradient start / background lighting */}
          <div className="absolute z-[0] w-[50%] h-[35%] bottom-0 green__gradient" />
          <div className="absolute z-[1] w-[40%] h-[40%] rounded-full bottom-40 white__gradient" />
        </div>
      </section>

      <div className="container my-20 ">
        <h1 className="g:text-7xl md:text-6xl text-4xl font-bold text-center mb-10">
          <span className="text-green-gradient">Join </span> Custom
        </h1>
        <div className="flex items-center gap-1 ">
          <input
            onChange={(e) => {
              setGameIdInput(e.target.value);
            }}
            value={gameIdInput}
            type="text"
            placeholder="Enter Custom"
            className="rounded-md p-1.5 w-full text-black border-2"
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
    </>
  );
}

export default Lobby;
