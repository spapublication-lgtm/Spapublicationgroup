import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Our Companies",
    path: "/companies",
    dropdown: [
      { name: "SPA Publications", path: "/companies/spa-publications" },
      { name: "Legal Luminaries", path: "/companies/legal-luminaries" },
      { name: "Intellect Jurists", path: "/companies/intellect-jurists" },
      { name: "Blue Globe International", path: "/companies/blue-globe-international" },
      { name: "Aquitas International", path: "/companies/aquitas-international" },
    ],
  },
  { name: "Publications", path: "/publications" },
  { name: "Submission", path: "/submission" },
  { name: "Office Bearers", path: "/office-bearers" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            data-testid="logo-link"
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
              <span className="text-[#C5A059] font-serif font-bold text-xl">S</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-lg font-semibold text-slate-900 leading-tight">
                SPA Publication
              </p>
              <p className="text-xs text-slate-500 tracking-widest uppercase">
                Group
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                        isActive(link.path)
                          ? "text-[#C5A059]"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link
                        to={link.path}
                        className="w-full font-medium"
                        data-testid="nav-all-companies"
                      >
                        All Companies
                      </Link>
                    </DropdownMenuItem>
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link
                          to={item.path}
                          className="w-full"
                          data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`px-4 py-2 text-sm font-medium transition-colors nav-link ${
                    isActive(link.path)
                      ? "text-[#C5A059]"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              data-testid="nav-publish-btn"
              className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-6 py-2 text-sm font-medium tracking-wider uppercase"
            >
              <Link to="/submission">Publish With Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden bg-white border-t border-slate-100 py-4"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-[#C5A059] bg-slate-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-8">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-slate-500 hover:text-slate-900"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <Button
                asChild
                className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-none"
              >
                <Link to="/submission">Publish With Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
