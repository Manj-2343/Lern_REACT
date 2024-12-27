import React from "react";

const ComponentC = ({ name }) => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        color: "black",
        margin: "10px 20px",
        width: "20vw",
        height: "20vh",
        padding: "10px 20px",
      }}
    >
      <p>component C : {name}</p>
    </div>
  );
};

export default ComponentC;
