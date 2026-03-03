
import FeedbackCard from "./FeedbackCard";

function FeedbackList({ feedbacks }) {
  if (feedbacks.length === 0) return <p>No feedback submitted yet.</p>;

  return (
    <div>
      <h2>Submitted Feedback</h2>
      {feedbacks.map(f => <FeedbackCard key={f.id} data={f} />)}
    </div>
  );
}

export default FeedbackList;