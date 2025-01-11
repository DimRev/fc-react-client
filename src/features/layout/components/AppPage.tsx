import React, { type PropsWithChildren } from "react";

type Props = {
  testId?: string;
};

const AppPage = React.forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({ children, testId }, ref) => (
    <div
      ref={ref}
      className="h-main w-full overflow-y-auto"
      data-testid={testId}
    >
      <div className="flex flex-col items-center">{children}</div>
    </div>
  ),
);

export default AppPage;
