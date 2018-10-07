import React from "react";
import Counter from "./Counter";

import { render, fireEvent } from "react-testing-library";

test("the counter starts at zero", () => {
  const { getByTestId } = render(<Counter />);

  const node = getByTestId("current-count");

  expect(node.innerHTML).toEqual("Count: 0");
});

test("the counter increments when you press the button", () => {
  const { getByText, getByTestId } = render(<Counter />);

  fireEvent.click(getByText("+"));
  fireEvent.click(getByText("+"));

  expect(getByTestId("current-count").innerHTML).toEqual("Count: 2");
});
