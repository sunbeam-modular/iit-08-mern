import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import { useContext } from "react";

function Navbar(){
      const navigate = useNavigate();

    const {setLoginStatus} = useContext(LoginContext);

    const logout = async() =>{
        sessionStorage.removeItem("token");
        setLoginStatus(false);
        navigate("/")
    }

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/">
                <img src="https://sunbeaminfo.in/img/new/new_logo.png" alt="Sunbeam Logo" width="100" height="50"/>
                </Link>

                <Link to="/home">Home</Link>

                <Link to="/about">About Sunbeam</Link>

                <Link to="/contact">Contact Sunbeam</Link>

                <Link to="/profile">Profile</Link>

                {/* <Link to="/register">Register User</Link>

                <Link to="/login">Login</Link> */}

                <button className="btn btn-danger" onClick={logout}>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar;