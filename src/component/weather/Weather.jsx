import React from "react";

const Weather = () => {
  var temp = 34;
  if (temp < 15) {
    return <p>It is cold outside</p>;
  } else if (temp > 15 && temp < 25) {
    return <p>It is nice outside</p>;
  } else {
    return <p>It is hot outside</p>;
  }
};
export default Weather;
