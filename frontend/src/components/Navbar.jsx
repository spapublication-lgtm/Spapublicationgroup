import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + "/");

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Companies", path: "/companies" },
    { name: "Publications", path: "/publications" },
    { name: "Submission", path: "/submission" },
    { name: "Directors", path: "/directors" },
    { name: "Office Bearers", path: "/office-bearers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" data-testid="logo-link" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
              <span className="text-[#C5A059] font-serif font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-semibold text-slate-900">SPA Publication</p>
              <p className="text-xs text-slate-500 tracking-widest uppercase">Group</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  (link.path === "/" ? location.pathname === "/" : isActive(link.path))
                    ? "text-[#C5A059]"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-6">
              <Link to="/submission">Publish With Us</Link>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-900">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t py-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-medium ${
                  isActive(link.path) ? "text-[#C5A059] bg-slate-50" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button asChild className="w-full bg-slate-900 text-white rounded-none">
                <Link to="/submission">Publish With Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
