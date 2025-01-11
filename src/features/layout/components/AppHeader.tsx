import { Link, useNavigate } from "react-router";
import { Button, buttonVariants } from "~/features/shared/components/ui/button";
import { Menu, Volleyball } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "~/features/shared/components/ui/sheet";
import { useEffect, useState } from "react";

function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function mobileNav(route: string) {
    setIsOpen(false);
    navigate(route);
  }

  return (
    <header
      className="h-header flex w-full justify-center border-b"
      data-testid="app-header"
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Volleyball />
        </Link>
        {isMobile ? (
          <nav data-testid="nav-mobile">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  data-testid="nav-mobile-trigger"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="flex flex-col gap-1"
                data-testid="nav-mobile-sheet-content"
              >
                <SheetTitle>Navigation</SheetTitle>
                <div className="flex flex-1 flex-col gap-1">
                  <Button
                    variant="link"
                    onClick={() => mobileNav("/")}
                    data-testid="link-home-mobile"
                  >
                    Home
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => mobileNav("/about")}
                    data-testid="link-about-mobile"
                  >
                    About
                  </Button>
                  <Button
                    variant="link"
                    onClick={() => mobileNav("/contact")}
                    data-testid="link-contact-mobile"
                  >
                    Contact
                  </Button>
                </div>
                <SheetDescription>Click outside to close</SheetDescription>
              </SheetContent>
            </Sheet>
          </nav>
        ) : (
          <nav data-testid="nav">
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
        )}
      </div>
    </header>
  );
}

export default AppHeader;
