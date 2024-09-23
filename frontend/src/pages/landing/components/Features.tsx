import { learn, play } from "../assets";
import CTA from "./CTA";
import { features } from "../constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Features() {
  return (
    <>
      <section id="features" className="container">
        {/* features for large screens*/}

        <div className="md:contents hidden">
          {/* Learn Chess */}

          <div className="md:flex items-center justify-between w-full my-20">
            <div className="w-full pointer-events-none flex md:justify-start justify-center relative ">
              <img src={learn} alt="learn" className="relative z-[5]" />
              <div className="absolute z-[0] -left-1/2 top-0 w-[60%] h-[60%] rounded-full blue__gradient" />
            </div>
            <div className="w-full md:text-left text-center">
              <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold">
                <span className="text-green-gradient">Learn</span> Chess
              </h1>
              <p className="text-xl mt-5 text-justify">
                Chess is more than just a game; it’s a timeless exercise in
                strategy and critical thinking that has captivated players for
                centuries. Each move invites you to think several steps ahead,
                challenging you to anticipate your opponent’s tactics while
                formulating your own plans.
              </p>
            </div>
          </div>

          {/* Play Online */}

          <div className=" md:flex items-center justify-between w-full my-20 relative">
            <div className="w-full flex flex-col md:items-start items-center md:text-left  text-center">
              <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold">
                <span className="text-green-gradient">Play</span> Online
              </h1>
              <p className="text-xl my-5 text-justify">
                “Challenge opponents and friends from around the globe in
                thrilling matches that test your skills and strategy. Experience
                the excitement of competing against players from diverse
                backgrounds while teaming up with your friends for unforgettable
                gameplay!”
              </p>
              <CTA />
            </div>
            <div className="w-full pointer-events-none flex md:justify-end justify-center relative ">
              <img src={play} alt="learn" className="relative z-[5]" />
              <div className="absolute z-[0] left-1 top-0 w-[60%] h-[60%] rounded-full blue__gradient" />
            </div>
          </div>
        </div>

        {/* for small screens */}
        <div className="container  md:hidden contents">
          <Carousel className="mb-10">
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem>
                  <Card key={feature.heading} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-center text-green-gradient text-2xl">
                        {feature.heading}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center items-center">
                      <img
                        src={feature.image}
                        alt={feature.image}
                        className="h-[300px] w-[300px]"
                      />
                      <p className="text-justify">{feature.about}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default Features;
