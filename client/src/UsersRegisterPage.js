import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const HOSTNAME = "http://localhost:5050"

export default function UsersRegisterPage() {
    const [credentials, setCredentials] = useState({
        nick: "",
        email: "",
        password: ""
      })
    
      const navigate = useNavigate();

      const {nick, email, password} = credentials;
    
      const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]: value });
      };
    
      const register = async () => {
        try {
          const { data } = await axios(`${HOSTNAME}/users/register`, {
            method: "POST",
            data: credentials
          });
        
          //store it locally
          // localStorage.setItem("token", data.token);
          console.log(data);
          alert(data.message);
          navigate("/login");
          
        } catch (error) {
          console.log(error)
        }
      };

      return (
        <div>
          <div className="container mx-auto px-10">

           <label className="label-text">username</label>
           <input
            value={nick}
            onChange={handleChange}
            name="nick"
            type="text"
            placeholder=""
            className="form-control mb-2 input input-sm input-bordered w-full max-w-xs"
            /> 

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
            <button className="btn btn-primary" onClick={register}>
              Sign up
            </button>
          </div>
          </div>
        </div>
      )
  }
  