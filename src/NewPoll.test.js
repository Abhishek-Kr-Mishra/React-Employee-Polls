import Newpoll from "./components/NewPoll/Newpoll";
import reducers from "./reducers";
import middleware from "./middleware";
import { createStore } from "redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducers, middleware);

test("submit will be disabled until both options field are not filled", () => {
  render(
    <Provider store={store}>
      <Router>
        <Newpoll />
      </Router>
    </Provider>
  );

  let firstOption = screen.getByPlaceholderText("Enter First Option");
  let secondOption = screen.getByPlaceholderText("Enter Second Option");
  let button = screen.getByTestId("submitButton");

  expect(firstOption.value).toBe("");
  expect(secondOption.value).toBe("");
  expect(button.disabled).toBeTruthy();
});

test("submit will be not be clickable even if one option is not filled", () => {
  render(
    <Provider store={store}>
      <Router>
        <Newpoll />
      </Router>
    </Provider>
  );

  let firstOption = screen.getByPlaceholderText("Enter First Option");

  fireEvent.change(firstOption, {
    target: { value: "First Option" },
  });
  let secondOption = screen.getByPlaceholderText("Enter Second Option");
  let button = screen.getByTestId("submitButton");
  fireEvent.click(button);

  expect(firstOption.value).toBe("First Option");
  expect(button).toBeDisabled();
});

test("submit will be clickable both options are filled", () => {
  render(
    <Provider store={store}>
      <Router>
        <Newpoll />
      </Router>
    </Provider>
  );

  let firstOption = screen.getByPlaceholderText("Enter First Option");
  let secondOption = screen.getByPlaceholderText("Enter Second Option");

  fireEvent.change(firstOption, {
    target: { value: "First Option" },
  });
  fireEvent.change(secondOption, {
    target: { value: "Second Option" },
  });
  let button = screen.getByTestId("submitButton");

  expect(firstOption.value).toBe("First Option");
  expect(secondOption.value).toBe("Second Option");
  expect(fireEvent.click(button)).toBeTruthy();
});
