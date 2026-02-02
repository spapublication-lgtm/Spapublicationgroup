import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BookMarked, FileText, ArrowRight, User, Calendar } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Sample publications data (will be fetched from API when available)
const samplePublications = [
  {
    id: "1",
    title: "Principles of Constitutional Law",
    author: "Dr. Rajesh Kumar",
    publication_type: "book",
    publisher: "SPA Publications",
    year: 2024,
    cover_image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
    description: "A comprehensive guide to constitutional law principles and their applications in modern governance.",
  },
  {
    id: "2",
    title: "Contemporary Legal Studies",
    author: "Multiple Authors",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries",
    year: 2024,
    cover_image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    description: "An edited collection of essays on contemporary legal issues from leading scholars.",
  },
  {
    id: "3",
    title: "Research Methods in Social Sciences",
    author: "Prof. Anita Sharma",
    publication_type: "research",
    publisher: "Blue Globe International",
    year: 2023,
    cover_image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
    description: "A detailed exploration of research methodologies for social science researchers.",
  },
  {
    id: "4",
    title: "Introduction to Business Law",
    author: "Dr. Suresh Mehta",
    publication_type: "book",
    publisher: "Intellect Jurists",
    year: 2024,
    cover_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
    description: "A foundational textbook covering all aspects of business law for commerce students.",
  },
  {
    id: "5",
    title: "International Human Rights Law",
    author: "Multiple Authors",
    publication_type: "edited_volume",
    publisher: "Aquitas International",
    year: 2023,
    cover_image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    description: "A comprehensive edited volume on human rights law from global perspectives.",
  },
  {
    id: "6",
    title: "Advances in Legal Technology",
    author: "Dr. Priya Singh",
    publication_type: "research",
    publisher: "Blue Globe International",
    year: 2024,
    cover_image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    description: "Cutting-edge research on the intersection of law and technology.",
  },
];

const publicationTypes = [
  { value: "all", label: "All Publications", icon: BookMarked },
  { value: "book", label: "Books", icon: BookOpen },
  { value: "edited_volume", label: "Edited Volumes", icon: FileText },
  { value: "research", label: "Research Publications", icon: FileText },
];

export default function Publications() {
  const [publications, setPublications] = useState(samplePublications);
  const [activeTab, setActiveTab] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/publications`);
      if (response.data && response.data.length > 0) {
        setPublications(response.data);
      }
    } catch (error) {
      console.log("Using sample publications data");
    } finally {
      setLoading(false);
    }
  };

  const filteredPublications =
    activeTab === "all"
      ? publications
      : publications.filter((pub) => pub.publication_type === activeTab);

  return (
    <div data-testid="publications-page" className="min-h-screen pt-20">
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
                Our Catalog
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Publications
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Explore our comprehensive collection of academic publications including
              authored books, edited volumes, and research publications across various
              disciplines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border border-slate-200 p-1 rounded-none">
                {publicationTypes.map((type) => (
                  <TabsTrigger
                    key={type.value}
                    value={type.value}
                    data-testid={`tab-${type.value}`}
                    className="px-6 py-3 text-sm font-medium rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    <type.icon className="w-4 h-4 mr-2" />
                    {type.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              {loading ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-white p-6 animate-pulse">
                      <div className="aspect-[3/4] bg-slate-200 mb-4" />
                      <div className="h-4 bg-slate-200 mb-2 w-3/4" />
                      <div className="h-3 bg-slate-200 w-1/2" />
                    </div>
                  ))}
                </div>
              ) : filteredPublications.length === 0 ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <BookMarked className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-slate-700 mb-2">
                    No Publications Found
                  </h3>
                  <p className="text-slate-500">
                    Publications will be added soon. Check back later!
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {filteredPublications.map((publication, index) => (
                    <motion.div
                      key={publication.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card
                        className="bg-white border border-slate-100 rounded-none overflow-hidden group hover:shadow-lg transition-all duration-300"
                        data-testid={`publication-card-${publication.id}`}
                      >
                        <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
                          {publication.cover_image ? (
                            <img
                              src={publication.cover_image}
                              alt={publication.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <BookOpen className="w-20 h-20 text-slate-300" />
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <span
                              className={`px-3 py-1 text-xs font-semibold tracking-wider uppercase ${
                                publication.publication_type === "book"
                                  ? "bg-amber-100 text-amber-800"
                                  : publication.publication_type === "edited_volume"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-emerald-100 text-emerald-800"
                              }`}
                            >
                              {publication.publication_type === "edited_volume"
                                ? "Edited Volume"
                                : publication.publication_type === "research"
                                ? "Research"
                                : "Book"}
                            </span>
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="font-serif text-xl font-medium text-slate-900 mb-2 line-clamp-2 group-hover:text-[#C5A059] transition-colors">
                            {publication.title}
                          </h3>
                          <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                            <User className="w-4 h-4" />
                            <span>{publication.author}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                            <Calendar className="w-4 h-4" />
                            <span>{publication.year}</span>
                            <span className="mx-2">•</span>
                            <span>{publication.publisher}</span>
                          </div>
                          {publication.description && (
                            <p className="text-slate-500 text-sm line-clamp-2">
                              {publication.description}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </TabsContent>
          </Tabs>
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
              Contribute Your Work
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mt-3 mb-6">
              Want to See Your Work Here?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Submit your manuscript and join our growing collection of quality academic
              publications. We're always looking for original, well-researched scholarly work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                data-testid="publications-submit-btn"
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
