import { Link } from "react-router";
import { buttonVariants } from "~/features/shared/components/ui/button";

function AppHeader() {
  return (
    <header className="flex w-full justify-center border-b">
      <div className="container flex items-center justify-between">
        <div>Logo</div>
        <nav>
          <Link
            to="/"
            className={buttonVariants({ variant: "link" })}
            data-testid="link-home"
          >
            Home
          </Link>
          <Link
            to="/about"
            className={buttonVariants({ variant: "link" })}
            data-testid="link-about"
          >
            About
          </Link>
          <Link
            to="/contact"
            className={buttonVariants({ variant: "link" })}
            data-testid="link-contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
