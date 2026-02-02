import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Mail, Phone, Briefcase, GraduationCap, Award, ArrowRight } from "lucide-react";

export default function Directors() {
  return (
    <div data-testid="directors-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Leadership</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white mb-6">
              Board of <span className="text-[#C5A059]">Directors</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Meet the visionary leaders who guide SPA Publication Group towards excellence in academic publishing.
            </p>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Our Directors</span>
            <h2 className="font-serif text-4xl font-medium text-slate-900 mt-3 mb-6">Guiding Vision & Leadership</h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </div>

          {/* Director Cards - Placeholder for actual directors */}
          <div className="space-y-12">
            {/* Managing Director */}
            <DirectorCard
              position="Managing Director"
              name="To Be Updated"
              qualifications="Details will be added soon"
              bio="The Managing Director oversees all operations of SPA Publication Group, ensuring excellence in academic publishing across all five publishing houses. They are responsible for strategic planning, business development, and maintaining the highest standards of scholarly publishing."
              expertise={["Strategic Leadership", "Academic Publishing", "Business Development", "Quality Assurance"]}
            />

            {/* Director of Publications */}
            <DirectorCard
              position="Director of Publications"
              name="To Be Updated"
              qualifications="Details will be added soon"
              bio="The Director of Publications manages the editorial and publication processes across all publishing houses. They work closely with authors, editors, and reviewers to ensure timely and quality publication of all manuscripts."
              expertise={["Editorial Management", "Peer Review Process", "Publication Standards", "Author Relations"]}
              reverse
            />

            {/* Director of International Operations */}
            <DirectorCard
              position="Director of International Operations"
              name="To Be Updated"
              qualifications="Details will be added soon"
              bio="The Director of International Operations heads Blue Globe International and Aquitas International, managing all international publishing activities and establishing global academic partnerships."
              expertise={["International Publishing", "Global Partnerships", "Cross-cultural Studies", "Academic Networks"]}
            />
          </div>
        </div>
      </section>

      {/* Message from Directors */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-950 border-0 rounded-none overflow-hidden">
            <CardContent className="p-10 md:p-16">
              <div className="text-center">
                <Award className="w-16 h-16 text-[#C5A059] mx-auto mb-6" />
                <h3 className="font-serif text-3xl font-medium text-white mb-6">Message from the Board</h3>
                <div className="w-16 h-[2px] bg-[#C5A059] mx-auto mb-8" />
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  "At SPA Publication Group, we are committed to advancing knowledge through quality academic publishing. 
                  Our mission is to provide a trusted platform for scholars, researchers, and educators to share their 
                  work with the world. We believe in maintaining the highest standards of academic integrity while 
                  making knowledge accessible to all."
                </p>
                <p className="text-slate-400 leading-relaxed">
                  "We invite researchers, academicians, and institutions to partner with us in this journey of 
                  promoting scholarly excellence across national and international platforms."
                </p>
                <div className="mt-8 pt-8 border-t border-slate-800">
                  <p className="text-[#C5A059] font-medium">— Board of Directors</p>
                  <p className="text-slate-500 text-sm">SPA Publication Group</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-[#C5A059]/10 border-[#C5A059]/20 rounded-none">
            <CardContent className="p-8">
              <p className="text-slate-700">
                <span className="font-semibold text-[#C5A059]">Note:</span> This page is being updated with detailed profiles 
                and photographs of our directors. Please check back soon for complete information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium text-white mb-6">Connect With Our Leadership</h2>
          <p className="text-slate-400 text-lg mb-10">
            Have questions or want to discuss partnerships? Get in touch with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild data-testid="directors-contact-btn" className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-600 text-white hover:bg-white/10 rounded-none px-8 py-6">
              <Link to="/office-bearers">View All Office Bearers</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function DirectorCard({ position, name, qualifications, bio, expertise, reverse = false }) {
  return (
    <Card className="bg-slate-50 border-0 rounded-none overflow-hidden">
      <CardContent className="p-0">
        <div className={`grid lg:grid-cols-12 ${reverse ? "lg:flex-row-reverse" : ""}`}>
          {/* Photo Section */}
          <div className={`lg:col-span-4 bg-slate-100 p-8 flex items-center justify-center ${reverse ? "lg:order-2" : ""}`}>
            <div className="text-center">
              <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <User className="w-24 h-24 text-slate-300" />
              </div>
              <div className="bg-[#C5A059] px-6 py-2 inline-block">
                <Briefcase className="w-5 h-5 text-slate-950 inline mr-2" />
                <span className="text-slate-950 font-medium text-sm">{position}</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className={`lg:col-span-8 p-8 md:p-10 ${reverse ? "lg:order-1" : ""}`}>
            <h3 className="font-serif text-3xl font-medium text-slate-900 mb-2">{name}</h3>
            <p className="text-[#C5A059] font-medium mb-2">{position}</p>
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>{qualifications}</span>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-6">{bio}</p>

            <div className="mb-6">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Areas of Expertise</p>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item, idx) => (
                  <span key={idx} className="bg-white text-slate-700 px-3 py-1 text-sm border border-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-200">
              <a href="mailto:spapublications@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-[#C5A059] text-sm">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="tel:+916284607500" className="flex items-center gap-2 text-slate-600 hover:text-[#C5A059] text-sm">
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
