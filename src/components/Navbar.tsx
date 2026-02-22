import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Store } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <Store className="h-8 w-8 text-primary" />
          <span className="font-display text-2xl font-bold text-primary text-glow">
            Rivistore
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-lg font-medium transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary text-glow"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/register">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-display text-base">
              Register
            </Button>
          </Link>
          <Link to="/signin">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/80 font-display text-base box-glow">
              Sign In
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
            className="md:hidden glass border-t border-border"
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
                <Link to="/register" className="flex-1">
                  <Button variant="outline" className="w-full border-primary text-primary font-display">
                    Register
                  </Button>
                </Link>
                <Link to="/signin" className="flex-1">
                  <Button className="w-full bg-primary text-primary-foreground font-display">
                    Sign In
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
