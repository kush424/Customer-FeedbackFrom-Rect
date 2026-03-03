import React, { useState, useRef } from "react";
import DynamicList from "./DynamicList";

function FeedbackForm({ onAddFeedback }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const screenshotRef = useRef(null);
  const notesRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!category) newErrors.category = "Category is required";
    if (!priority) newErrors.priority = "Priority is required";
    if (!description.trim() || description.length < 20)
      newErrors.description = "Description must be at least 20 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrors(true);

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      const newFeedback = {
        fullName,
        email,
        category,
        priority,
        description,
        screenshot: screenshotRef.current.value,
        notes: notesRef.current.value,
        steps,
        suggestions,
        createdAt: new Date().toLocaleString(),
        id: Date.now(),
      };
      onAddFeedback(newFeedback);

      setFullName("");
      setEmail("");
      setCategory("");
      setPriority("");
      setDescription("");
      setSteps([]);
      setSuggestions([]);
      screenshotRef.current.value = "";
      notesRef.current.value = "";
      setErrors({});
      setShowErrors(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className={showErrors && errors.fullName ? "input-error" : ""}
      />
      {showErrors && errors.fullName && <small className="error-msg">{errors.fullName}</small>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={showErrors && errors.email ? "input-error" : ""}
      />
      {showErrors && errors.email && <small className="error-msg">{errors.email}</small>}

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={showErrors && errors.category ? "input-error" : ""}
      >
        <option value="">Select Category</option>
        <option value="Bug">Bug</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Complaint">Complaint</option>
        <option value="Other">Other</option>
      </select>
      {showErrors && errors.category && <small className="error-msg">{errors.category}</small>}

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={showErrors && errors.priority ? "input-error" : ""}
      >
        <option value="">Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      {showErrors && errors.priority && <small className="error-msg">{errors.priority}</small>}

      <textarea
        placeholder="Detailed Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={showErrors && errors.description ? "input-error" : ""}
      />
      {showErrors && errors.description && <small className="error-msg">{errors.description}</small>}

      <DynamicList
        items={steps}
        setItems={setSteps}
        label="Steps to Reproduce"
        placeholder="Step description"
      />
      <DynamicList
        items={suggestions}
        setItems={setSuggestions}
        label="Suggested Improvements"
        placeholder="Suggestion"
      />

      <input type="text" placeholder="Screenshot URL (optional)" ref={screenshotRef} />
      <textarea placeholder="Additional Notes (optional)" ref={notesRef} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;