import React from "react";
import ComponentC from "./ComponentC";

const ComponentB = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        margin: "10px 20px",
        width: "20vw",
        height: "20vh",
        padding: "10px 20px",
      }}
    >
      <p>ComponentB</p>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
