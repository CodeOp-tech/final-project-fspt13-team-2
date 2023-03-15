import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function NavBar (){
  
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token) {
      const decoded = jwt_decode(token);
      setLoggedUser(decoded)
    }
  },[])
  
  const handleLogout = () => {
    localStorage.removeItem("token")
    setLoggedUser(null)
    navigate("/")
  } 
    return (
      <>
      <div className="inline-flex flex-row p-8">

          <div className="navbar bg-base-100">
            {loggedUser ? <div>{loggedUser.nick}</div> :
              <a className="btn btn-ghost normal-case text-base">
                <Link to="/login">
                  Log in
                </Link>
              </a>
            }
          </div>
          <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-base">
              <Link to={loggedUser ? "/add" : "/login"}>
                Add a new topic
             </Link>
            
            </a>
          </div>
        <div>
        {loggedUser ? <button className="btn gap-2" onClick={handleLogout}>
                      Logout
          </button> : null
        }
        </div>
    </div>  
    </>
    )
}











