import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Companies", path: "/companies" },
  { name: "Publications", path: "/publications" },
  { name: "Submission", path: "/submission" },
  { name: "Contact", path: "/contact" },
];

const companies = [
  { name: "SPA Publications", path: "/companies/spa-publications" },
  { name: "Legal Luminaries", path: "/companies/legal-luminaries" },
  { name: "Intellect Jurists", path: "/companies/intellect-jurists" },
  { name: "Blue Globe International", path: "/companies/blue-globe-international" },
  { name: "Aquitas International", path: "/companies/aquitas-international" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="bg-slate-950 text-slate-300 footer-pattern">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#C5A059] flex items-center justify-center">
                <span className="text-slate-950 font-serif font-bold text-2xl">S</span>
              </div>
              <div>
                <p className="font-serif text-xl font-semibold text-white leading-tight">
                  SPA Publication
                </p>
                <p className="text-xs text-slate-400 tracking-widest uppercase">
                  Group
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A premier academic publishing consortium dedicated to promoting scholarly excellence
              across national and international platforms.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-[#C5A059]"></div>
              <span className="text-xs tracking-widest uppercase text-[#C5A059]">
                Excellence in Publishing
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-400 hover:text-[#C5A059] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Companies */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-6">
              Our Companies
            </h4>
            <ul className="space-y-3">
              {companies.map((company) => (
                <li key={company.path}>
                  <Link
                    to={company.path}
                    data-testid={`footer-company-${company.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-400 hover:text-[#C5A059] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:spapublications@gmail.com"
                    data-testid="footer-email"
                    className="text-slate-300 hover:text-[#C5A059] transition-colors text-sm"
                  >
                    spapublications@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+916284607500"
                    data-testid="footer-phone"
                    className="text-slate-300 hover:text-[#C5A059] transition-colors text-sm"
                  >
                    +91 6284607500
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">
                    Head Office
                  </p>
                  <p className="text-slate-300 text-sm">
                    #124A, 2B, Shivalik Avenue,
                    <br />
                    Hoshiarpur, Punjab
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {currentYear} SPA Publication Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/about"
                className="text-slate-500 hover:text-[#C5A059] transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/about"
                className="text-slate-500 hover:text-[#C5A059] transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
