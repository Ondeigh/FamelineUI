import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LuvaStart from "./components/LuvaStart";
import HomePage from "./components/HomePage";
import LuvaLocation from "./components/LuvaLocation";
import LuvaContext from "./components/LuvaContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/luva-start" element={<LuvaStart />} />
          <Route path="/luva-location" element={<LuvaLocation />} />
          <Route path="/luva-context" element={<LuvaContext />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
