import React from "react";

const WelcomeMessage = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {numbers.map((number, i) => (
        <ul key={i}>
          <li>{number}</li>
        </ul>
      ))}
    </div>
  );
};

export default WelcomeMessage;
