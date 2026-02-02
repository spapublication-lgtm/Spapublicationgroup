import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Scale, GraduationCap, Globe, Award, ArrowRight } from "lucide-react";

export default function Companies() {
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
          <CompanyRow 
            slug="spa-publications"
            name="SPA Publications" 
            focus="Authored Books & Research Books" 
            scope="National Publication"
            icon={BookOpen}
            color="bg-amber-50 text-amber-700"
            description="SPA Publications specializes in publishing authored books and research monographs across diverse academic disciplines."
            manuscripts="Research Monographs, Authored Academic Books, Scholarly Treatises"
          />
          <CompanyRow 
            slug="legal-luminaries"
            name="Legal Luminaries Publication House" 
            focus="Edited Books Across All Subjects" 
            scope="National Publication"
            icon={Scale}
            color="bg-blue-50 text-blue-700"
            description="Legal Luminaries Publication House is dedicated to publishing high-quality edited volumes featuring contributions from multiple scholars."
            manuscripts="Edited Volumes, Multi-author Collections, Conference Proceedings"
          />
          <CompanyRow 
            slug="intellect-jurists"
            name="Intellect Jurists Publishers" 
            focus="Textbooks for All Academic Subjects" 
            scope="National Publication"
            icon={GraduationCap}
            color="bg-emerald-50 text-emerald-700"
            description="Intellect Jurists Publishers focuses on developing comprehensive textbooks for students and educators across all academic subjects."
            manuscripts="Academic Textbooks, Study Guides, Course Materials"
          />
          <CompanyRow 
            slug="blue-globe-international"
            name="Blue Globe International" 
            focus="All Types of International Publications" 
            scope="International Publication"
            icon={Globe}
            color="bg-sky-50 text-sky-700"
            description="Blue Globe International is our flagship international publishing division, handling all types of academic publications for the global market."
            manuscripts="International Research Papers, Global Collaborative Works, Cross-cultural Studies"
          />
          <CompanyRow 
            slug="aquitas-international"
            name="Aquitas International" 
            focus="Global & International Academic Publications" 
            scope="International Publication"
            icon={Award}
            color="bg-violet-50 text-violet-700"
            description="Aquitas International specializes in global academic publications with a focus on equity, fairness, and scholarly excellence."
            manuscripts="International Journals, Global Academic Books, Transnational Research"
          />
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

function CompanyRow({ slug, name, focus, scope, icon: Icon, color, description, manuscripts }) {
  const isInternational = scope.includes("International");
  const manuscriptList = manuscripts.split(", ");
  
  return (
    <Card className="bg-white border border-slate-100 rounded-none" data-testid={`company-row-${slug}`}>
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
            <div className={`w-16 h-16 flex items-center justify-center mb-6 ${color}`}>
              <Icon className="w-8 h-8" />
            </div>
            <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ${isInternational ? "bg-[#C5A059]/10 text-[#C5A059]" : "bg-slate-100 text-slate-600"}`}>
              {scope}
            </span>
            <h3 className="font-serif text-2xl font-medium text-slate-900 mb-2">{name}</h3>
            <p className="text-[#C5A059] font-medium text-sm">{focus}</p>
          </div>
          <div className="lg:col-span-8 p-8">
            <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
            <div className="mb-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Manuscripts Accepted</p>
              <div className="flex flex-wrap gap-2">
                {manuscriptList.map((item, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 text-sm">{item}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-6 py-4">
                <Link to={`/companies/${slug}`}>Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-300 text-slate-700 rounded-none px-6 py-4">
                <Link to="/submission">Submit Manuscript</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
