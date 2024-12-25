import React from "react";

const CART = () => {
  const items = ["banana", "mango", "cheese", "grapes"];

  return (
    <div>{items.length > 0 && <h1>you have {items.length} of fruits.</h1>}</div>
  );
};
ji8;

export default CART;
