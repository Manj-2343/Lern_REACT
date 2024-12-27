import React, { useEffect, useState } from "react";
import useFetch from "./component/customHooks/useFectchHook";

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div>
        {data.map((d) => (
          <p key={d.id}>{d.title}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
