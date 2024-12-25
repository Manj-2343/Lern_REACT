import React from "react";

const WelcomeMessage = () => {
  const myName = "Manoj";
  const date = new Date();
  return (
    <div>
      <h1>{`I AM ${myName} `}</h1>
      <p>{date.toDateString()}</p>
    </div>
  );
};

export default WelcomeMessage;
