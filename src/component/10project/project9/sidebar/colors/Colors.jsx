import React from "react";
import "./color.css";
import Input from "../../component/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test1" />
        <span className="checkmark all"></span>All
      </label>
      <>
        <Input
          handleChange={handleChange}
          value="black"
          title="black"
          name="test1"
          color="black"
        />
        <Input
          handleChange={handleChange}
          value="blue"
          title="blue"
          name="test1"
          color="blue"
        />
        <Input
          handleChange={handleChange}
          value="green"
          title="green"
          name="test1"
          color="green"
        />
        <Input
          handleChange={handleChange}
          value="white"
          title="white"
          name="test1"
          color="white"
        />
      </>
    </div>
  );
};

export default Colors;
