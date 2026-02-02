import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Scale, GraduationCap, Globe, Award, ArrowRight, Users, BookMarked, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
                Excellence in Academic Publishing
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
              SPA Publication <span className="text-[#C5A059]">Group</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              A premier academic publishing consortium dedicated to promoting scholarly
              excellence across national and international platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild data-testid="hero-publish-btn" className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase">
                <Link to="/submission">Publish With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" data-testid="hero-publications-btn" className="border-slate-600 text-white hover:bg-white/10 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase">
                <Link to="/publications">View Publications</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <BookMarked className="w-6 h-6 text-[#C5A059] mx-auto mb-2" />
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">500+</p>
                <p className="text-slate-400 text-sm">Publications</p>
              </div>
              <div>
                <Users className="w-6 h-6 text-[#C5A059] mx-auto mb-2" />
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">1000+</p>
                <p className="text-slate-400 text-sm">Authors</p>
              </div>
              <div>
                <Building2 className="w-6 h-6 text-[#C5A059] mx-auto mb-2" />
                <p className="font-serif text-2xl sm:text-3xl font-medium text-white">5</p>
                <p className="text-slate-400 text-sm">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">About Us</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 mt-3 mb-6">
                Advancing Knowledge Through Publishing
              </h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                SPA Publication Group is a distinguished academic publishing consortium
                comprising five specialized publishing houses. We promote scholarly excellence
                by providing a platform for researchers, academicians, and professionals.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We handle authored books, edited volumes, research monographs, and academic textbooks
                across all disciplines including legal studies, social sciences, humanities, and sciences.
              </p>
              <Button asChild data-testid="intro-learn-more-btn" className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase">
                <Link to="/about">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-slate-100 p-8 text-center">
                  <p className="font-serif text-4xl font-medium text-[#C5A059]">15+</p>
                  <p className="text-slate-600 text-sm mt-2">Years Experience</p>
                </div>
                <div className="bg-slate-950 p-8 text-center">
                  <p className="font-serif text-4xl font-medium text-[#C5A059]">50+</p>
                  <p className="text-slate-300 text-sm mt-2">Subject Areas</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-[#C5A059] p-8 text-center">
                  <p className="font-serif text-4xl font-medium text-slate-950">200+</p>
                  <p className="text-slate-800 text-sm mt-2">Institutions</p>
                </div>
                <div className="bg-slate-100 p-8 text-center">
                  <p className="font-serif text-4xl font-medium text-slate-900">10+</p>
                  <p className="text-slate-600 text-sm mt-2">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Our Publishing Houses</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 mt-3 mb-6">Five Pillars of Excellence</h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto mb-6" />
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Each publishing house specializes in different types of academic publications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CompanyCard 
              name="SPA Publications" 
              focus="Authored Books & Research" 
              scope="National" 
              slug="spa-publications" 
              logoUrl="https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/7cl4e1on_IMG-20250617-WA0005.jpg"
            />
            <CompanyCard 
              name="Legal Luminaries" 
              focus="Edited Books All Subjects" 
              scope="National" 
              slug="legal-luminaries" 
              logoUrl="https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/igfim3dc_1.png"
            />
            <CompanyCard 
              name="Intellect Jurists" 
              focus="Academic Textbooks" 
              scope="National" 
              slug="intellect-jurists" 
              logoUrl="https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/mqtsm5l5_2.png"
            />
            <CompanyCard icon={Globe} name="Blue Globe International" focus="International Publications" scope="International" slug="blue-globe-international" color="bg-sky-50 text-sky-700" />
            <CompanyCard icon={Award} name="Aquitas International" focus="Global Academic Publications" scope="International" slug="aquitas-international" color="bg-violet-50 text-violet-700" />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" data-testid="view-all-companies-btn" className="border-slate-300 text-slate-700 hover:border-slate-900 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase">
              <Link to="/companies">View All Companies <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Start Your Journey</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mt-3 mb-6">Ready to Publish Your Work?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of researchers who have trusted us with their scholarly publications.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild data-testid="cta-submit-btn" className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase">
              <Link to="/submission">Submit Manuscript <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" data-testid="cta-contact-btn" className="border-slate-600 text-white hover:bg-white/10 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CompanyCard({ icon: Icon, name, focus, scope, slug, color, logoUrl }) {
  return (
    <Link to={`/companies/${slug}`} data-testid={`company-card-${slug}`}>
      <Card className="h-full bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#C5A059]/30 hover:-translate-y-1 transition-all duration-300 rounded-none overflow-hidden group">
        <CardContent className="p-8">
          {logoUrl ? (
            <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform overflow-hidden">
              <img src={logoUrl} alt={name} className="w-full h-full object-contain p-1" />
            </div>
          ) : (
            <div className={`w-14 h-14 ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <Icon className="w-7 h-7" />
            </div>
          )}
          <span className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ${scope === "International" ? "bg-[#C5A059]/10 text-[#C5A059]" : "bg-slate-100 text-slate-600"}`}>
            {scope}
          </span>
          <h3 className="font-serif text-xl font-medium text-slate-900 mb-3 group-hover:text-[#C5A059] transition-colors">{name}</h3>
          <p className="text-slate-500 text-sm">{focus}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
