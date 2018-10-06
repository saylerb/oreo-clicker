import React from "react";
import { render } from "react-dom";
import SVGInline from "react-svg-inline";
import oreo from "./oreo.svg";

const App = () => (
  <div>
    <SVGInline width={400} svg={oreo} />
  </div>
);

render(<App />, document.getElementById("root"));
