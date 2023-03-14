
import { useState, useEffect } from 'react';
import Header from './components/Header';
import CommentsDisplay from './components/CommentsDisplay';
import HeroHeader from './components/HeroHeader.js';
import axios from "axios";

const HOSTNAME = "http://localhost:5050"


export default function HomePage() {
    const [comments, setComments]= useState([]);
    const getPosts = async () => {
      const response = await axios.get(`${HOSTNAME}/posts`)
      setComments(response.data)
      
    };

    useEffect(() => {
      getPosts() 
    },[])

    const handleWowClick = (comment) => {
      setComments(comments => comments.map((x) => {
        if (x.id === comment.id)
          return {
            ...x,
            wowCount: x.wowCount + 1,
          };
        return x;
      })
    );
  };
        
    const handleMehClick = (comment) => {
      console.log("here", comment)
      setComments(comments => comments.map((x) => {
        if (x.id === comment.id)
          return {
            ...x,
            mehCount: x.mehCount + 1,
          };
        return x;
      })
    );
  };

    return (
        <>
        <div>
            <HeroHeader/>
        </div>
        
        <div>
            <Header/>
        </div>

        <div>
            <CommentsDisplay 
              comments={comments}
              onWow={handleWowClick}
              onMeh={handleMehClick}
            />
        </div>
        </>
    )
}