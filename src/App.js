import "./App.css";
import Navbar from "./componets/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Technologies from "./componets/Technologies";
import Contact from "./componets/Contact";
import Projects from "./componets/Projects";
import Footer from "./componets/Footer";
function App() {
  return (
    <div className="font-body md:max-w-2xl lg:max-w-3xl md:mx-auto mt-7 mx-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/technologies" element={<Technologies />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
