import React from "react";
import robots from "./mock/robots.json";

import Robot from "./components/Robot";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <ul className={styles.robotList}>
        {robots.map((robot) => (
          <Robot id={robot.id} email={robot.email} name={robot.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
