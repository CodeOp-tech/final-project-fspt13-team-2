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
    navigate("/posts")
  } 
    return (
      <>
      <div className="navbar bg-base-100">

          <div>
            {loggedUser ? <div className="card-title">{loggedUser.nick}</div> :
              <a className="btn btn-ghost normal-case text-base">
                <Link to="/login">
                  Login
                </Link>
              </a>
            }
          </div>

          <div>
            <a className="btn btn-ghost normal-case text-base">
              <Link to={loggedUser ? "/add" : "/login"}>
                Share something W O W 
             </Link>
            
            </a>
          </div>
        <div>

        <div>
          {loggedUser ? 
          <button className="btn btn-ghost normal-case text-base" onClick={handleLogout}>
                      Logout
          </button> : null
          }
        </div>

      </div>
    </div>  
    </>
    )
}





