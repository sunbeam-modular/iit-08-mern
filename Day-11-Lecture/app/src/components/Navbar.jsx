import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/">
                <img src="https://sunbeaminfo.in/img/new/new_logo.png" alt="Sunbeam Logo" width="100" height="50"/>
                </Link>

                <Link to="/">Home</Link>

                <Link to="/about">About Sunbeam</Link>

                <Link to="/contact">Contact Sunbeam</Link>
            </div>
        </nav>
    )
}

export default Navbar;