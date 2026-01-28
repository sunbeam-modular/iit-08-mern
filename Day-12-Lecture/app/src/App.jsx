import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Register from "./pages/Registration";
import Login from "./pages/Login";

import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>

    <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />



      </Routes>

    <ToastContainer />

    </BrowserRouter>
  );
}

export default App;
