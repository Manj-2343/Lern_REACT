import React from "react";
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const [friends, setFriends] = useState(["manoj", "biswal", "kumar"]);
  const handleIncr = () => {
    setCounter(counter + 1);
  };
  const handleDecr = () => {
    setCounter(counter - 1);
  };
  const addNewFr = () => setFriends([...friends, "none"]);
  const deleteFr = () => setFriends(friends.filter((f) => f !== "manoj"));
  const updateFr = () =>
    setFriends(friends.map((f) => (f === "manoj" ? "Manoj" : f)));
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleIncr} style={{ margin: "2px" }}>
        +
      </button>
      <button onClick={handleDecr}>-</button>

      {friends.map((friend, i) => (
        <li key={i + 1}>{friend}</li>
      ))}

      <button onClick={addNewFr}>Add new Friends</button>
      <button onClick={deleteFr}>Dele new friend</button>
      <button onClick={updateFr}>Update one friend</button>
    </div>
  );
};

export default App;
