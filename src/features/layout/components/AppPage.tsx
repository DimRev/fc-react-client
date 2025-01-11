import { type PropsWithChildren } from "react";

type Props = {
  testId?: string;
};

function AppPage({ children, testId }: PropsWithChildren<Props>) {
  return (
    <div className="flex w-full flex-col items-center" data-testid={testId}>
      {children}
    </div>
  );
}

export default AppPage;
