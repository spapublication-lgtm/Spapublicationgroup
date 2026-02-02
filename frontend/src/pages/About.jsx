import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Globe, Award, Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div data-testid="about-page" className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">About Us</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Pioneering Academic <span className="text-[#C5A059]">Excellence</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              SPA Publication Group stands as a beacon of scholarly publishing, bringing together five distinguished publishing houses.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Our Story</h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                SPA Publication Group emerged from a vision to create a comprehensive academic publishing ecosystem. Our journey began with a single publishing house and has grown into five specialized entities.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Today, we serve authors and institutions across India and internationally, publishing research monographs, edited volumes, textbooks, and scholarly journals.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With state-of-the-art printing facilities and experienced editors, we ensure every publication meets the highest standards of academic excellence.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C5A059]/30" />
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800" alt="Team" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border border-slate-100">
              <div className="w-16 h-16 bg-slate-950 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-slate-900 mb-4">Our Vision</h3>
              <div className="w-12 h-[2px] bg-[#C5A059] mb-6" />
              <p className="text-slate-600 leading-relaxed">
                To be the leading academic publishing consortium in South Asia, recognized globally for scholarly excellence and innovation.
              </p>
            </div>
            <div className="bg-slate-950 p-10">
              <div className="w-16 h-16 bg-[#C5A059] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-slate-950" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-white mb-4">Our Mission</h3>
              <div className="w-12 h-[2px] bg-[#C5A059] mb-6" />
              <p className="text-slate-400 leading-relaxed">
                To provide researchers and academicians with a trusted platform for publishing, maintaining highest standards of academic integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">What We Stand For</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 mt-3 mb-6">Our Core Values</h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard icon={Award} title="Excellence" description="Highest standards of academic publishing" />
            <ValueCard icon={Heart} title="Integrity" description="Ethical practices and transparency" />
            <ValueCard icon={Globe} title="Global Reach" description="Connecting scholars worldwide" />
            <ValueCard icon={Users} title="Collaboration" description="Meaningful partnerships" />
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Our Expertise</span>
              <h2 className="font-serif text-4xl font-medium text-white mt-3 mb-6">Academic Disciplines</h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />
              <p className="text-slate-400 leading-relaxed mb-8">
                Our publishing houses cover a comprehensive range of academic disciplines.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Legal Studies", "Social Sciences", "Commerce & Management", "Science & Technology", "Education", "Political Science", "Economics", "Literature"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C5A059]" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-[#C5A059] p-8 text-center">
                  <BookOpen className="w-10 h-10 text-slate-950 mx-auto mb-4" />
                  <p className="font-serif text-3xl font-medium text-slate-950">500+</p>
                  <p className="text-slate-800 text-sm mt-2">Books Published</p>
                </div>
                <div className="bg-slate-800 p-8 text-center">
                  <Users className="w-10 h-10 text-[#C5A059] mx-auto mb-4" />
                  <p className="font-serif text-3xl font-medium text-white">1000+</p>
                  <p className="text-slate-400 text-sm mt-2">Happy Authors</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-slate-800 p-8 text-center">
                  <Award className="w-10 h-10 text-[#C5A059] mx-auto mb-4" />
                  <p className="font-serif text-3xl font-medium text-white">15+</p>
                  <p className="text-slate-400 text-sm mt-2">Years Experience</p>
                </div>
                <div className="bg-white p-8 text-center">
                  <Globe className="w-10 h-10 text-slate-900 mx-auto mb-4" />
                  <p className="font-serif text-3xl font-medium text-slate-900">10+</p>
                  <p className="text-slate-600 text-sm mt-2">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Ready to Join Our Publishing Family?</h2>
          <p className="text-slate-600 text-lg mb-10">
            Submit your manuscript today and let us help you share your work with the world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild data-testid="about-submit-btn" className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 py-6">
              <Link to="/submission">Submit Manuscript <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" data-testid="about-contact-btn" className="border-slate-300 text-slate-700 hover:border-slate-900 rounded-none px-8 py-6">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="text-center group">
      <div className="w-20 h-20 bg-slate-50 group-hover:bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-6 transition-colors">
        <Icon className="w-10 h-10 text-[#C5A059]" />
      </div>
      <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  );
}
