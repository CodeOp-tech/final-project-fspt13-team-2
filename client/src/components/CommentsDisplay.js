import CommentsCard from "./CommentsCard"

export default function CommentsDisplay({ comments, loggedUser, handleVote }) {
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
        onWow={() => loggedUser ? handleVote(true, comment.id) : alert("You must have an account to vote")}
        onMeh={() => loggedUser ? handleVote(false, comment.id) : alert("You must have an account to vote")}
        imageUrl={comment.image}
        /> 
      ))}
    </div>
    )
}