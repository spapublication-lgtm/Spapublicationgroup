import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ArrowRight, CheckCircle, FileText, Send } from "lucide-react";

const companies = {
  "spa-publications": {
    name: "SPA Publications",
    focus: "Authored Books & Research Books",
    scope: "National Publication",
    description: "SPA Publications specializes in publishing authored books and research monographs across diverse academic disciplines. We are committed to promoting original scholarly work that contributes to the advancement of knowledge at the national level.",
  },
  "legal-luminaries": {
    name: "Legal Luminaries Publication House",
    focus: "Edited Books Across All Subjects",
    scope: "National Publication",
    description: "Legal Luminaries Publication House is dedicated to publishing high-quality edited volumes featuring contributions from multiple scholars. We cover all academic subjects with a special emphasis on legal studies.",
  },
  "intellect-jurists": {
    name: "Intellect Jurists Publishers",
    focus: "Textbooks for All Academic Subjects",
    scope: "National Publication",
    description: "Intellect Jurists Publishers focuses on developing comprehensive textbooks for students and educators across all academic subjects. Our publications are designed to meet curriculum requirements.",
  },
  "blue-globe-international": {
    name: "Blue Globe International",
    focus: "All Types of International Publications",
    scope: "International Publication",
    description: "Blue Globe International is our flagship international publishing division, handling all types of academic publications for the global market. We connect scholars worldwide.",
  },
  "aquitas-international": {
    name: "Aquitas International",
    focus: "Global & International Academic Publications",
    scope: "International Publication",
    description: "Aquitas International specializes in global academic publications with a focus on equity, fairness, and scholarly excellence. We publish works that address international issues.",
  },
};

export default function CompanyDetail() {
  const { slug } = useParams();
  const company = companies[slug];

  if (!company) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-slate-900 mb-4">Company Not Found</h1>
          <Button asChild className="bg-slate-900 rounded-none">
            <Link to="/companies">View All Companies</Link>
          </Button>
        </div>
      </div>
    );
  }

  const isInternational = company.scope.includes("International");

  return (
    <div data-testid={`company-detail-${slug}`} className="min-h-screen pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/companies" className="inline-flex items-center text-slate-400 hover:text-[#C5A059] mb-8">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Companies
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="w-24 h-24 bg-amber-50 text-amber-700 flex items-center justify-center">
              <BookOpen className="w-12 h-12" />
            </div>
            <div>
              <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ${isInternational ? "bg-[#C5A059]/20 text-[#C5A059]" : "bg-slate-800 text-slate-300"}`}>
                {company.scope}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-medium text-white mb-4">{company.name}</h1>
              <p className="text-[#C5A059] text-lg font-medium">{company.focus}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-medium text-slate-900 mb-6">About This Publishing House</h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed">{company.description}</p>
            </div>
            <Card className="bg-slate-50 border-0 rounded-none">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-medium text-slate-900 mb-6">Manuscripts We Accept</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5" /><span className="text-slate-600">Research Monographs</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5" /><span className="text-slate-600">Authored Academic Books</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5" /><span className="text-slate-600">Scholarly Treatises</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5" /><span className="text-slate-600">Subject-specific Studies</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Our Publishing Features</h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 border border-slate-100"><FileText className="w-8 h-8 text-[#C5A059] mb-4" /><p className="text-slate-700 font-medium">Rigorous peer review</p></div>
            <div className="bg-white p-6 border border-slate-100"><FileText className="w-8 h-8 text-[#C5A059] mb-4" /><p className="text-slate-700 font-medium">Professional editing</p></div>
            <div className="bg-white p-6 border border-slate-100"><FileText className="w-8 h-8 text-[#C5A059] mb-4" /><p className="text-slate-700 font-medium">High-quality printing</p></div>
            <div className="bg-white p-6 border border-slate-100"><FileText className="w-8 h-8 text-[#C5A059] mb-4" /><p className="text-slate-700 font-medium">ISBN allocation</p></div>
            <div className="bg-white p-6 border border-slate-100"><FileText className="w-8 h-8 text-[#C5A059] mb-4" /><p className="text-slate-700 font-medium">Wide distribution</p></div>
            <div className="bg-white p-6 border border-slate-100"><FileText className="w-8 h-8 text-[#C5A059] mb-4" /><p className="text-slate-700 font-medium">Marketing support</p></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Send className="w-16 h-16 text-[#C5A059] mx-auto mb-6" />
          <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Ready to Submit?</h2>
          <p className="text-slate-600 text-lg mb-10">Visit our submission page for guidelines.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild data-testid="company-submit-btn" className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 py-6">
              <Link to="/submission">Submit Manuscript <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300 text-slate-700 rounded-none px-8 py-6">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
