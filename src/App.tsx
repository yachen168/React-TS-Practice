import React from "react";
import robots from "./mock/robots.json";

import Robot from "./components/Robot";

import "./App.css";

function App(a) {
  return (
    <div className="App">
      <ul>
        {robots.map((robot) => (
          <Robot id={robot.id} email={robot.email} name={robot.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
