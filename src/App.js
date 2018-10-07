import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Oreo from "./Oreo";
import Counter from "./Counter";

const App = () => (
  <div className="App">
    <Oreo />
    <Counter />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
