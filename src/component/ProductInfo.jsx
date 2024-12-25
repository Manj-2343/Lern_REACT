import React from "react";

const ProductInfo = () => {
  const obj = {
    name: "Laptop",
    price: 1200,
    available: "InStock",
  };
  return (
    <div>
      <h2>{obj.name}</h2>
      <h3>{obj.price}</h3>
      <h4>{obj.available}</h4>
    </div>
  );
};

export default ProductInfo;
