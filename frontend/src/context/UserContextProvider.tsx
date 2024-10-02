import UserContext, { IUserContext } from "./UserContext";
import { useState, useEffect } from "react";
import axios from "axios";

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<IUserContext["session"]>(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:8000/api/v1/users/profile",
        {
          withCredentials: true,
        }
      );
      setSession(response.data.session);
    })();
  }, []);
  return (
    <UserContext.Provider value={{ session, setSession }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
