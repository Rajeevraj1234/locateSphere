import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./assets/Pages/Landing";
import Navbar from "./assets/mini-components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
