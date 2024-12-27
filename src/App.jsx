import React, { createContext, useState } from "react";
import ComponentOne from "./component/newComp/ComponentOne";
import ComponentTwo from "./component/newComp/ComponentTwo";
import ExampleOne from "./component/newComp/ExampleOne";
import ExampleTwo from "./component/newComp/ExampleTwo";
import ExampleThree from "./component/newComp/ExampleThree";
import TOdoList from "./component/newComp/TOdoList";
import Profile from "./component/newComp/Profile";
import Switch from "./component/switch/Switch";
import UseEffect from "./component/useEffect/UseEffect";
import AdUseEffect from "./component/useEffect/AdUseEffect";
import ComponentA from "./component/propsDrilling/ComponentA";

const App = () => {
  const [name, setName] = useState("Manoj");
  const Data = createContext();
  return (
    <Data.Provider
      value={name}
      style={{
        backgroundColor: "purple",
        color: "white",
        width: "40vw",
        height: "50vh",
        padding: "20px 30px",
        margin: "10px 20px",
      }}
    >
      <p>App:{name}</p>
      <ComponentA name={name} />
    </Data.Provider>
  );
};

export default App;
