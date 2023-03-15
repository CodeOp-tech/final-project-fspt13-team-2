import CommentsCard from "./CommentsCard"

export default function CommentsDisplay({ comments, onWow, onMeh }) {
    return (
        <div className="container mx-auto px-60">
        {/* Map through the comments array and render each comment card*/}
        {comments.map((comment) => (
          <CommentsCard 
          key={comment.id}
          id={comment.id} 
          comment={comment.content} 
          timestamp={comment.created_date}
          wowCount={comment.wow}
          mehCount={comment.meh}
          onWow={onWow}
          onMeh={onMeh}
          imageUrl={comment.image}
          /> 
        ))}
      </div>
    )
}