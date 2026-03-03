
import React from "react";

function DynamicList({ items, setItems, label, placeholder }) {
  const addItem = () => setItems([...items, ""]);
  const removeItem = (index) => setItems(items.filter((_, i) => i !== index));
  const handleChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  return (
    <div className="dynamic-list">
      <label>{label}</label>
      {items.map((item, i) => (
        <div key={i} className="dynamic-item">
          <input
            type="text"
            placeholder={placeholder}
            value={item}
            onChange={(e) => handleChange(i, e.target.value)}
          />
          <button type="button" onClick={() => removeItem(i)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addItem}>Add {label}</button>
    </div>
  );
}

export default DynamicList;