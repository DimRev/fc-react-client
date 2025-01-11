import React, { type PropsWithChildren } from "react";

const AppHero = React.forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => (
    <div
      ref={ref}
      className="sticky top-0 flex w-full justify-center bg-gradient-to-r from-blue-500 to-green-500 py-3"
    >
      <div className="container max-sm:px-2">{children}</div>
    </div>
  ),
);

export default AppHero;
