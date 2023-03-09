import { useState } from "react";
import axios from 'axios';

export default function UsersLoginPage() {
  const [credentials, setCredentials] = useState({
    username: "test",
    password: "test"
  })

  const {username, password} = credentials;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCredentials({...credentials, [name]: value });
  };

  const login = async () => {
    try {
      const { data } = await axios("users/login", {
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
        <h1>Log in</h1>
      </div>
    )
}