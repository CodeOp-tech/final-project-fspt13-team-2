import CommentsCard from "./CommentsCard"

export default function CommentsDisplay({ comments, onWow, onMeh }) {
    return (
        <div className="container mx-auto px-60">
        {/* Map through the comments array and render each comment card*/}
        {comments.map((comment) => (
          <CommentsCard 
          key={comment.id} 
          comment={comment.comment} 
          timestamp={comment.timestamp}
          wowCount={comment.wowCount}
          mehCount={comment.mehCount}
          onWow={() => onWow(comment)}
          onMeh={() => onMeh(comment)}
          imageUrl={comment.imageUrl}
          /> 
        ))}
      </div>
    )
}