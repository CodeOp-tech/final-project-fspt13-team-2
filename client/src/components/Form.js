import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function Form({ onAdd }) {
  // Declare state variables for the comment 
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [formSubmitionStatus, setFormSubmitionStatus] = useState('notSubmitted')
  
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
    setFormSubmitionStatus('submitted')
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
    <div className="flex justify-center mt-50 px-8">

      {/* Create a form element with a textarea for the comment and an input for the category */}
      {formSubmitionStatus === 'notSubmitted' && 
      <form className="max-w-2xl" onSubmit={handleSubmit}>
        <div class="flex flex-wrap border shadow-xl selection:rounded-lg p-16 dark:bg-gray-600">
        <div class="flex flex-col gap-2 w-full border-gray-400">

        <label className="label-text">
          Your comment:
         </label>
        <textarea className='w-full resize-y py-2 border rounded-lg px-3 dark:text-gray-100' placeholder="Leave a comment" value={comment} onChange={handleCommentChange} />
        

        <label className="label-text">
          Add an image URL:
        </label>
        <input 
          className="input input-bordered input-sm w-full max-w-xs"
          placeholder="http://example.com"
          type="text" 
          value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} 
          />

        {/* Create a button to submit the form */}
        <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        </div>
      </form>
       }

      {formSubmitionStatus === 'submitted' && (
        <>
          <div className="alert shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             <div>
             <h3 className="font-bold">Comment added succesfully!</h3>
          </div>
         </div>

        <div className="flex-none">
          <button className="btn btn-sm">
            <Link className="link link-primary link-hover" to="/">
                 See
            </Link></button>
        </div>
      </div>
      </> 
    )}
    </div>
  );
};


export default Form;
