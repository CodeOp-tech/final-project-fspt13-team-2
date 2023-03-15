import { useState, useEffect } from 'react';
import HeroHeader from './components/HeroHeader.js';
import CommentsDisplay from './components/CommentsDisplay';
import jwt_decode from "jwt-decode";
import axios from "axios";

const HOSTNAME = "http://localhost:5050"

export default function CommentsPage() {
    const [comments, setComments]= useState([]);
    const getPosts = async () => {
      const response = await axios.get(`${HOSTNAME}/posts`)
      setComments(response.data)
      
    };
   
    const [loggedUser, setLoggedUser] = useState(null)

    useEffect(() => {
      const token = localStorage.getItem("token");
      if(token) {
        const decoded = jwt_decode(token);
        setLoggedUser(decoded)
      }
      getPosts()
    },[])

  const handleVote = async (vote, post_id) => {
    const token = localStorage.getItem("token");
    let user_id = null

    if(token) {
      const decoded = jwt_decode(token);
      user_id = decoded.user_id
    }
    const voteToCreate = {post_id: post_id, user_id:user_id, wow:vote}
    const { data } = await axios(`${HOSTNAME}/votes/create`, {
      method: "POST",
      data: voteToCreate
    });
    getPosts() 
  }

    return (
        <>
        <div>
            <HeroHeader/>
        </div>

        <div>
          <CommentsDisplay comments={comments} handleVote={handleVote} loggedUser={loggedUser}/>
        </div>
        </>
    )
}