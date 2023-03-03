import CommentsCard from "./CommentsCard"

export default function CommentsDisplay({ comments }) {
    return (
        <div>
        {/* Map through the comments array and render each comment card*/}
        {comments.map((comment, index) => (
          <CommentsCard 
          key={index} 
          comment={comment.comment} 
          timestamp={comment.timestamp}
          /> 
        ))}
      </div>
    )
}