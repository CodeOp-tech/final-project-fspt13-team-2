export default function CommentsCard({ comment, nick, wowCount, mehCount, imageUrl, timestamp, onWow, onMeh }) {
    return (
        
        <div className="card card-body w-300 bg-base-100 shadow-xl p-6 my-8">
            <p>{comment}</p>
            {imageUrl && <img src={imageUrl} alt="comment-image" />}
            <p className="label-text mt-2">Submitted at: {new Date(timestamp).toLocaleString()} by {nick}</p>

            <div className="card-actions justify-end">
                <button className="btn gap-2" onClick={onWow}>
                    Wow
                    <div className="badge badge-secondary">{wowCount}</div>
                </button>
                <button className="btn gap-2" onClick={onMeh}>
                    Meh
                    <div className="badge badge-secondary">{mehCount}</div>
                </button>
            </div>
        </div>
    )
}