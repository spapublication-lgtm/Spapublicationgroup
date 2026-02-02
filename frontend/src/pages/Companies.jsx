import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${API}/companies`);
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
  }, []);

  const getColorClass = (index) => {
    const colors = [
      "bg-amber-50 text-amber-700",
      "bg-blue-50 text-blue-700",
      "bg-emerald-50 text-emerald-700",
      "bg-sky-50 text-sky-700",
      "bg-violet-50 text-violet-700",
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Loading companies...</p>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="companies-page" className="min-h-screen pt-20">
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
                Our Publishing Houses
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Five Pillars of<span className="text-[#C5A059]"> Excellence</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Each publishing house brings unique expertise, covering the spectrum of academic publishing needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-none overflow-hidden"
                  data-testid={`company-row-${company.slug}`}
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-12 gap-0">
                      <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                        <div className={`w-16 h-16 ${getColorClass(index)} flex items-center justify-center mb-6`}>
                          <BookOpen className="w-8 h-8" />
                        </div>
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ${
                            company.scope.includes("International")
                              ? "bg-[#C5A059]/10 text-[#C5A059]"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {company.scope}
                        </span>
                        <h3 className="font-serif text-2xl font-medium text-slate-900 mb-2">
                          {company.name}
                        </h3>
                        <p className="text-[#C5A059] font-medium text-sm">
                          {company.focus}
                        </p>
                      </div>

                      <div className="lg:col-span-8 p-8 flex flex-col justify-between">
                        <div>
                          <p className="text-slate-600 leading-relaxed mb-6">
                            {company.description}
                          </p>
                          <div className="mb-6">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                              Manuscripts Accepted
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {company.manuscripts_accepted.map((item) => (
                                <span key={item} className="bg-slate-100 text-slate-700 px-3 py-1 text-sm">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button
                            asChild
                            data-testid={`company-learn-more-${company.slug}`}
                            className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-6 py-4 text-sm font-medium tracking-wider uppercase"
                          >
                            <Link to={`/companies/${company.slug}`}>
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-slate-300 text-slate-700 hover:border-slate-900 rounded-none px-6 py-4 text-sm font-medium tracking-wider uppercase"
                          >
                            <Link to="/submission">Submit Manuscript</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
              Get Started
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mt-3 mb-6">
              Find the Right Publisher
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Contact us and our team will guide you to the most appropriate platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                data-testid="companies-contact-btn"
                className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
