import { useContext, useEffect } from "react";
import { Navbar, Hero, Features, Footer } from "./components";
import UserContext from "@/context/UserContext";
import { useNavigate } from "react-router-dom";

function Landing() {
  const { session } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (session) {
      navigate("/lobby");
    }
  }, [session, navigate]);
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default Landing;
