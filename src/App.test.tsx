import { render, screen } from "@testing-library/react";
import App from "./App";
import { act } from "react";
import { hasDesktopNav } from "./test/utils";

describe("Routing Tests", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("renders AppHeader with navigation links", () => {
    hasDesktopNav();
    expect(screen.getByTestId("page-home")).toBeInTheDocument();
  });

  test("navigates to HomePage when Home link is clicked", () => {
    hasDesktopNav();
    // Simulate a click on the Home link
    act(() => {
      screen.getByTestId("link-home").click();
    });
    hasDesktopNav();
    expect(screen.getByTestId("page-home")).toBeInTheDocument();
  });

  test("navigates to AboutPage when About link is clicked", () => {
    hasDesktopNav();
    // Simulate a click on the About link
    act(() => {
      screen.getByTestId("link-about").click();
    });
    hasDesktopNav();
    expect(screen.getByTestId("page-about")).toBeInTheDocument();
  });

  test("navigates to ContactPage when Contact link is clicked", () => {
    hasDesktopNav();
    // Simulate a click on the Contact link
    act(() => {
      screen.getByTestId("link-contact").click();
    });
    hasDesktopNav();
    expect(screen.getByTestId("page-contact")).toBeInTheDocument();
  });
});
