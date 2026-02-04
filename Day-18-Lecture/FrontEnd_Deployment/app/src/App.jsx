import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Register from "./pages/Registration";
import Login from "./pages/Login";

import { ToastContainer } from "react-toastify";
import Profile from "./pages/Profile";
import { createContext, useState } from "react";

export const LoginContext = createContext();

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ loginStatus, setLoginStatus }}>
      {loginStatus && <Navbar />}

        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route path="/home" element={loginStatus ? <Home /> : <Navigate to="/" />} />
          <Route path="/about" element={loginStatus ? <About /> : <Navigate to="/" />} />
          <Route path="/contact" element={loginStatus ? <Contact /> : <Navigate to="/" />} />
          <Route path="/profile" element={loginStatus ? <Profile /> : <Navigate to="/" />} />
          
        </Routes>

      </LoginContext.Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
