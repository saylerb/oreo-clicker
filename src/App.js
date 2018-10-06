import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Oreo from "./Oreo";

const App = () => (
  <div className="App">
    <Oreo />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
