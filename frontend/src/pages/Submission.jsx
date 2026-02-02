import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  FileText,
  CheckCircle,
  AlertCircle,
  Send,
  ArrowRight,
  BookOpen,
  Clock,
  Shield,
} from "lucide-react";

const submissionGuidelines = [
  {
    title: "Original Work",
    description:
      "Manuscripts must be original and not published or under consideration elsewhere.",
    icon: Shield,
  },
  {
    title: "Complete Manuscript",
    description:
      "Submit complete manuscripts including all chapters, references, and appendices.",
    icon: BookOpen,
  },
  {
    title: "Formatting",
    description:
      "Use standard academic formatting (Times New Roman, 12pt, double-spaced).",
    icon: FileText,
  },
  {
    title: "Review Timeline",
    description:
      "Initial review takes 2-4 weeks. Full peer review may take 4-8 weeks.",
    icon: Clock,
  },
];

const manuscriptTypes = [
  {
    type: "Authored Books",
    publisher: "SPA Publications",
    description: "Single or co-authored academic books and research monographs",
  },
  {
    type: "Edited Volumes",
    publisher: "Legal Luminaries",
    description: "Multi-author edited collections and conference proceedings",
  },
  {
    type: "Textbooks",
    publisher: "Intellect Jurists",
    description: "Academic textbooks and educational materials",
  },
  {
    type: "International Publications",
    publisher: "Blue Globe / Aquitas",
    description: "Works targeting international academic audience",
  },
];

const submissionSteps = [
  {
    step: 1,
    title: "Prepare Your Manuscript",
    description: "Ensure your manuscript is complete and properly formatted according to our guidelines.",
  },
  {
    step: 2,
    title: "Write a Cover Letter",
    description: "Include a brief description of your work, its significance, and target audience.",
  },
  {
    step: 3,
    title: "Attach Author Details",
    description: "Provide complete author information including affiliations and contact details.",
  },
  {
    step: 4,
    title: "Send via Email",
    description: "Email your complete submission to our official submission address.",
  },
];

export default function Submission() {
  return (
    <div data-testid="submission-page" className="min-h-screen pt-20">
      {/* Hero Section */}
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
                Submit Your Work
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Manuscript Submission
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              We welcome manuscript submissions from researchers, academicians, and scholars
              worldwide. Follow our guidelines to submit your work for consideration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Email Highlight Section */}
      <section className="py-16 bg-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-950 flex items-center justify-center">
                <Mail className="w-8 h-8 text-[#C5A059]" />
              </div>
              <div>
                <p className="text-slate-950/70 text-sm font-medium uppercase tracking-wider mb-1">
                  Official Submission Email
                </p>
                <a
                  href="mailto:submissionspapublication@gmail.com"
                  data-testid="submission-email"
                  className="text-slate-950 text-2xl md:text-3xl font-serif font-medium hover:underline"
                >
                  submissionspapublication@gmail.com
                </a>
              </div>
            </div>
            <Button
              asChild
              data-testid="email-submit-btn"
              className="bg-slate-950 hover:bg-slate-800 text-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
            >
              <a href="mailto:submissionspapublication@gmail.com">
                Email Your Manuscript
                <Send className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
              Before You Submit
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 mt-3 mb-6">
              Submission Guidelines
            </h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {submissionGuidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-slate-50 flex items-center justify-center mx-auto mb-6">
                  <guideline.icon className="w-10 h-10 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">
                  {guideline.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {guideline.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Process */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
              How to Submit
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mt-3 mb-6">
              Submission Process
            </h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {submissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C5A059] flex items-center justify-center mx-auto mb-6">
                    <span className="font-serif text-2xl font-bold text-slate-950">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-white font-medium text-lg mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
                {index < submissionSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-slate-700 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manuscript Types */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
              What We Publish
            </span>
            <h2 className="font-serif text-4xl font-medium text-slate-900 mt-3 mb-6">
              Types of Manuscripts Accepted
            </h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {manuscriptTypes.map((item, index) => (
              <motion.div
                key={item.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border border-slate-100 rounded-none hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C5A059]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-[#C5A059]" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-medium text-slate-900 mb-1">
                          {item.type}
                        </h3>
                        <p className="text-[#C5A059] text-sm font-medium mb-2">
                          {item.publisher}
                        </p>
                        <p className="text-slate-500 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-950 border-0 rounded-none overflow-hidden">
              <CardContent className="p-10">
                <div className="flex items-start gap-4 mb-6">
                  <AlertCircle className="w-8 h-8 text-[#C5A059] flex-shrink-0" />
                  <h3 className="font-serif text-2xl font-medium text-white">
                    Important Information
                  </h3>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                    <span>
                      All submissions are subject to initial screening and peer review process.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                    <span>
                      Plagiarism is strictly prohibited. All manuscripts are checked for originality.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                    <span>
                      Authors retain copyright while granting publication rights to us.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                    <span>
                      Publication fees vary by type and will be discussed after acceptance.
                    </span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
                  >
                    <a href="mailto:submissionspapublication@gmail.com">
                      Submit Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent border-slate-600 text-white hover:bg-white/10 hover:border-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
                  >
                    <Link to="/contact">Have Questions?</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
