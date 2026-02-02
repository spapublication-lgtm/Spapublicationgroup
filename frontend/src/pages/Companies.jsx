import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Scale,
  GraduationCap,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";

const companies = [
  {
    name: "SPA Publications",
    slug: "spa-publications",
    focus: "Authored Books & Research Books",
    scope: "National Publication",
    description:
      "SPA Publications specializes in publishing authored books and research monographs across diverse academic disciplines. We are committed to promoting original scholarly work that contributes to the advancement of knowledge at the national level.",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-700 border-amber-200",
    manuscripts: ["Research Monographs", "Authored Academic Books", "Scholarly Treatises"],
  },
  {
    name: "Legal Luminaries Publication House",
    slug: "legal-luminaries",
    focus: "Edited Books Across All Subjects",
    scope: "National Publication",
    description:
      "Legal Luminaries Publication House is dedicated to publishing high-quality edited volumes featuring contributions from multiple scholars. We cover all academic subjects with a special emphasis on legal studies and interdisciplinary research.",
    icon: Scale,
    color: "bg-blue-50 text-blue-700 border-blue-200",
    manuscripts: ["Edited Volumes", "Multi-author Collections", "Conference Proceedings"],
  },
  {
    name: "Intellect Jurists Publishers",
    slug: "intellect-jurists",
    focus: "Textbooks for All Academic Subjects",
    scope: "National Publication",
    description:
      "Intellect Jurists Publishers focuses on developing comprehensive textbooks for students and educators across all academic subjects. Our publications are designed to meet curriculum requirements while maintaining high academic standards.",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-700 border-emerald-200",
    manuscripts: ["Academic Textbooks", "Study Guides", "Course Materials"],
  },
  {
    name: "Blue Globe International",
    slug: "blue-globe-international",
    focus: "All Types of International Publications",
    scope: "International Publication",
    description:
      "Blue Globe International is our flagship international publishing division, handling all types of academic publications for the global market. We connect scholars worldwide and facilitate the dissemination of knowledge across borders.",
    icon: Globe,
    color: "bg-sky-50 text-sky-700 border-sky-200",
    manuscripts: ["International Research Papers", "Global Collaborative Works", "Cross-cultural Studies"],
  },
  {
    name: "Aquitas International",
    slug: "aquitas-international",
    focus: "Global & International Academic Publications",
    scope: "International Publication",
    description:
      "Aquitas International specializes in global academic publications with a focus on equity, fairness, and scholarly excellence. We publish works that address international issues and promote academic discourse across continents.",
    icon: Award,
    color: "bg-violet-50 text-violet-700 border-violet-200",
    manuscripts: ["International Journals", "Global Academic Books", "Transnational Research"],
  },
];

export default function Companies() {
  return (
    <div data-testid="companies-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1646310997905-14eb66d1e04a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGdvbGQlMjBuYXZ5JTIwYmx1ZSUyMGdlb21ldHJpYyUyMHRleHR1cmV8ZW58MHx8fHwxNzcwMDM2OTUzfDA&ixlib=rb-4.1.0&q=85')`,
            }}
          />
        </div>
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
                Our Publishing Houses
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Five Pillars of
              <span className="text-[#C5A059]"> Excellence</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Each of our publishing houses brings unique expertise and focus, collectively
              covering the entire spectrum of academic publishing needs from national to
              international platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-none overflow-hidden"
                  data-testid={`company-row-${company.slug}`}
                >
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-12 gap-0">
                      {/* Icon & Basic Info */}
                      <div className="lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
                        <div
                          className={`w-16 h-16 ${company.color} flex items-center justify-center mb-6`}
                        >
                          <company.icon className="w-8 h-8" />
                        </div>
                        <span
                          className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ${
                            company.scope.includes("International")
                              ? "bg-[#C5A059]/10 text-[#C5A059]"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {company.scope}
                        </span>
                        <h3 className="font-serif text-2xl font-medium text-slate-900 mb-2">
                          {company.name}
                        </h3>
                        <p className="text-[#C5A059] font-medium text-sm">
                          {company.focus}
                        </p>
                      </div>

                      {/* Description & CTA */}
                      <div className="lg:col-span-8 p-8 flex flex-col justify-between">
                        <div>
                          <p className="text-slate-600 leading-relaxed mb-6">
                            {company.description}
                          </p>
                          <div className="mb-6">
                            <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
                              Manuscripts Accepted
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {company.manuscripts.map((item) => (
                                <span
                                  key={item}
                                  className="bg-slate-100 text-slate-700 px-3 py-1 text-sm"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <Button
                            asChild
                            data-testid={`company-learn-more-${company.slug}`}
                            className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-6 py-4 text-sm font-medium tracking-wider uppercase"
                          >
                            <Link to={`/companies/${company.slug}`}>
                              Learn More
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="border-slate-300 text-slate-700 hover:border-slate-900 rounded-none px-6 py-4 text-sm font-medium tracking-wider uppercase"
                          >
                            <Link to="/submission">Submit Manuscript</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
              Get Started
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mt-3 mb-6">
              Find the Right Publisher for Your Work
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Not sure which publishing house suits your manuscript? Contact us and our
              team will guide you to the most appropriate platform for your academic work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                data-testid="companies-contact-btn"
                className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
              >
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-slate-600 text-white hover:bg-white/10 hover:border-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
              >
                <Link to="/submission">Submission Guidelines</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
