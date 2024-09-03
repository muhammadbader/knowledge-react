import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Pizza from "./Pizza";

function App() {
  return (
    <>
      <Navbar />
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
