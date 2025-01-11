import { type PropsWithChildren } from "react";

function AppDiv({ children }: PropsWithChildren) {
  return <div className="container w-full py-2 max-sm:px-2">{children}</div>;
}

export default AppDiv;
