import { render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter, useLocation, Routes, Route } from "react-router";
import AppHeader from "./AppHeader";
import {
  hasDesktopNav,
  hasMobileSheetNav,
  notDesktopNav,
  notMobileSheetNav,
  resizeWindow,
} from "~/test/utils";

describe("AppHeaderTests", () => {
  const CurrentPath = () => {
    const location = useLocation();
    return <div data-testid="current-path">{location.pathname}</div>;
  };

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<CurrentPath />} />
          <Route path="/about" element={<CurrentPath />} />
          <Route path="/contact" element={<CurrentPath />} />
        </Routes>
        <AppHeader />
      </MemoryRouter>,
    );
  });

  test("renders AppHeader", () => {
    expect(screen.getByTestId("app-header")).toBeInTheDocument();
  });

  // eslint-disable-next-line vitest/expect-expect
  test("desktop nav renders links", () => {
    act(() => {
      resizeWindow(1024);
    });
    notMobileSheetNav();
    hasDesktopNav();
  });

  test("navigate on desktop", () => {
    act(() => {
      resizeWindow(1024);
    });
    notMobileSheetNav();
    hasDesktopNav();
    // Navigate to About page
    act(() => {
      screen.getByTestId("link-about").click();
    });
    expect(screen.getByTestId("current-path")).toHaveTextContent("/about");
  });

  test("mobile nav renders links", () => {
    act(() => {
      resizeWindow(640);
    });
    notDesktopNav();
    notMobileSheetNav();
    expect(screen.getByTestId("nav-mobile-trigger")).toBeInTheDocument();
    act(() => {
      screen.getByTestId("nav-mobile-trigger").click();
    });
    hasMobileSheetNav();
    notDesktopNav();
  });

  test("navigate on mobile and close sheet", () => {
    act(() => {
      resizeWindow(640);
    });
    notDesktopNav();
    notMobileSheetNav();
    expect(screen.getByTestId("nav-mobile-trigger")).toBeInTheDocument();
    act(() => {
      screen.getByTestId("nav-mobile-trigger").click();
    });
    hasMobileSheetNav();
    notDesktopNav();
    // Navigate to About page
    act(() => {
      screen.getByTestId("link-about-mobile").click();
    });
    notMobileSheetNav();
    notDesktopNav();
    expect(screen.getByTestId("current-path")).toHaveTextContent("/about");
  });
});
