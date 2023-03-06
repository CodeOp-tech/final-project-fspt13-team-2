export default function CommentsCard({ index, comment, timestamp }) {
    return (
        <div key={index} className="comment-container">
            <p>{comment}</p>
            <p>Submitted at: {new Date(timestamp).toLocaleString()}</p>
          </div>
    )
}