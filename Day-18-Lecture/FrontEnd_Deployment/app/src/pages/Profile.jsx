import { useState } from "react";
import { updateUserProfile } from "../services/userService";
import { getUserProfile } from "../services/userService";
import { toast } from "react-toastify";
import { useEffect } from "react";

function Profile() {

const [name, setName] = useState('');
const [email,setEmail] = useState('');
const [mobile, setMobile] = useState('');

useEffect(() => {
    getProfile();
},[])




const getProfile = async() => {
    const token = sessionStorage.getItem("token");
    const result = await getUserProfile(token);
    if(result.status == "Success"){
        const user = result.data[0];
        setName(user.name)
        setEmail(user.email)
        setMobile(user.mobile)
    }
}


const update = async() => {
    const token = sessionStorage.getItem("token");
    const result = await updateUserProfile(token, name, email, mobile);
    if(result.status == "Success"){
        toast.success("Profile Updated")
    } else {
        toast.error("Error")
    }
}

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          id="inputName"
          placeholder="Enter Name"
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Email
        </label>
        <input
          id="inputEmail"
          placeholder="Enter Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="inputMobile" className="form-label">
          Mobile
        </label>
        <input
          id="inputMobile"
          placeholder="Enter Mobile"
          type="tel"
          required
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={update}>
          Update
        </button>
      </div>
    </div>
  );
}
export default Profile;
