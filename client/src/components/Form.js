import React, { useState } from 'react';
import './Form.css';

function Form() {
  // Declare state variables for the comment, category, and submitted comment
  const [comment, setComment] = useState('');
  const [category, setCategory] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');

  // Define the predefined comments
  const predefinedComments = [
    {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      category: 'Positive',
      timestamp: Date.now() - 1000 * 60 * 60, // One hour ago
    },
    {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      category: 'Negative',
      timestamp: Date.now() - 1000 * 60 * 30, // Thirty minutes ago
    },
    {
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      category: 'Question',
      timestamp: Date.now() - 1000 * 60 * 15, // Fifteen minutes ago
    },
  ];
        
  
  // Define a function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Set the submitted comment to an object containing the comment, category, and a timestamp
    setSubmittedComment({ comment, category, timestamp: Date.now() });
    // Clear the comment and category values
    setComment('');
    setCategory('');
  };

  // Define a function to handle changes to the comment input
  const handleCommentChange = (event) => {
    // Update the comment value with the current input value
    setComment(event.target.value);
  };

  // Define a function to handle changes to the category input
  const handleCategoryChange = (event) => {
    // Update the category value with the current input value
    setCategory(event.target.value);
  };
  
  // Render the CommentForm component
  return (
    <div className="comment-form-container">
      {/* Create a form element with a textarea for the comment and an input for the category */}
      <form className="comment-form" onSubmit={handleSubmit}>
        <label className="comment-label">
          Your opinion:
          <textarea className="comment-textarea" value={comment} onChange={handleCommentChange} />
        </label>
        <label className="comment-label">
          Category:
          <input className="comment-input" type="text" value={category} onChange={handleCategoryChange} />
        </label>
        {/* Create a button to submit the form */}
        <button className="comment-button" type="submit">Add a new topic</button>
      </form>

      <div>
        {/* Map through the predefined comments array and render each comment */}
        {predefinedComments.map((predefinedComment, index) => (
          <div key={index} className="predefined-comment-container">
            <p>{predefinedComment.comment}</p>
            <p>Category: {predefinedComment.category}</p>
            <p>Submitted at: {new Date(predefinedComment.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    {/* If a comment has been submitted, render it */}
      {submittedComment && (
        <div className="submitted-comment">
          <h3 className="submitted-comment-heading">Your comment:</h3>
          <p className="submitted-comment-text">{submittedComment.comment}</p>
          <p className="submitted-comment-category">Category: {submittedComment.category}</p>
          <p className="submitted-comment-timestamp">Submitted at: {new Date(submittedComment.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
      };


export default Form;
