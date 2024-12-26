import React, { useState } from "react";

const Profile = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputValue.name}
            placeholder="enter your name"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="age"
            value={inputValue.age}
            placeholder="enter your name"
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <p>{inputValue.name}</p>
        <p>{inputValue.age}</p>
      </div>
    </div>
  );
};

export default Profile;
