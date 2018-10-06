import React, { Fragment } from "react";
import SVGInline from "react-svg-inline";
import oreo from "./oreo.svg";

const Oreo = () => (
  <Fragment>
    <SVGInline className="oreo" classSuffix="-svg" width={400} svg={oreo} />
  </Fragment>
);

export default Oreo;
