import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, FileText, CheckCircle, AlertCircle, Send, ArrowRight, BookOpen, Clock, Shield } from "lucide-react";

export default function Submission() {
  return (
    <div data-testid="submission-page" className="min-h-screen pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Submit Your Work</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white mb-6">Manuscript Submission</h1>
            <p className="text-slate-400 text-lg">Follow our guidelines to submit your work for consideration.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-950 flex items-center justify-center">
                <Mail className="w-8 h-8 text-[#C5A059]" />
              </div>
              <div>
                <p className="text-slate-950/70 text-sm font-medium uppercase tracking-wider mb-1">Official Submission Email</p>
                <a href="mailto:submissionspapublication@gmail.com" data-testid="submission-email" className="text-slate-950 text-2xl md:text-3xl font-serif font-medium hover:underline">
                  submissionspapublication@gmail.com
                </a>
              </div>
            </div>
            <Button asChild data-testid="email-submit-btn" className="bg-slate-950 hover:bg-slate-800 text-white rounded-none px-8 py-6">
              <a href="mailto:submissionspapublication@gmail.com">Email Your Manuscript <Send className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Submission Guidelines</h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <GuidelineCard icon={Shield} title="Original Work" desc="Must be original and not published elsewhere." />
            <GuidelineCard icon={BookOpen} title="Complete Manuscript" desc="Include all chapters, references, appendices." />
            <GuidelineCard icon={FileText} title="Formatting" desc="Times New Roman, 12pt, double-spaced." />
            <GuidelineCard icon={Clock} title="Review Timeline" desc="Initial review: 2-4 weeks. Full review: 4-8 weeks." />
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-white mb-6">Submission Process</h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Prepare Manuscript", desc: "Format according to guidelines" },
              { step: 2, title: "Cover Letter", desc: "Brief description of your work" },
              { step: 3, title: "Author Details", desc: "Complete contact information" },
              { step: 4, title: "Send via Email", desc: "Submit to official address" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#C5A059] flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl font-bold text-slate-950">{item.step}</span>
                </div>
                <h3 className="text-white font-medium text-lg mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Manuscripts Accepted</h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: "Authored Books", publisher: "SPA Publications", desc: "Single or co-authored academic books" },
              { type: "Edited Volumes", publisher: "Legal Luminaries", desc: "Multi-author edited collections" },
              { type: "Textbooks", publisher: "Intellect Jurists", desc: "Academic textbooks and materials" },
              { type: "International Publications", publisher: "Blue Globe / Aquitas", desc: "Works targeting international audience" },
            ].map((item) => (
              <Card key={item.type} className="bg-white border rounded-none hover:shadow-lg transition-shadow">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-slate-900 mb-1">{item.type}</h3>
                    <p className="text-[#C5A059] text-sm font-medium mb-2">{item.publisher}</p>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-slate-950 border-0 rounded-none">
            <CardContent className="p-10">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-[#C5A059]" />
                <h3 className="font-serif text-2xl font-medium text-white">Important Information</h3>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5" />
                  <span>All submissions subject to peer review process.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5" />
                  <span>Plagiarism is strictly prohibited.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5" />
                  <span>Authors retain copyright while granting publication rights.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5" />
                  <span>Publication fees vary by type.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6">
                  <a href="mailto:submissionspapublication@gmail.com">Submit Now <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <Button asChild variant="outline" className="border-slate-600 text-white hover:bg-white/10 rounded-none px-8 py-6">
                  <Link to="/contact">Have Questions?</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function GuidelineCard({ icon: Icon, title, desc }) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 bg-slate-50 flex items-center justify-center mx-auto mb-6">
        <Icon className="w-10 h-10 text-[#C5A059]" />
      </div>
      <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  );
}
