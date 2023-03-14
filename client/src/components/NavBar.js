import { Link } from 'react-router-dom'

export default function NavBar (){
    return (
      <>
      <div className="inline-flex p-8">

          <div>
            <a className="btn btn-ghost normal-case text-base">
              <Link to="/login">
                Log in
              </Link>
            </a>
          </div>

          <div>
            <a className="btn btn-ghost normal-case text-base">
              <Link to="/register">
                Register
             </Link>
            </a>
          </div>

    </div>  
    </>
    )
}