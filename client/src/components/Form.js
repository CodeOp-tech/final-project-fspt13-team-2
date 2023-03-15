import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

const HOSTNAME = "http://localhost:5050"

function Form() {
  const [comment, setComment] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [formSubmitionStatus, setFormSubmitionStatus] = useState('notSubmitted')
  const navigate = useNavigate();

  // Define a function to handle form submission
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    const token = localStorage.getItem("token");
    let user_id = null

    if(token) {
      const decoded = jwt_decode(token);
      user_id = decoded.user_id
    }

    const postToCreate = {user_id:user_id, content:comment, image:imageUrl}

    const { data } = await axios(`${HOSTNAME}/posts/create`, {
      method: "POST",
      data: postToCreate
    });
    setFormSubmitionStatus('submitted')
    // Clear the comment and category values
    setComment('');
    setImageUrl('');
    navigate("/")
  };

  // Define a function to handle changes to the comment input
  const handleCommentChange = (event) => {
    // Update the comment value with the current input value
    setComment(event.target.value);
  };

 
  return (
    <div className="flex justify-center m-16">

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
        <button className="btn btn-primary" type="submit" disabled={!comment && !imageUrl}>Submit</button>
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
                 SEE COMMENTS
            </Link></button>
        </div>
      </div>
      </> 
    )}
    </div>
  );
};


export default Form;
