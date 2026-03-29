import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 section-padding">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Muskoka Improvements"
            className="h-10"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
          >
            Home
          </Link>
          <Link
            to="/property-management"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${isActive("/property-management") ? "text-primary" : "text-muted-foreground"}`}
          >
            Property Management
          </Link>
          <Link
            to="/weekly-garbage"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${isActive("/weekly-garbage") ? "text-primary" : "text-muted-foreground"}`}
          >
            Weekly Garbage
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${isActive("/projects") ? "text-primary" : "text-muted-foreground"}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold tracking-wide uppercase px-6 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact
          </Link>
          <a
            href="https://www.portal.muskokaimprovements.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary text-muted-foreground ml-auto"
          >
            Client Portal
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="section-padding py-6 flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase text-foreground hover:text-primary">Home</Link>
              <Link to="/property-management" onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase text-foreground hover:text-primary">Property Management</Link>
              <Link to="/weekly-garbage" onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase text-foreground hover:text-primary">Weekly Garbage</Link>
              <Link to="/projects" onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase text-foreground hover:text-primary">Projects</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="text-sm font-semibold uppercase px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-center hover:bg-primary/90">Contact</Link>
              <a href="https://www.portal.muskokaimprovements.com" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className="text-sm font-medium uppercase text-foreground hover:text-primary">Client Portal</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
