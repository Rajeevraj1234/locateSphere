import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./assets/Pages/Landing";
import Navbar from "./assets/mini-components/Navbar";
import Signin from "./assets/components/Signin";
import Signup from "./assets/components/Signup";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
