
function FeedbackCard({ data }) {
  return (
    <div className="feedback-card">
      <h3>{data.fullName}</h3>
      <p><strong>Email:</strong> {data.email}</p>

     <p>
  <strong>Category:</strong>{" "}
  <span className={`badge ${data.category.trim().toLowerCase()}`}>{data.category}</span>
</p>
<p>
  <strong>Priority:</strong>{" "}
  <span className={`badge ${data.priority.trim().toLowerCase()}`}>{data.priority}</span>
</p>

      <p><strong>Description:</strong> {data.description}</p>

      {data.screenshot && (
        <div>
          <strong>Screenshot:</strong>
          <img src={data.screenshot} alt="Screenshot" />
        </div>
      )}

      {data.steps.length > 0 && (
        <div>
          <strong>Steps to Reproduce:</strong>
          <ul>{data.steps.map((s,i)=><li key={i}>{s}</li>)}</ul>
        </div>
      )}

      {data.suggestions.length > 0 && (
        <div>
          <strong>Suggested Improvements:</strong>
          <ul>{data.suggestions.map((s,i)=><li key={i}>{s}</li>)}</ul>
        </div>
      )}

      {data.notes && <p><strong>Notes:</strong> {data.notes}</p>}
      <p><small>Submitted at: {data.createdAt}</small></p>
    </div>
  );
}

export default FeedbackCard;