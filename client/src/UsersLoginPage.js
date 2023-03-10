import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const HOSTNAME = "http://localhost:5050"

export default function UsersLoginPage() {
  const [credentials, setCredentials] = useState({
    nick: "",
    password: ""
  })

  const {nick, password} = credentials;

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
      localStorage.setItem("token", data.token);
      console.log(data.message, data.token);
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
  }

    return (
      <div>
        <div className="container mx-auto px-10">

        <label className="label-text">username</label>
        <input
          value={nick}
          onChange={handleChange}
          name="nick"
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

          <div className="btn-group">
          <button className="btn btn-primary" onClick={login}>
            Sign in
          </button>
          <button className="btn btn-primary" onClick={logout}>
            Sign out
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
