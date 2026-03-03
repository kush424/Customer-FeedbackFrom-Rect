
import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleAddFeedback = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
  };

  return (
    <div className="App">
      <FeedbackForm onAddFeedback={handleAddFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;