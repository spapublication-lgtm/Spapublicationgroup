import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Scale,
  GraduationCap,
  Globe,
  Award,
  ArrowRight,
  CheckCircle,
  FileText,
  Send,
} from "lucide-react";

const companiesData = {
  "spa-publications": {
    name: "SPA Publications",
    focus: "Authored Books & Research Books",
    scope: "National Publication",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-700",
    accentColor: "amber",
    description:
      "SPA Publications specializes in publishing authored books and research monographs across diverse academic disciplines. We are committed to promoting original scholarly work that contributes to the advancement of knowledge at the national level.",
    longDescription:
      "Established as the flagship entity of SPA Publication Group, SPA Publications has been at the forefront of academic publishing in India. We work closely with authors to transform their research and scholarly insights into professionally published books that meet international standards of quality and presentation.",
    manuscriptsAccepted: [
      "Research Monographs",
      "Authored Academic Books",
      "Scholarly Treatises",
      "Subject-specific Studies",
      "Doctoral Dissertations (Revised)",
      "Faculty Publications",
    ],
    features: [
      "Rigorous peer review process",
      "Professional editing and proofreading",
      "High-quality printing and binding",
      "ISBN allocation for all publications",
      "Distribution across major bookstores",
      "Online visibility and marketing support",
    ],
    process: [
      {
        step: 1,
        title: "Manuscript Submission",
        description: "Submit your complete manuscript via email with author details",
      },
      {
        step: 2,
        title: "Initial Review",
        description: "Our editorial team reviews the manuscript for suitability",
      },
      {
        step: 3,
        title: "Peer Review",
        description: "Subject experts evaluate the academic merit of your work",
      },
      {
        step: 4,
        title: "Editorial Process",
        description: "Professional editing, formatting, and design preparation",
      },
      {
        step: 5,
        title: "Publication",
        description: "Printing, ISBN allocation, and market distribution",
      },
    ],
  },
  "legal-luminaries": {
    name: "Legal Luminaries Publication House",
    focus: "Edited Books Across All Subjects",
    scope: "National Publication",
    icon: Scale,
    color: "bg-blue-50 text-blue-700",
    accentColor: "blue",
    description:
      "Legal Luminaries Publication House is dedicated to publishing high-quality edited volumes featuring contributions from multiple scholars. We cover all academic subjects with a special emphasis on legal studies and interdisciplinary research.",
    longDescription:
      "Legal Luminaries has established itself as a premier publisher of edited academic volumes. We specialize in bringing together diverse scholarly perspectives into cohesive publications that advance understanding in various fields. Our editorial expertise ensures that multi-author works maintain consistency and academic rigor throughout.",
    manuscriptsAccepted: [
      "Edited Volumes",
      "Multi-author Collections",
      "Conference Proceedings",
      "Legal Commentaries",
      "Festschrift Publications",
      "Thematic Anthologies",
    ],
    features: [
      "Expert editorial coordination",
      "Unified formatting for multi-author works",
      "Comprehensive indexing services",
      "ISBN and copyright management",
      "Author coordination support",
      "Wide academic distribution network",
    ],
    process: [
      {
        step: 1,
        title: "Proposal Submission",
        description: "Submit edited volume proposal with chapter outline",
      },
      {
        step: 2,
        title: "Proposal Review",
        description: "Editorial board evaluates the proposal's merit and scope",
      },
      {
        step: 3,
        title: "Chapter Collection",
        description: "Coordinate with contributors to gather all chapters",
      },
      {
        step: 4,
        title: "Editorial Review",
        description: "Individual chapter review and overall consistency check",
      },
      {
        step: 5,
        title: "Publication",
        description: "Final production, ISBN allocation, and distribution",
      },
    ],
  },
  "intellect-jurists": {
    name: "Intellect Jurists Publishers",
    focus: "Textbooks for All Academic Subjects",
    scope: "National Publication",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-700",
    accentColor: "emerald",
    description:
      "Intellect Jurists Publishers focuses on developing comprehensive textbooks for students and educators across all academic subjects. Our publications are designed to meet curriculum requirements while maintaining high academic standards.",
    longDescription:
      "Intellect Jurists is committed to supporting education through quality textbook publishing. We work with experienced educators to create textbooks that are pedagogically sound, up-to-date with current curricula, and accessible to students at various levels. Our textbooks are used in universities and colleges across the country.",
    manuscriptsAccepted: [
      "Academic Textbooks",
      "Study Guides",
      "Course Materials",
      "Educational Resources",
      "Reference Books",
      "Practical Manuals",
    ],
    features: [
      "Curriculum-aligned content development",
      "Pedagogical review by educators",
      "Student-friendly presentation",
      "Practice questions and assessments",
      "Teacher support materials",
      "Regular edition updates",
    ],
    process: [
      {
        step: 1,
        title: "Proposal Submission",
        description: "Submit textbook proposal with sample chapters",
      },
      {
        step: 2,
        title: "Curriculum Review",
        description: "Assessment of alignment with academic curricula",
      },
      {
        step: 3,
        title: "Development Phase",
        description: "Content development with editorial guidance",
      },
      {
        step: 4,
        title: "Review & Testing",
        description: "Expert review and classroom testing feedback",
      },
      {
        step: 5,
        title: "Publication",
        description: "Production, distribution to educational institutions",
      },
    ],
  },
  "blue-globe-international": {
    name: "Blue Globe International",
    focus: "All Types of International Publications",
    scope: "International Publication",
    icon: Globe,
    color: "bg-sky-50 text-sky-700",
    accentColor: "sky",
    description:
      "Blue Globe International is our flagship international publishing division, handling all types of academic publications for the global market. We connect scholars worldwide and facilitate the dissemination of knowledge across borders.",
    longDescription:
      "Blue Globe International represents SPA Publication Group's commitment to global academic publishing. We provide a platform for scholars to publish their work for international audiences, ensuring wider reach and impact. Our publications adhere to international standards and are distributed through global academic channels.",
    manuscriptsAccepted: [
      "International Research Papers",
      "Global Collaborative Works",
      "Cross-cultural Studies",
      "International Conference Proceedings",
      "Comparative Studies",
      "Global Policy Research",
    ],
    features: [
      "International distribution network",
      "Global peer review panel",
      "Multi-language support",
      "International indexing services",
      "Digital and print formats",
      "Global marketing reach",
    ],
    process: [
      {
        step: 1,
        title: "International Submission",
        description: "Submit manuscript with international scope documentation",
      },
      {
        step: 2,
        title: "Global Review",
        description: "Review by international panel of experts",
      },
      {
        step: 3,
        title: "Editorial Process",
        description: "International standards editing and formatting",
      },
      {
        step: 4,
        title: "Indexing",
        description: "Registration with international academic databases",
      },
      {
        step: 5,
        title: "Global Distribution",
        description: "Worldwide publication and distribution",
      },
    ],
  },
  "aquitas-international": {
    name: "Aquitas International",
    focus: "Global & International Academic Publications",
    scope: "International Publication",
    icon: Award,
    color: "bg-violet-50 text-violet-700",
    accentColor: "violet",
    description:
      "Aquitas International specializes in global academic publications with a focus on equity, fairness, and scholarly excellence. We publish works that address international issues and promote academic discourse across continents.",
    longDescription:
      "Aquitas International embodies our commitment to equitable global knowledge sharing. Named after the Latin word for fairness, we ensure that quality scholarship from all regions receives the international platform it deserves. Our focus is on publications that contribute to global understanding and cross-cultural academic dialogue.",
    manuscriptsAccepted: [
      "International Journals",
      "Global Academic Books",
      "Transnational Research",
      "International Policy Studies",
      "Comparative International Studies",
      "Global Development Research",
    ],
    features: [
      "Equitable publication opportunities",
      "Global scholarly network",
      "International citation tracking",
      "Open access options available",
      "Cross-continental collaborations",
      "Academic conference partnerships",
    ],
    process: [
      {
        step: 1,
        title: "Submission",
        description: "Submit manuscript through our international portal",
      },
      {
        step: 2,
        title: "Merit Review",
        description: "Evaluation based on scholarly merit and global relevance",
      },
      {
        step: 3,
        title: "Editorial Excellence",
        description: "World-class editorial processing",
      },
      {
        step: 4,
        title: "Global Indexing",
        description: "Registration with leading international indexes",
      },
      {
        step: 5,
        title: "Worldwide Reach",
        description: "Publication with global distribution and promotion",
      },
    ],
  },
};

