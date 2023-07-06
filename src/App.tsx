import "./App.scss";
import Nav_Bar from "./components/Nav-Bar/Nav-Bar";
import Events_Overview from "./pages/events/Events_Overview";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Events_Overview />}
          children={[<Route path="/home" element={<Home />}></Route>]}
        />
      </Routes>
    </>
  );
}

export default App;
