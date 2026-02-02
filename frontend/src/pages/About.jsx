import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  Globe,
  Award,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards of academic publishing, ensuring every publication meets rigorous quality benchmarks.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We uphold ethical publishing practices, transparency, and honesty in all our operations and dealings.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "We connect scholars worldwide, facilitating the dissemination of knowledge across borders and cultures.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We foster meaningful partnerships with authors, editors, and institutions to create impactful publications.",
  },
];

const expertise = [
  "Legal Studies & Jurisprudence",
  "Social Sciences & Humanities",
  "Commerce & Management",
  "Science & Technology",
  "Education & Pedagogy",
  "Political Science & Public Policy",
  "Economics & Finance",
  "Literature & Languages",
];

export default function About() {
  return (
    <div data-testid="about-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1708548172199-72f7796d4206?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGlicmFyeSUyMGJvb2tzJTIwc2hlbHZlcyUyMGRhcmslMjBhY2FkZW1pYXxlbnwwfHx8fDE3NzAwMzY5Njh8MA&ixlib=rb-4.1.0&q=85')`,
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
                About Us
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Pioneering Academic
              <span className="text-[#C5A059]"> Excellence</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              SPA Publication Group stands as a beacon of scholarly publishing, bringing
              together five distinguished publishing houses under one umbrella to serve
              the global academic community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">
                Our Story
              </h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                SPA Publication Group emerged from a vision to create a comprehensive
                academic publishing ecosystem that caters to the diverse needs of
                scholars, researchers, and educators. Our journey began with a single
                publishing house and has grown into a consortium of five specialized
                entities.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Today, we proudly serve authors and institutions across India and
                internationally, publishing a wide range of academic works including
                research monographs, edited volumes, textbooks, and scholarly journals.
                Our commitment to quality and our understanding of academic needs have
                made us a trusted name in the publishing industry.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With state-of-the-art printing facilities and a team of experienced
                editors and reviewers, we ensure that every publication meets the
                highest standards of academic excellence and professional presentation.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#C5A059]/30" />
              <img
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nJTIwZGl2ZXJzZSUyMHByb2Zlc3Npb25hbHN8ZW58MHx8fHwxNzcwMDM2OTQ5fDA&ixlib=rb-4.1.0&q=85"
                alt="Our professional team"
                className="w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              className="bg-white p-10 border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-slate-950 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-slate-900 mb-4">
                Our Vision
              </h3>
              <div className="w-12 h-[2px] bg-[#C5A059] mb-6" />
              <p className="text-slate-600 leading-relaxed">
                To be the leading academic publishing consortium in South Asia, recognized
                globally for our commitment to scholarly excellence, innovation in
                publishing, and contribution to the advancement of knowledge across all
                disciplines.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="bg-slate-950 p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-[#C5A059] flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-slate-950" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-white mb-4">
                Our Mission
              </h3>
              <div className="w-12 h-[2px] bg-[#C5A059] mb-6" />
              <p className="text-slate-400 leading-relaxed">
                To provide researchers, academicians, and professionals with a trusted
                platform for publishing their scholarly works; to maintain the highest
                standards of academic integrity and quality; and to facilitate the global
                dissemination of knowledge through innovative publishing solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              What We Stand For
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-slate-900 mt-3 mb-6">
              Our Core Values
            </h2>
            <div className="w-16 h-[3px] bg-[#C5A059] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-slate-50 group-hover:bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-6 transition-colors">
                  <value.icon className="w-10 h-10 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
                Our Expertise
              </span>
              <h2 className="font-serif text-4xl font-medium text-white mt-3 mb-6">
                Academic Disciplines We Cover
              </h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />
              <p className="text-slate-400 leading-relaxed mb-8">
                Our publishing houses collectively cover a comprehensive range of academic
                disciplines, ensuring that scholars from all fields find a suitable
                platform for their work.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
                  <p className="text-slate-600 text-sm mt-2">Countries Reached</p>
                </div>
              </div>
            </motion.div>
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
            <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">
              Ready to Join Our Publishing Family?
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Whether you're an established researcher or an emerging scholar, we welcome
              your manuscript submissions and look forward to helping you share your work
              with the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                data-testid="about-submit-btn"
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
                data-testid="about-contact-btn"
                className="border-slate-300 text-slate-700 hover:border-slate-900 hover:bg-slate-50 rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase"
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
