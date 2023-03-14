import { useState } from 'react';
import CommentsDisplay from './components/CommentsDisplay';
import HeroHeader from './components/HeroHeader.js';
import Header from './components/Header';

export default function HomePage() {
    const [comments, setComments]= useState([
        {
          id: 1,
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          timestamp: Date.now() - 1000 * 60 * 60, // One hour ago
          imageUrl: null,
          wowCount: 0,
          mehCount: 0
          },
        {
          id: 2,
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          timestamp: Date.now() - 1000 * 60 * 30, // Thirty minutes ago
          imageUrl: null,
          wowCount: 0,
          mehCount: 0
        },
          {
          id: 3,
          comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          timestamp: Date.now() - 1000 * 60 * 15, // Fifteen minutes ago
          imageUrl: null,
          wowCount: 0,
          mehCount: 0
        },
    ]);

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