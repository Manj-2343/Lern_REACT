import React, { useReducer } from "react";
import "./style.css";
import { initialState, reducer } from "./reducerFunc";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <div className="counter">
        <h1>Count: {state.count}</h1>
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="increment btn"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="decrement btn"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="reset btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
