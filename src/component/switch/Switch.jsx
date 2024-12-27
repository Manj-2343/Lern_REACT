import React, { useEffect, useState } from "react";

const Switch = () => {
  const [sw, setSw] = useState(null);
  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />
      <input type="text" key={sw ? "dark" : "light"} />
      <button onClick={() => setSw(() => !sw)}>switch</button>
    </div>
  );
};

export default Switch;
