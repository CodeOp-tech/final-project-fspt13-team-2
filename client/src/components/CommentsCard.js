export default function CommentsCard({ comment, wowCount, mehCount, imageUrl, timestamp, onWow, onMeh }) {
    return (
        <div className="comment-container">
            <p>{comment}</p>
            {imageUrl && <img src={imageUrl} alt="comment-image" />}
            <p>Submitted at: {new Date(timestamp).toLocaleString()}</p>
            <p>{wowCount} Wows</p>
            <p>{mehCount} Mehs</p>

            <div className="vote-buttons">
                <button className="btn btn-sm btn-outline btn-secondary" onClick={onWow}>Wow</button>
                <button className="btn btn-sm btn-outline" onClick={onMeh}>Meh</button>
            </div>
        </div>
        )
}