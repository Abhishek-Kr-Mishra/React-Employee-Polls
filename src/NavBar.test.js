import { render, screen } from "@testing-library/react";
import Nav from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("Nav component has three nav links", () => {
  const logout = {};
  render(
    <Router>
      <Nav currentUser={""} logout={logout} />
    </Router>
  );

  let navLinks = screen.queryAllByTestId("navLink");
  expect(navLinks.length).toBe(3);
});

test("Nav component", () => {
  const logout = {};
  render(
    <Router>
      <Nav currentUser={"Abhishek"} logout={logout} />
    </Router>
  );
  expect(screen.getByTestId('welcome-message')).toHaveTextContent('Welcome, Abhishek')
});
