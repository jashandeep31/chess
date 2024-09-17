import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import LoginPage from "./pages/login/Login";
import Chess from "./pages/chess/Chess";
import Landing from "./pages/landing/Landing";
import UserContextProvider from "./context/UserContextProvider";
import Lobby from "./pages/lobby/Lobby";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/lobby",
    element: <Lobby />,
  },
  {
    path: "/lobby/:id",
    element: <Chess />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
