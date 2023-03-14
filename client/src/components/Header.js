import { Link } from "react-router-dom"

export default function Header() {
    return (
        <div className="card lg:card-side bg-base-100">
         <div className="card-body">
          <h2 className="card-title justify-center mb-5">Spread the word on things that make you go W O W</h2>
          <div className="card-actions justify-center">
          <Link to="/add">
           <button className="btn btn-primary">Start Sharing</button>
           </Link>
         </div>
       </div>
     </div>
    )
}