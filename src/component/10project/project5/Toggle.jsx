import React, { useState } from "react";
import "./style.css";

const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button
        className={`${isDarkMode ? "btn" : "btn1"}`}
        onClick={handleClick}
      >
        {`Toggle ${isDarkMode ? "Light" : "Dark"} Mode`}
      </button>
    </div>
  );
};

export default Toggle;
