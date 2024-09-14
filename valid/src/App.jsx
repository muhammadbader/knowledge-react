import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
