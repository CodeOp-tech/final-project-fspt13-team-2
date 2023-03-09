import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function Form({ onAdd }) {
  // Declare state variables for the comment 
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  // Define a function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Set the submitted comment to an object containing the comment elements
    onAdd({ 
      id: uuid(),
      comment, 
      timestamp: Date.now(), 
      imageUrl,
      wowCount: 0,
      mehCount: 0
    });
    // Clear the comment and category values
    setComment('');
    setImageUrl('');
  };

  // Define a function to handle changes to the comment input
  const handleCommentChange = (event) => {
    // Update the comment value with the current input value
    setComment(event.target.value);
  };

  // Render the CommentForm component
  return (
    <div className="comment-form-container">
      {/* Create a form element with a textarea for the comment and an input for the category */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <label className="label-text">
          Your comment:
          <textarea className="textarea textarea-bordered" placeholder="Leave a comment" value={comment} onChange={handleCommentChange} />
        </label>
        <label className="label-text">
          Add an image URL:
          <input 
          className="input input-bordered input-sm w-full max-w-xs"
          placeholder="http://example.com"
          type="text" 
          value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} 
          />
        </label>
        {/* Create a button to submit the form */}
        <button className="comment-button" type="submit">Add a new topic</button>
      </form>
      </div>
  );
};


export default Form;
