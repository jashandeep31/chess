import { chess, menu } from "../assets";
import { navLinks, dropLinks } from "../constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import UserContext from "@/context/UserContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  const { session } = useContext(UserContext);

  return (
    <>
      <nav className="container w-full p-4 flex items-center justify-between ">
        <Link
          to={`/`}
          className="flex items-center text-xl gap-2 cursor-pointer"
        >
          <img src={chess} alt="Logo" className="h-6  " />
          <h1 className="font-semibold ">Chess</h1>
        </Link>

        {/* for the desktop */}

        {!session && (
          <div className=" md:flex hidden">
            <ul className="flex gap-20 dark:text-teal-100  font-bold">
              {navLinks.map((nav) => (
                <li key={nav.tag}>
                  <Link to={nav.link}>{nav.tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img
                src={session.avatar}
                alt="menu"
                className="h-10 object-contain cursor-pointer rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {dropLinks.map((drop) => (
                <DropdownMenuItem key={drop.tag}>
                  <Link to={drop.link}>{drop.tag}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem>
                <a href="http://localhost:8000/api/v1/auth/logout">Logout</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div>
            {/* for the desktop */}
            <div className="md:flex hidden">
              <Link
                to={`/login`}
                className={cn(
                  buttonVariants(),
                  "bg-gradient-to-r from-green-900 to-green-500 font-bold"
                )}
              >
                Login
              </Link>
            </div>

            {/* for the small screens */}
            <div className="md:hidden flex flex-col justify-end item-center ">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <img
                    src={menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {navLinks.map((nav) => (
                    <DropdownMenuItem key={nav.tag}>
                      <Link to={nav.link}>{nav.tag}</Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem>
                    <Link to={`/login`}>Login</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
