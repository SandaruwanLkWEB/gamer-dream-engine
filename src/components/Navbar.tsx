import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-destructive/40">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex flex-col leading-none">
          <span
            className="font-display text-3xl md:text-4xl font-bold tracking-wide"
            style={{
              lineHeight: 1,
              background: "linear-gradient(180deg, #ff6b6b 0%, #cc2a2a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "none",
            }}
          >
            RIVI TOPUP
          </span>
          <span className="text-xs md:text-sm font-body font-semibold text-foreground tracking-[0.45em] uppercase mt-1">
            STORE
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link to="/signin">
            <Button variant="outline" className="border-border bg-secondary text-foreground hover:bg-secondary/80 font-body text-sm md:text-base rounded-full px-4 md:px-6 gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-body text-sm md:text-base rounded-full px-4 md:px-6 gap-2">
              <UserPlus className="h-4 w-4" />
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
