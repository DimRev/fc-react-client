import { render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter, useLocation, Routes, Route } from "react-router";
import AppHeader from "./AppHeader";

describe("AppHeaderTests", () => {
  const resizeWindow = (width: number) => {
    window.innerWidth = width;
    window.dispatchEvent(new Event("resize"));
  };

  const CurrentPath = () => {
    const location = useLocation();
    return <div data-testid="current-path">{location.pathname}</div>;
  };

  const hasDesktopNav = () => {
    expect(screen.getByTestId("nav")).toBeInTheDocument();
    expect(screen.getByTestId("link-home")).toBeInTheDocument();
    expect(screen.getByTestId("link-about")).toBeInTheDocument();
    expect(screen.getByTestId("link-contact")).toBeInTheDocument();
  };
  const notDesktopNav = () => {
    expect(screen.queryByTestId("nav")).not.toBeInTheDocument();
    expect(screen.queryByTestId("link-home")).not.toBeInTheDocument();
    expect(screen.queryByTestId("link-about")).not.toBeInTheDocument();
    expect(screen.queryByTestId("link-contact")).not.toBeInTheDocument();
  };
  const hasMobileSheetNav = () => {
    expect(screen.getByTestId("nav-mobile-sheet-content")).toBeInTheDocument();
    expect(screen.getByTestId("link-home-mobile")).toBeInTheDocument();
    expect(screen.getByTestId("link-about-mobile")).toBeInTheDocument();
    expect(screen.getByTestId("link-contact-mobile")).toBeInTheDocument();
  };
  const notMobileSheetNav = () => {
    expect(
      screen.queryByTestId("nav-mobile-sheet-content"),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("link-home-mobile")).not.toBeInTheDocument();
    expect(screen.queryByTestId("link-about-mobile")).not.toBeInTheDocument();
    expect(screen.queryByTestId("link-contact-mobile")).not.toBeInTheDocument();
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
