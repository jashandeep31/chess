import { createContext } from "react";

export interface IUserContext {
  session: null | {
    name: string;
    email: string;
    avatar: string;
  };
  setSession: React.Dispatch<React.SetStateAction<IUserContext["session"]>>;
}

const UserContext = createContext<IUserContext>({
  session: null,
  setSession: () => {},
});

export default UserContext;
