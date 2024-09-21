import { Link } from "react-router-dom";
import { arrow_up } from "../assets";

function CTA() {
  return (
    <>
      <Link
        to={`/login`}
        className=" flex
        w-[150px] 
        h-[50px] 
        rounded-full  
        border-4 border-green-500 
        cursor-pointer 
        items-center justify-center 
        lg:text-xl md:text-sm 
        font-bold 
        p-2"
      >
        Play Now <img src={arrow_up} alt="arrow" />
      </Link>
    </>
  );
}

export default CTA;
