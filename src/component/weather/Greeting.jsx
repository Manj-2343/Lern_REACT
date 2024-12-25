import React from "react";

const Greeting = ({ time }) => {
  if (time === "Morning") {
    return (
      <h1 style={{ color: "red", backgroundColor: "black", padding: "2rem" }}>
        Hi good morning
      </h1>
    );
  } else {
    return <h1>Hi good after nooon</h1>;
  }
};

export default Greeting;
