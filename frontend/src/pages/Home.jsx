import { Link } from "react-router-dom";
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
  Users,
  BookMarked,
  Building2,
} from "lucide-react";

const companies = [
  {
    name: "SPA Publications",
    slug: "spa-publications",
    focus: "Authored Books & Research Books",
    scope: "National",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Legal Luminaries",
    slug: "legal-luminaries",
    focus: "Edited Books Across All Subjects",
    scope: "National",
    icon: Scale,
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Intellect Jurists",
    slug: "intellect-jurists",
    focus: "Academic Textbooks",
    scope: "National",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Blue Globe International",
    slug: "blue-globe-international",
    focus: "International Publications",
    scope: "International",
    icon: Globe,
    color: "bg-sky-50 text-sky-700",
  },
  {
    name: "Aquitas International",
    slug: "aquitas-international",
    focus: "Global Academic Publications",
    scope: "International",
    icon: Award,
    color: "bg-violet-50 text-violet-700",
  },
];

const stats = [
  { label: "Publications", value: "500+", icon: BookMarked },
  { label: "Authors", value: "1000+", icon: Users },
  { label: "Companies", value: "5", icon: Building2 },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div data-testid="home-page" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1708548172199-72f7796d4206?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGlicmFyeSUyMGJvb2tzJTIwc2hlbHZlcyUyMGRhcmslMjBhY2FkZW1pYXxlbnwwfHx8fDE3NzAwMzY5Njh8MA&ixlib=rb-4.1.0&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
                  Excellence in Academic Publishing
                </span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6">
                SPA Publication
                <span className="block text-[#C5A059]">Group</span>
              </h1>

              <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                A premier academic publishing consortium dedicated to promoting scholarly
                excellence across national and international platforms. We transform ideas
                into impactful publications.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  data-testid="hero-publish-btn"
                  className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
                >
                  <Link to="/submission">
                    Publish With Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  data-testid="hero-publications-btn"
                  className="bg-transparent border-slate-600 text-white hover:bg-white/10 hover:border-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
                >
                  <Link to="/publications">View Publications</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5 hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C5A059]/30" />
                <img
                  src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzcwMDM2OTQ5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Professional publishing team"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <stat.icon className="w-6 h-6 text-[#C5A059] mx-auto mb-2" />
                  <p className="font-serif text-2xl sm:text-3xl font-medium text-white">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
                About Us
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 mt-3 mb-6">
                Advancing Knowledge Through Quality Publishing
              </h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                SPA Publication Group is a distinguished academic publishing consortium
                comprising five specialized publishing houses. We are committed to
                promoting scholarly excellence by providing a platform for researchers,
                academicians, and professionals to share their knowledge with the world.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                With expertise spanning national and international publications, we handle
                authored books, edited volumes, research monographs, and academic textbooks
                across all disciplines including legal studies, social sciences, humanities,
                and sciences.
              </p>
              <Button
                asChild
                data-testid="intro-learn-more-btn"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
              >
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
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
              Our Publishing Houses
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 mt-3 mb-6">
              Five Pillars of Excellence
            </h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto mb-6" />
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Each of our publishing houses specializes in different types of academic
              publications, ensuring comprehensive coverage of all scholarly needs.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.slug}
                variants={fadeInUp}
                className={index === 4 ? "lg:col-span-1 md:col-span-2 lg:col-span-1" : ""}
              >
                <Link to={`/companies/${company.slug}`} data-testid={`company-card-${company.slug}`}>
                  <Card className="h-full bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#C5A059]/30 hover:-translate-y-1 transition-all duration-300 rounded-none overflow-hidden group">
                    <CardContent className="p-8">
                      <div
                        className={`w-14 h-14 ${company.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                      >
                        <company.icon className="w-7 h-7" />
                      </div>
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4 ${
                          company.scope === "International"
                            ? "bg-[#C5A059]/10 text-[#C5A059]"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {company.scope}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-slate-900 mb-3 group-hover:text-[#C5A059] transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {company.focus}
                      </p>
                      <div className="mt-6 flex items-center text-[#C5A059] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              variant="outline"
              data-testid="view-all-companies-btn"
              className="border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-50 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
            >
              <Link to="/companies">
                View All Companies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1646310997905-14eb66d1e04a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGdvbGQlMjBuYXZ5JTIwYmx1ZSUyMGdlb21ldHJpYyUyMHRleHR1cmV8ZW58MHx8fHwxNzcwMDM2OTUzfDA&ixlib=rb-4.1.0&q=85')`,
            backgroundSize: "cover",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
              Start Your Journey
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mt-3 mb-6">
              Ready to Publish Your Work?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of researchers and academicians who have trusted us with their
              scholarly publications. Submit your manuscript today and let us help you reach
              a global audience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                data-testid="cta-submit-btn"
                className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
              >
                <Link to="/submission">
                  Submit Manuscript
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                data-testid="cta-contact-btn"
                className="bg-transparent border-slate-600 text-white hover:bg-white/10 hover:border-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
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
