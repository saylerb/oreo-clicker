import React from "react";
import { create } from "react-test-renderer";
import Counter from "./Counter";

import { render } from "react-testing-library";

test("the counter starts at zero", () => {
  const { getByTestId } = render(<Counter />);

  const node = getByTestId("current-count");

  expect(node.innerHTML).toEqual("Count: 0");
});
