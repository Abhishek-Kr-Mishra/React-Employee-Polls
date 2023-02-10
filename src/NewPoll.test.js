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

test("when input-one is given to input field it correctly changes and displays updated value", () => {
  render(
    <Provider store={store}>
      <Router>
        <Newpoll />
      </Router>
    </Provider>
  );

  let element = screen.getByPlaceholderText("Enter First Option");

  fireEvent.change(element, {
    target: { value: "OPTION1" },
  });

  expect(screen.queryByTestId("input-one").value).toBe("OPTION1");
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
    target: { value: "OPTION1" },
  });
  fireEvent.change(secondOption, {
    target: { value: "OPTION2" },
  });
  let button = screen.getByTestId("submitButton");

  expect(screen.queryByTestId("input-one").value).toBe("OPTION1");
  expect(screen.queryByTestId("input-two").value).toBe("OPTION2");
  expect(fireEvent.click(button)).toBeTruthy();
});