export default function CompanyDetail() {
  const { slug } = useParams();
  const company = companiesData[slug];

  if (!company) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-slate-900 mb-4">Company Not Found</h1>
          <p className="text-slate-600 mb-8">
            The publishing house you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-slate-900 hover:bg-slate-800 rounded-none">
            <Link to="/companies">View All Companies</Link>
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = company.icon;

  return (
    <div data-testid={`company-detail-${slug}`} className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/companies"
              className="inline-flex items-center text-slate-400 hover:text-[#C5A059] mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to All Companies
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div
                className={`w-24 h-24 ${company.color} flex items-center justify-center flex-shrink-0`}
              >
                <IconComponent className="w-12 h-12" />
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ${
                    company.scope.includes("International")
                      ? "bg-[#C5A059]/20 text-[#C5A059]"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {company.scope}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-medium text-white mb-4">
                  {company.name}
                </h1>
                <p className="text-[#C5A059] text-lg font-medium">{company.focus}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl font-medium text-slate-900 mb-6">
                About This Publishing House
              </h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {company.description}
              </p>
              <p className="text-slate-600 leading-relaxed">{company.longDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-50 border-0 rounded-none">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-medium text-slate-900 mb-6">
                    Manuscripts We Accept
                  </h3>
                  <ul className="space-y-3">
                    {company.manuscriptsAccepted.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              What We Offer
            </span>
            <h2 className="font-serif text-4xl font-medium text-slate-900 mt-3 mb-6">
              Our Publishing Features
            </h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FileText className="w-8 h-8 text-[#C5A059] mb-4" />
                <p className="text-slate-700 font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How It Works
            </span>
            <h2 className="font-serif text-4xl font-medium text-white mt-3 mb-6">
              Publication Process
            </h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {company.process.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#C5A059] flex items-center justify-center mx-auto mb-4">
                    <span className="font-serif text-2xl font-bold text-slate-950">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-white font-medium mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
                {index < company.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-[2px] bg-slate-700 -translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Send className="w-16 h-16 text-[#C5A059] mx-auto mb-6" />
            <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">
              Ready to Submit Your Manuscript?
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              We're excited to review your scholarly work. Visit our submission page for
              detailed guidelines and submit your manuscript today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                data-testid="company-submit-btn"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
              >
                <Link to="/submission">
                  Submit Manuscript
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 text-slate-700 hover:border-slate-900 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
