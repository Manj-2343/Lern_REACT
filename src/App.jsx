import React from "react";
import User from "./component/props/User";
import Parent from "./component/weather/Parent";
import Greeting from "./component/weather/Greeting";

const App = () => {
  return (
    <div>
      <User
        img="https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg"
        name="Manoj"
        age={23}
        isMarried={true}
        hobbies={["coding", "reading", "sleeping"]}
      />
      <Parent isLaggedIn={true} isAdmin={false} />
      <Greeting time={"Morning"} />
    </div>
  );
};

export default App;
