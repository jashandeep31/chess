import { mobilechess } from "../assets";
import CTA from "./CTA";

function hero() {
  return (
    <>
      <section className="container md:flex justify-between ">
        {/* first half */}
        <div className="flex flex-col justify-center md:items-start items-center w-full">
          <h4 className="bg-gradient-to-r from-green-950 via-green-800 to-green-750 p-2 rounded-xl">
            Welcome to Checkmate Central
          </h4>
          <div className="flex items-center justify-center mt-10 ">
            <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold md:text-start text-center">
              Join The <span className="text-green-gradient">Ultimate</span>
            </h1>
          </div>
          <h1 className="lg:text-7xl text-4xl font-bold mt-2 md:text-start text-center">
            Chess Experience.
          </h1>
          <div className="mt-3">
            <CTA />
          </div>
          <p className="mt-3 md:text-start text-center">
            Play, Learn and Connect with Chess Enthusiasts Worldwide.
          </p>
        </div>

        {/* second half */}
        <div className="flex relative w-full md:mt-0 mt-5 mb-20 pointer-events-none ">
          <img src={mobilechess} alt="mobilechess" className="z-[5] relative" />

          {/* gradient start / background lighting */}
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 green__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </section>
    </>
  );
}

export default hero;
