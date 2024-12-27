import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = ({ name }) => {
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
      <p> Component A : {name}</p>
      <ComponentB name={name} />
    </div>
  );
};

export default ComponentA;
