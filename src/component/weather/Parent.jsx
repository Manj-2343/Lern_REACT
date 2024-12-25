import React from "react";
import Weather from "./Weather";

const Parent = ({ isLaggedIn, isAdmin }) => {
  if (isLaggedIn && isAdmin) {
    return <h1>Welcome to admin</h1>;
  } else {
    return <h1>You are not authenticated</h1>;
  }
};

export default Parent;
