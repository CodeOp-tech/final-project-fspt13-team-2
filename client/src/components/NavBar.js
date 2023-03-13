import { Link } from 'react-router-dom'

export default function NavBar (){
    return (
      <>
      <div className="inline-flex flex-row p-8">

          <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-base">
              <Link to="/login">
                Log in
              </Link>
            </a>
          </div>
          <div className="navbar bg-base-100">
            <a className="btn btn-ghost normal-case text-base">
              <Link to="/add">
                Add a new topic
             </Link>
            </a>
          </div>

    </div>  
    </>
    )
}