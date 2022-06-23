import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Surreal Estate/i);
  expect(linkElement).toBeInTheDocument();
});
