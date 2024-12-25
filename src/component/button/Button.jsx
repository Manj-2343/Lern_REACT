import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log(Math.round(Math.random() * 10));
  };
  const handleCopy = () => {
    console.log("you staling my content");
  };
  const handleMouse = () => {
    console.log("you moving your mouse inside the text");
  };
  return (
    <div>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "0.5rem 1.5rem",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Button
      </button>
      <p onCopy={handleCopy}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores sit
        quod sint fuga earum accusamus sed libero incidunt ex itaque alias
        inventore, asperiores nulla omnis quas voluptatum ut voluptas modi,
        illum sequi repellendus saepe velit esse dolore? Porro, consequatur ex!
      </p>
      <p onMouseMove={handleMouse}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta tenetur
        a atque voluptate iure adipisci, eius voluptas neque officia, nostrum
        nihil exercitationem natus nobis optio omnis libero asperiores? Quaerat,
        ipsa!
      </p>
    </div>
  );
};

export default Button;
