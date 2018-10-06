import React from "react";
import { create } from "react-test-renderer";
import Oreo from "./Oreo";

test("snapshot", () => {
  const c = create(<Oreo />);
  expect(c.toJSON()).toMatchSnapshot();
});
