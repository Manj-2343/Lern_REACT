import React, { useId } from "react";

const UseIdHook = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" id={`${id}`} />
      <label htmlFor={`${id}-password`}>Password</label>
      <input type="password" id={`${id}`} />
    </div>
  );
};

export default UseIdHook;
