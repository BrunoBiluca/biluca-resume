import React from 'react';
import { render } from "react-dom";
import { Resume } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Resume />
  </div>
);

render(<App />, document.getElementById("root"));
