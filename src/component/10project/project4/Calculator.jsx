import React, { useState } from "react";
import "./style.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const clear = () => setInputValue("");
  const display = (value) => setInputValue(inputValue + value);
  const calculate = () => setInputValue(eval(inputValue));
  return (
    <div>
      <div className="calculator">
        <div className="display">
          <input type="text" id="result" value={inputValue} />
        </div>
        <div className="keypad">
          <button className="operator" onClick={() => clear()}>
            AC
          </button>
          <button className="operator">DEL</button>
          <button className="operator" onClick={() => display("%")}>
            %
          </button>
          <button className="operator" onClick={() => display("/")}>
            /
          </button>

          <button onClick={() => display("7")}>7</button>
          <button onClick={() => display("8")}>8</button>
          <button onClick={() => display("9")}>9</button>
          <button className="operator" onClick={() => display("*")}>
            *
          </button>

          <button onClick={() => display("4")}>4</button>
          <button onClick={() => display("5")}>5</button>
          <button onClick={() => display("6")}>6</button>
          <button className="operator" onClick={() => display("-")}>
            -
          </button>

          <button onClick={() => display("1")}>1</button>
          <button onClick={() => display("2")}>2</button>
          <button onClick={() => display("3")}>3</button>
          <button className="operator" onClick={() => display("+")}>
            +
          </button>

          <button onClick={() => display("00")}>00</button>
          <button onClick={() => display("0")}>0</button>
          <button onClick={() => display(".")}>.</button>
          <button className="operator" onClick={() => calculate()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
