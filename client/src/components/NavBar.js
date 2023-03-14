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

<<<<<<< HEAD
          <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-base">
              <Link to="/login">
                Log in
              </Link>
            </a>
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
          <div className="navbar bg-base-100">
            {loggedUser ? <div>{loggedUser.nick}</div> :
              <a className="btn btn-ghost normal-case text-base">
                <Link to="/login">
                  Log in
                </Link>
              </a>
            }
||||||||| 6adac40
          <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-base">
              <Link to="/login">
                Log in
              </Link>
            </a>
=========
          <div>
            <a className="btn btn-ghost normal-case text-base">
              <Link to="/login">
                Log in
              </Link>
            </a>
>>>>>>>>> Temporary merge branch 2
=======

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
>>>>>>> 4b48dcf8a7559cd2a2bf216b7d81d9a4094805bf
          </div>

          <div>
            <a className="btn btn-ghost normal-case text-base">
<<<<<<< HEAD
              <Link to="/add">
                Add a new topic
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
              <Link to={loggedUser ? "/add" : "/login"}>
                Add a new topic
||||||||| 6adac40
              <Link to="/add">
                Add a new topic
=========
              <Link to="/register">
                Register
>>>>>>>>> Temporary merge branch 2
=======

              <Link to="/register">
                Register

              <Link to={loggedUser ? "/add" : "/login"}>
                Add a new topic

>>>>>>> 4b48dcf8a7559cd2a2bf216b7d81d9a4094805bf
             </Link>
            
            </a>
          </div>

    </div>  
    </>
    )
}