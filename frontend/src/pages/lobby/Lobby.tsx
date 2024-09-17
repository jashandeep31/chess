import { Link } from "react-router-dom";
import chess from "./assets/chess.png";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Navbar from "../landing/components/Navbar";

function Lobby() {
  return (
    <>
      <Navbar />
      <div className="flex md:flex-row flex-col items-center w-full justify-evenly h-[80vh] ">
        <img src={chess} className="lg:h-[500px] h-[300px]" />
        <div className="flex flex-col gap-2  ">
          <h1 className="md:text-5xl text-3xl">Play Chess Online </h1>
          <Link
            to={`/`}
            className={cn(
              buttonVariants(),
              "bg-gradient-to-r from-green-700 to-cyan-600 font-bold"
            )}
          >
            Play Online
          </Link>
          <div className="flex items-center gap-1 ">
            <input
              type="text"
              placeholder="Enter Custom"
              className="rounded-md p-1.5 w-full text-black"
            />
            <Link
              to={`/`}
              className={cn(
                buttonVariants(),
                "bg-gradient-to-r from-green-700 to-cyan-600 "
              )}
            >
              Enter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lobby;
