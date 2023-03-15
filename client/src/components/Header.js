import { Link } from "react-router-dom"

export default function Header() {
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Spread the word on things that make you go W O W</p>
          <Link to="/posts">
          <button className="btn btn-primary">Start Sharing</button>
          </Link>
        </div>
      </div>
    </div>
    )
}