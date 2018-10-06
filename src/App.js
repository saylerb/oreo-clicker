import React from "react";
import { render } from "react-dom";
import SVGInline from "react-svg-inline";
import oreo from "./oreo.svg";

import "./styles.css";

const App = () => (
  <div className="App">
    <SVGInline className="oreo" classSuffix="-svg" width={400} svg={oreo} />
  </div>
);

render(<App />, document.getElementById("root"));
