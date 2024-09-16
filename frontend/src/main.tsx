import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/styles/index.css";
import LoginPage from "./pages/login/Login";
import Chess from "./pages/chess/Chess";
import Landing from "./pages/landing/Landing";
import UserContextProvider from "./context/UserContextProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/chess",
    element: (
      <div className="container">
        <h1>Play game</h1>
      </div>
    ),
  },
  {
    path: "/chess/:id",
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
