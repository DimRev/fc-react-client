import { screen } from "@testing-library/react";

export const hasDesktopNav = () => {
  expect(screen.getByTestId("nav")).toBeInTheDocument();
  expect(screen.getByTestId("link-home")).toBeInTheDocument();
  expect(screen.getByTestId("link-about")).toBeInTheDocument();
  expect(screen.getByTestId("link-contact")).toBeInTheDocument();
};
export const notDesktopNav = () => {
  expect(screen.queryByTestId("nav")).not.toBeInTheDocument();
  expect(screen.queryByTestId("link-home")).not.toBeInTheDocument();
  expect(screen.queryByTestId("link-about")).not.toBeInTheDocument();
  expect(screen.queryByTestId("link-contact")).not.toBeInTheDocument();
};
export const hasMobileSheetNav = () => {
  expect(screen.getByTestId("nav-mobile-sheet-content")).toBeInTheDocument();
  expect(screen.getByTestId("link-home-mobile")).toBeInTheDocument();
  expect(screen.getByTestId("link-about-mobile")).toBeInTheDocument();
  expect(screen.getByTestId("link-contact-mobile")).toBeInTheDocument();
};
export const notMobileSheetNav = () => {
  expect(
    screen.queryByTestId("nav-mobile-sheet-content"),
  ).not.toBeInTheDocument();
  expect(screen.queryByTestId("link-home-mobile")).not.toBeInTheDocument();
  expect(screen.queryByTestId("link-about-mobile")).not.toBeInTheDocument();
  expect(screen.queryByTestId("link-contact-mobile")).not.toBeInTheDocument();
};

export const resizeWindow = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};
