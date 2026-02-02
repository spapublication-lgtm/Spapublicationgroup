import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, GraduationCap, Award, ArrowRight, CheckCircle } from "lucide-react";

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
              Managing <span className="text-[#C5A059]">Director</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Meet the visionary leader who founded and leads SPA Publication Group towards excellence in academic publishing.
            </p>
          </div>
        </div>
      </section>

      {/* MD Profile Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-50 border-0 rounded-none overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-12">
                {/* Photo Section */}
                <div className="lg:col-span-4 bg-slate-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-56 h-56 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg overflow-hidden border-4 border-[#C5A059]">
                      <img 
                        src="https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/9976m38l_IMG-20260202-WA0005.jpg" 
                        alt="Karan Kaushal" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-[#C5A059] px-6 py-2 inline-block">
                      <Award className="w-5 h-5 text-slate-950 inline mr-2" />
                      <span className="text-slate-950 font-medium text-sm">Managing Director</span>
                    </div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="lg:col-span-8 p-8 md:p-10">
                  <h2 className="font-serif text-4xl font-medium text-slate-900 mb-2">Karan Kaushal</h2>
                  <p className="text-[#C5A059] font-medium text-lg mb-2">Founder & Managing Director</p>
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                    <GraduationCap className="w-4 h-4" />
                    <span>BA, LLB (Hons.) - Rayat Bahra Professional University</span>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Karan Kaushal is the Founder and Managing Director of SPA Publication Group, established in January 2025. A passionate law student with expertise in diplomacy, legal research, and practical implementation of laws, he leads all five publishing houses under the SPA umbrella.
                  </p>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    With experience in legal internships, political consulting, and youth engagement, he brings a unique blend of academic excellence and entrepreneurial vision to academic publishing. He is committed to promoting scholarly excellence and making quality academic publications accessible to researchers, educators, and students across India and internationally.
                  </p>

                  <div className="mb-6">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Areas of Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white text-slate-700 px-3 py-1 text-sm border border-slate-200">Legal Research</span>
                      <span className="bg-white text-slate-700 px-3 py-1 text-sm border border-slate-200">Academic Publishing</span>
                      <span className="bg-white text-slate-700 px-3 py-1 text-sm border border-slate-200">Diplomacy</span>
                      <span className="bg-white text-slate-700 px-3 py-1 text-sm border border-slate-200">Public Speaking</span>
                      <span className="bg-white text-slate-700 px-3 py-1 text-sm border border-slate-200">Youth Engagement</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <a href="mailto:directorspapublication@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-[#C5A059] text-sm">
                      <Mail className="w-4 h-4" /> directorspapublication@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-950 border-0 rounded-none overflow-hidden">
            <CardContent className="p-10 md:p-16">
              <div className="text-center">
                <Award className="w-16 h-16 text-[#C5A059] mx-auto mb-6" />
                <h3 className="font-serif text-3xl font-medium text-white mb-6">Message from the Managing Director</h3>
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
                  <p className="text-[#C5A059] font-medium">— Karan Kaushal</p>
                  <p className="text-slate-500 text-sm">Founder & Managing Director, SPA Publication Group</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Our Commitment</h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-950 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">Quality Publishing</h3>
              <p className="text-slate-500 text-sm">Maintaining highest standards in academic publishing with rigorous review processes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-950 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">Author Support</h3>
              <p className="text-slate-500 text-sm">Providing comprehensive support to authors throughout the publication journey.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-950 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">Global Reach</h3>
              <p className="text-slate-500 text-sm">Connecting scholars worldwide through national and international publishing platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium text-white mb-6">Connect With Us</h2>
          <p className="text-slate-400 text-lg mb-10">
            Have questions or want to discuss partnerships? Get in touch with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild data-testid="directors-contact-btn" className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-600 text-white hover:bg-white/10 rounded-none px-8 py-6">
              <Link to="/submission">Submit Manuscript</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
