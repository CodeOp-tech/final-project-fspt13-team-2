import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const HOSTNAME = "http://localhost:5050"

export default function UsersLoginPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate();
  const {email, password} = credentials;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCredentials({...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const { data } = await axios(`${HOSTNAME}/users/login`, {
        method: "POST",
        data: credentials
      });
    
      //store it locally
      

      if (data.message === "Login successful") {
        localStorage.setItem("token", data.token);
        navigate("/posts")
      } else {
        alert(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <div>
        <div className="container mx-auto px-10">

        <label className="label-text">e-mail</label>
        <input
          value={email}
          onChange={handleChange}
          name="email"
          type="text"
          className="form-control mb-2 input input-sm input-bordered w-full max-w-xs"
          />

         <label className="label-text">password</label>
          <input
          value={password}
          onChange={handleChange}
          name="password"
          type="password"
          className="form-control mb-2 input input-sm input-bordered w-full max-w-xs"
          />

          <div>
          <button className="btn btn-primary" onClick={login}>
            Sign in
          </button>
        </div>
        </div>

        <div className="text-center p-4">
          <p>
            Don't have an account? 
            <Link className="link link-primary link-hover" to='/register'> Create one</Link>
          </p>
        </div>
      </div>
    )
}
