import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  return (
    <div
      style={{
        border: "2px solid red",
        backgroundColor: "green",
        color: "white",
        width: "100vh",
        height: "50vh",
        padding: "10px 20px",
        margin: "10px 20px",
      }}
    >
      <p>ComponentA:</p>
      <ComponentB />
    </div>
  );
};

export default ComponentA;
