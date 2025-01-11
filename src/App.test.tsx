import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders AppHeader with navigation links", () => {
    expect(screen.getByTestId("link-home")).toBeInTheDocument();
    expect(screen.getByTestId("link-about")).toBeInTheDocument();
    expect(screen.getByTestId("link-contact")).toBeInTheDocument();
  });

  test("renders HomePage", () => {
    // Simulate a click on the Home link
    act(() => {
      screen.getByTestId("link-home").click();
    });
    expect(screen.getByTestId("page-home")).toBeInTheDocument();
  });

  test("renders AboutPage", () => {
    // Simulate a click on the About link
    act(() => {
      screen.getByTestId("link-about").click();
    });
    expect(screen.getByTestId("page-about")).toBeInTheDocument();
  });

  test("renders ContactPage", () => {
    // Simulate a click on the Contact link
    act(() => {
      screen.getByTestId("link-contact").click();
    });
    expect(screen.getByTestId("page-contact")).toBeInTheDocument();
  });
});
