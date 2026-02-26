import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, UserPlus } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-destructive/40">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Rivi Topup Store logo" className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover" />
          <div className="flex flex-col leading-none">
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
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/signin">
            <Button variant="outline" className="border-border bg-secondary text-foreground hover:bg-secondary/80 font-body text-base rounded-full px-6 gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-body text-base rounded-full px-6 gap-2">
              <UserPlus className="h-4 w-4" />
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-lg font-medium ${
                    location.pathname === link.path ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-2">
                <Link to="/signin" className="flex-1">
                  <Button variant="outline" className="w-full border-border bg-secondary text-foreground font-body rounded-full gap-2">
                    <LogIn className="h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Link to="/register" className="flex-1">
                  <Button className="w-full bg-destructive text-destructive-foreground font-body rounded-full gap-2">
                    <UserPlus className="h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
