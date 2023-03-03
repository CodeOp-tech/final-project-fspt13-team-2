export default function CommentsDisplay({ comments }) {
    return (
        <div>
        {/* Map through the comments array and render each comment */}
        {comments.map((comment, index) => (
          <div key={index} className="predefined-comment-container">
            <p>{comment.comment}</p>
            <p>Submitted at: {new Date(comment.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    )
}