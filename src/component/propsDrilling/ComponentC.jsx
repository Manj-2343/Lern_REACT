import React, { useContext } from "react";
import { Data } from "../../App";

const ComponentC = () => {
  const userName = useContext(Data);

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
      <p>component C : {userName}</p>
    </div>
  );
};

export default ComponentC;
