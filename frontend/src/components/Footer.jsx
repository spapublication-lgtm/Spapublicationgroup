import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/7cl4e1on_IMG-20250617-WA0005.jpg" 
                alt="SPA Publication Group" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-slate-400 text-sm">
              Premier academic publishing consortium dedicated to scholarly excellence.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-[#C5A059] text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-[#C5A059] text-sm">About Us</Link></li>
              <li><Link to="/publications" className="text-slate-400 hover:text-[#C5A059] text-sm">Publications</Link></li>
              <li><Link to="/submission" className="text-slate-400 hover:text-[#C5A059] text-sm">Submission</Link></li>
              <li><Link to="/directors" className="text-slate-400 hover:text-[#C5A059] text-sm">Directors</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-[#C5A059] text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Our Companies</h4>
            <ul className="space-y-3">
              <li><Link to="/companies/spa-publications" className="text-slate-400 hover:text-[#C5A059] text-sm">SPA Publications</Link></li>
              <li><Link to="/companies/legal-luminaries" className="text-slate-400 hover:text-[#C5A059] text-sm">Legal Luminaries</Link></li>
              <li><Link to="/companies/intellect-jurists" className="text-slate-400 hover:text-[#C5A059] text-sm">Intellect Jurists</Link></li>
              <li><Link to="/companies/blue-globe-international" className="text-slate-400 hover:text-[#C5A059] text-sm">Blue Globe International</Link></li>
              <li><Link to="/companies/aquitas-international" className="text-slate-400 hover:text-[#C5A059] text-sm">Aquitas International</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C5A059] mt-0.5" />
                <a href="mailto:spapublications@gmail.com" className="text-slate-300 text-sm hover:text-[#C5A059]">
                  spapublications@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C5A059] mt-0.5" />
                <a href="tel:+916284607500" className="text-slate-300 text-sm hover:text-[#C5A059]">
                  +91 6284607500
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] mt-0.5" />
                <span className="text-slate-300 text-sm">
                  #124A, 2B, Shivalik Avenue, Hoshiarpur, Punjab
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} SPA Publication Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
