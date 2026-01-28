import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-toastify'
import { registerUser } from "../services/userService";
import { useNavigate } from 'react-router-dom'




function Register(){

// const [stateVariable, setStateFunction] = useState(initialValue)

const [name, setName] = useState('');
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');
const [mobile, setMobile] = useState('');

const navigate = useNavigate();

const signup = async () => {
if(name == ''){
    toast.warn("name must be enter")
} else if(email == ''){
    toast.warn("email must be enter")
} else if(password == ''){
    toast.warn("password must be enter")
} else if(mobile == ''){
    toast.warn("mobile must be enter")
} else{
    const result = await registerUser(name,email,password,mobile);
    if(result.status == "Success"){
        navigate("/");
        toast.success("User register successfully...!")
    } else {
        toast.error(result.error)
    }
}
}


    return(
        <div className="container">
            <div className="mb-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input id="inputName" placeholder="Enter Name" type="text" required onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input id="inputEmail" placeholder="Enter Email" type="email" required onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input id="inputPassword" placeholder="Enter Password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="inputMobile" className="form-label">Mobile</label>
                <input id="inputMobile" placeholder="Enter Mobile" type="tel" required onChange={(e) => setMobile(e.target.value)}/>
            </div>

            <div className="mb-3">
                <button className="btn btn-primary" onClick={signup}>Signup</button>
            </div>

            <div className="mb-3">
                Already have an account? Then for Login <Link to="/login">Click Here</Link>
            </div>
        </div>
    )
}

export default Register;