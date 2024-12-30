import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(!isActive)}
      >
        <span>{title}</span>
        <span className="accordion-icon">{isActive ? "−" : "+"}</span>
      </button>
      <div
        className={`accordion-content ${isActive ? "open" : ""}`}
        style={{ maxHeight: isActive ? "1000px" : "0" }}
      >
        <div className="accordion-content-inner">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
