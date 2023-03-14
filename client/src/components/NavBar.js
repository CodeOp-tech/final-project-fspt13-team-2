import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";



export default function NavBar (){
  
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
   
    if(token) {
      const decoded = jwt_decode(token);
      setLoggedUser(decoded)
    }
   

  },[])

    return (
      <>
      <div className="inline-flex p-8">


          <div>
            <a className="btn btn-ghost normal-case text-base">
              <Link to="/login">
                Log in
              </Link>
            </a>

          <div className="navbar bg-base-100">
            {loggedUser ? <div>{loggedUser.nick}</div> :
              <a className="btn btn-ghost normal-case text-base">
                <Link to="/login">
                  Log in
                </Link>
              </a>
            }
          </div>

          <div>
            <a className="btn btn-ghost normal-case text-base">

              <Link to="/register">
                Register

              <Link to={loggedUser ? "/add" : "/login"}>
                Add a new topic

             </Link>
            
            </a>
          </div>

    </div>  
    </>
    )
}