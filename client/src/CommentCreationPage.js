import { useState } from 'react';
import Form from "./components/Form";
import CommentsDisplay from './components/CommentsDisplay';
import HeroHeader from './components/HeroHeader';

export default function CommentCreationPage () {
    const [comments, setComments]= useState([]);

    const handleAddComments = (newComment) => {
        setComments((state) => [...state, newComment]);
      };

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
          <Form onAdd={handleAddComments}/>
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

 