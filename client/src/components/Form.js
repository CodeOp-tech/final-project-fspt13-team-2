import React, { useState } from 'react';

function Form({ onAdd }) {
  // Declare state variables for the comment, category, and submitted comment
  const [comment, setComment] = useState('');
  
  // Define a function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Set the submitted comment to an object containing the comment, category, and a timestamp
    onAdd({ comment, timestamp: Date.now() });
    // Clear the comment and category values
    setComment('');
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
        <label className="comment-label">
          Your comment:
          <textarea className="comment-textarea" value={comment} onChange={handleCommentChange} />
        </label>
        {/* Create a button to submit the form */}
        <button className="comment-button" type="submit">Add a new topic</button>
      </form>
      </div>
  );
      };


export default Form;