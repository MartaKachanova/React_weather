import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import List from "./components/List";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <div className="wrapper">
        <header>
          <div className="title">ПРОГНОЗ ПОГОДИ</div>
        </header>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route index element={<List />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
