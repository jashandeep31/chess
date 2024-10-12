import { useContext } from "react";
import { Footer, Navbar } from "../landing/components";
import UserContext from "@/context/UserContext";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Profile() {
  const { session } = useContext(UserContext);

  if (!session) return <div>loading...</div>;
  return (
    <section className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="container rounded-lg h-4/5 bg-accent md:text-2xl text-xl">
        <h1 className=" text-4xl font-bold mt-2  text-center ">
          <u>Profile</u>
        </h1>
        <div className="md:my-20 my-5 md:flex gap-5  md:items-start items-center justify-start ">
          <div className="w-full flex justify-center">
            <img
              src={session.avatar}
              alt=""
              className="mb-4 rounded-xl md:h-[300px] h-[150px] md:w-[300px] w-[150px] "
            />
          </div>

          <div className="flex flex-col w-full md:justify-start md:items-start items-center">
            <label htmlFor="Name" className="font-bold">
              Name :{" "}
            </label>
            <span> {session.name}</span>
            <label htmlFor="Email" className="font-bold mt-4">
              Email :{" "}
            </label>
            <span> {session.email}</span>
            <Link
              to="http://localhost:8000/api/v1/auth/logout"
              className={cn(
                buttonVariants(),
                "bg-gradient-to-r from-green-900 to-green-500 font-bold mt-8"
              )}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
