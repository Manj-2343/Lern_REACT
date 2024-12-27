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

export const Data = createContext();
const App = () => {
  //old way to sending the data by using context api
  const [name, setName] = useState("Manoj kumar  Biswal");

  return (
    <Data.Provider value={name}>
      <p>App:{name}</p>
      <ComponentA />
    </Data.Provider>
  );
};

export default App;
