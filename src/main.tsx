import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Nav_Bar from "./components/Nav-Bar/Nav-Bar.tsx";
import Events_Overview from "./pages/events/Events_Overview.tsx";
import Home from "./pages/home/Home.tsx";
import Games from "./pages/games/Games.tsx";
import Matches from "./pages/matches/Matches.tsx";
import Teams from "./pages/teams/Teams.tsx";
import Settings from "./pages/settings/Settings.tsx";
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav_Bar />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "games", element: <Games /> },
      { path: "matches", element: <Matches /> },
      { path: "teams", element: <Teams /> },
      { path: "events", element: <Events_Overview /> },
      { path: "test", element: <Settings /> },
      { path: "test2", element: <Settings /> },
      { path: "dashboard/events", element: <Events_Overview /> },
    ],
  },
  { path: "/signin", element: <Login /> },
  { path: "signup", element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
