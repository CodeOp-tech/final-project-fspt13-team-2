import { useState } from 'react';
import Form from './components/Form.js';
import CommentsDisplay from './components/CommentsDisplay';

export default function HomePage() {
    const [comments, setComments]= useState([
        {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            timestamp: Date.now() - 1000 * 60 * 60, // One hour ago
          },
          {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            timestamp: Date.now() - 1000 * 60 * 30, // Thirty minutes ago
          },
          {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            timestamp: Date.now() - 1000 * 60 * 15, // Fifteen minutes ago
          },
    ])

    const handleAddComments = (newComment) => {
        setComments((state) => [...state, newComment]);
      };

    return (
        <>
        <div>
            <Form onAdd={handleAddComments}/>
        </div>
        
        <div>
            <CommentsDisplay comments={comments}/>
        </div>
        </>
    )
}