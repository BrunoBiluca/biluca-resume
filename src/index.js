import React from 'react';
import { render } from "react-dom";
import { Resume } from "./lib";
import styles from "./style.module.css"

const App = () => (
  <div style={{ alignItems: "center" }}>
    <Resume />
  </div>
);

render(<App />, document.getElementById("root"));
