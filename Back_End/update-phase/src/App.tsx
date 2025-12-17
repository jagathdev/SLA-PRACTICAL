import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Intraction from "./pages/Intraction";
import State from "./components/State";
import Day18Task from "./pages/Day18.Task";

const App = () => {
  return (<>
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>


    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intraction" element={<Intraction />} />
        <Route path="/state" element={<State />} />
        <Route path="/day18Task" element={<Day18Task />} />
      </Routes>
    </main>
  </>)
};

export default App;
