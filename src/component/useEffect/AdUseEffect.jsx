import React, { useEffect, useState } from "react";

const AdUseEffect = () => {
  const [apiData, setApiData] = useState([]);

  const asyncOp = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      if (data && data.length) {
        setApiData(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    asyncOp();
  }, []);

  return (
    <div>
      <ul>
        {apiData.map((d) => (
          <div key={Math.random()}>
            <h4>{d.title}</h4>
            <p>{d.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AdUseEffect;
