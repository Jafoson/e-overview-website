import "./index.scss";
import Nav_Bar from "./components/Nav-Bar/Nav-Bar";
import Events_Overview from "./pages/events/Events_Overview";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeContext } from "./contexts/ThemeContext";
import Games from "./pages/games/Games";
import Matches from "./pages/matches/Matches";
import Teams from "./pages/teams/Teams";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext, useEffect } from "react";
import MatchDetail from "./pages/matchDetail/MatchDetail";
import EmailVerify from "./pages/email/EmailVerify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav_Bar />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      { path: "home", element: <Home /> },
      { path: "games", element: <Games /> },
      { path: "matches", element: <Matches /> },
      { path: "matches/:matchID", element: <MatchDetail /> },
      { path: "teams", element: <Teams /> },
      { path: "events", element: <Events_Overview /> },
      { path: "test", element: <Settings /> },
      { path: "test2", element: <Settings /> },
      { path: "dashboard/events", element: <Events_Overview /> },
    ],
  },
  { path: "signin", element: <Login /> },
  { path: "signup", element: <Register /> },
  { path: "auth/mail/verify", element: <EmailVerify /> },
]);

function toggleBackground(theme: string) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
}

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    toggleBackground(theme);
  }, [theme]);

  return <RouterProvider router={router} />;
}

export default App;
