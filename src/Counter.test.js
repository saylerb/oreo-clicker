import React from "react";
import { create } from "react-test-renderer";
import Counter from "./Counter";

test("the counter starts at zero", () => {
  const counter = create(<Counter />);

  expect(counter.toJSON()).toMatchSnapshot();
});
