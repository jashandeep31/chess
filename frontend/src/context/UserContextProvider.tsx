import UserContext from "./UserContext";
import { useState, useEffect } from "react";
import axios from "axios";

const UserContextProvider = ({ children }) => {
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
    <UserContext.Provider value={{ session, setSession }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
