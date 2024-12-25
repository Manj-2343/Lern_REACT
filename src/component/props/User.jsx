import React from "react";
import { FaBeer } from "react-icons/fa";

const User = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <div>
      <img src={img} alt="img" width={240} />
      <h3>
        Lets go for a <FaBeer />?{" "}
      </h3>
      <p>{name}</p>
      <p>{age}</p>
      <p>{isMarried}</p>
      <ul>
        {hobbies.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
