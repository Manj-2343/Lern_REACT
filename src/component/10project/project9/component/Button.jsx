import React from "react";

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
      {/* <button className="btns">All Products</button>
      <button className="btns">Nike</button>
      <button className="btns">Adidas</button>
      <button className="btns">Puma</button>
      <button className="btns">Vans</button> */}
    </button>
  );
};

export default Button;
