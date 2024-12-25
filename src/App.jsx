import React from "react";
import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const [friends, setFriends] = useState(["manoj", "biswal", "kumar"]);
  const [movie, setMovie] = useState({
    title: "RRR",
    rating: 7.5,
  });
  const [myMovies, setMyMovies] = useState([
    {
      id: 1,
      title: "spiderMan",
      rating: 4.3,
    },
    {
      id: 2,
      title: "spiderMan home coming",
      rating: 4.5,
    },
    {
      id: 3,
      title: "spiderMan away from home",
      rating: 4.9,
    },
  ]);
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
  //for obj
  const handleClick = () => setMovie({ ...movie, rating: 8.9 });
  //for array of obj
  const changeMov = () =>
    setMyMovies(
      myMovies.map((m) =>
        m.id === 1 ? { ...myMovies, title: "King Kong", rating: 6.7 } : m
      )
    );
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
      {/* //handling the array */}
      <button onClick={addNewFr}>Add new Friends</button>
      <button onClick={deleteFr}>Dele new friend</button>
      <button onClick={updateFr}>Update one friend</button>
      {/* handling the object */}
      <p>title:{movie.title}</p>
      <p>rating:{movie.rating}</p>
      <button onClick={handleClick}>Change Rating</button>
      {/* handling the array of object */}
      {myMovies.map((movie, i) => (
        <ul key={i + 1}>
          <li>{movie.title}</li>
          <li>{movie.rating}</li>
        </ul>
      ))}
      <button onClick={changeMov}>Change the movie</button>
    </div>
  );
};

export default App;
