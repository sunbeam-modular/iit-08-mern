import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Register from "./pages/Registration";
import Login from "./pages/Login";
import { createContext,useState } from "react";
import { ToastContainer } from 'react-toastify'
import Profile from "./pages/Profile";

export const LoginContext = createContext();

function App() {

  const[loginstatus,setLoginStatus] = useState(false);

  return (
    <BrowserRouter>

    <LoginContext.Provider value={{loginstatus,setLoginStatus}}>

    {loginstatus && <Navbar />}

      <Routes>

        <Route path="/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected Routing */}
        <Route path="/home" element={loginstatus ? <Home /> : <Navigate to="/"/>} />
        <Route path="/about" element={loginstatus ? <About /> : <Navigate to="/"/>} />
        <Route path="/contact" element={loginstatus ? <Contact /> : <Navigate to="/"/>} />
        <Route path="/profile" element={loginstatus ? <Profile /> : <Navigate to="/"/>} />
      

      </Routes>

      </LoginContext.Provider>

    <ToastContainer />

    </BrowserRouter>
  );
}

export default App;
