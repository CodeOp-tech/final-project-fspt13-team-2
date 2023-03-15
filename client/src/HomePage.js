import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import CommentsDisplay from './components/CommentsDisplay';
import HeroHeader from './components/HeroHeader.js';
import axios from "axios";
import CommentsCard from './components/CommentsCard';
import jwt_decode from "jwt-decode";

const HOSTNAME = "http://localhost:5050"

export default function HomePage() {
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

  

  //   const handleWowClick = (comment) => {
  //     setComments(comments => comments.map((x) => {
  //       if (x.id === comment.id)
  //         return {
  //           ...x,
  //           wowCount: x.wowCount + 1,
  //         };
  //       return x;
  //     })
  //   );
  // };
        
  //   const handleMehClick = (comment) => {
  //     console.log("here", comment)
  //     setComments(comments => comments.map((x) => {
  //       if (x.id === comment.id)
  //         return {
  //           ...x,
  //           mehCount: x.mehCount + 1,
  //         };
  //       return x;
  //     })
  //   );
  // };

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
            <NavBar/>
        </div>
        
        {/* <div>
            <CommentsDisplay 
              comments={comments}
              onWow={() => handleVote(true)}
              onMeh={() => handleVote(false)}
            />
        </div> */}
        <div className="container mx-auto px-60">
        {/* Map through the comments array and render each comment card*/}
        {comments.map((comment) => (
          <CommentsCard 
          key={comment.id}
          id={comment.id} 
          comment={comment.content} 
          timestamp={comment.created_date}
          wowCount={comment.wow}
          mehCount={comment.meh}
          onWow={() => loggedUser ? handleVote(true, comment.id) : alert("You must have an account to vote")}
          onMeh={() => loggedUser ? handleVote(false, comment.id) : alert("You must have an account to vote")}
          imageUrl={comment.image}
          /> 
        ))}
      </div>
        </>
    )
}