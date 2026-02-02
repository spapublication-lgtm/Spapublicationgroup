import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API}/companies`)
      .then(res => setCompanies(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div data-testid="companies-page" className="min-h-screen pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Our Publishing Houses</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Five Pillars of <span className="text-[#C5A059]">Excellence</span>
            </h1>
            <p className="text-slate-400 text-lg">Each publishing house brings unique expertise.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {companies.map((company, idx) => (
            <Card key={company.id} className="bg-white border border-slate-100 rounded-none" data-testid={`company-row-${company.slug}`}>
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                    <div className={`w-16 h-16 flex items-center justify-center mb-6 ${getColor(idx)}`}>
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ${company.scope.includes("International") ? "bg-[#C5A059]/10 text-[#C5A059]" : "bg-slate-100 text-slate-600"}`}>
                      {company.scope}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-slate-900 mb-2">{company.name}</h3>
                    <p className="text-[#C5A059] font-medium text-sm">{company.focus}</p>
                  </div>
                  <div className="lg:col-span-8 p-8">
                    <p className="text-slate-600 leading-relaxed mb-6">{company.description}</p>
                    <div className="mb-6">
                      <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Manuscripts Accepted</p>
                      <div className="flex flex-wrap gap-2">
                        {company.manuscripts_accepted.map(item => (
                          <span key={item} className="bg-slate-100 text-slate-700 px-3 py-1 text-sm">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-6 py-4">
                        <Link to={`/companies/${company.slug}`}>Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
                      </Button>
                      <Button asChild variant="outline" className="border-slate-300 text-slate-700 rounded-none px-6 py-4">
                        <Link to="/submission">Submit Manuscript</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-medium text-white mb-6">Find the Right Publisher</h2>
          <p className="text-slate-400 text-lg mb-10">Contact us and we'll guide you to the right platform.</p>
          <Button asChild data-testid="companies-contact-btn" className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function getColor(idx) {
  const colors = ["bg-amber-50 text-amber-700", "bg-blue-50 text-blue-700", "bg-emerald-50 text-emerald-700", "bg-sky-50 text-sky-700", "bg-violet-50 text-violet-700"];
  return colors[idx % 5];
}
