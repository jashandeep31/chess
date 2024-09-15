import { cn } from "@/lib/utils";
import chess from "../assets/chess.svg";
import navLinks from "../constants";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [session, setSession] = useState<any>();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/profile",
        {
          withCredentials: true,
        }
      );
      console.log(response.data.session);
      setSession(response.data.session);
    })();
  }, []);
  return (
    <>
      <nav className="w-full   p-4 flex items-center justify-around">
        <Link
          to={`/`}
          className="flex items-center text-xl gap-2 cursor-pointer"
        >
          <img src={chess} alt="Logo" className="h-6  " />
          <h1 className="font-semibold ">Chess</h1>
        </Link>

        <ul className="flex gap-20 dark:text-teal-100  font-bold">
          {navLinks.map((nav) => (
            <li key={nav.tag}>
              <Link to={nav.link}>{nav.tag}</Link>
            </li>
          ))}
        </ul>

        {session ? (
          <div>
            <img src={session.avatar} className="h-10 rounded-full" />
          </div>
        ) : (
          <div>
            <Link
              to={`/login`}
              className={cn(
                buttonVariants(),
                "bg-gradient-to-r from-indigo-700 to-purple-600"
              )}
            >
              login
            </Link>
          </div>
        )}
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
