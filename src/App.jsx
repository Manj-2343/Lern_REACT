import React from "react";
import User from "./component/props/User";

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
    </div>
  );
};

export default App;
