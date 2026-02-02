import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, BookOpen, Award, ArrowRight } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Placeholder data for office bearers
const placeholderBearers = {
  founder: [
    {
      id: "1",
      name: "To Be Announced",
      designation: "Founder & Chairman",
      role_type: "founder",
      bio: "Details will be updated soon.",
      image: null,
    },
  ],
  director: [
    {
      id: "2",
      name: "Director Position",
      designation: "Managing Director",
      role_type: "director",
      bio: "Details will be updated soon.",
      image: null,
    },
    {
      id: "3",
      name: "Director Position",
      designation: "Director of Publications",
      role_type: "director",
      bio: "Details will be updated soon.",
      image: null,
    },
  ],
  editor: [
    {
      id: "4",
      name: "Editor Position",
      designation: "Chief Editor",
      role_type: "editor",
      bio: "Details will be updated soon.",
      image: null,
    },
    {
      id: "5",
      name: "Editor Position",
      designation: "Senior Editor",
      role_type: "editor",
      bio: "Details will be updated soon.",
      image: null,
    },
    {
      id: "6",
      name: "Editor Position",
      designation: "Associate Editor",
      role_type: "editor",
      bio: "Details will be updated soon.",
      image: null,
    },
  ],
  advisory: [
    {
      id: "7",
      name: "Advisory Member",
      designation: "Senior Advisor",
      role_type: "advisory",
      bio: "Details will be updated soon.",
      image: null,
    },
    {
      id: "8",
      name: "Advisory Member",
      designation: "Academic Advisor",
      role_type: "advisory",
      bio: "Details will be updated soon.",
      image: null,
    },
  ],
};

const roleCategories = [
  { value: "founder", label: "Founder", icon: Award },
  { value: "director", label: "Directors", icon: Briefcase },
  { value: "editor", label: "Editors", icon: BookOpen },
  { value: "advisory", label: "Advisory Board", icon: User },
];

export default function OfficeBearers() {
  const [bearers, setBearers] = useState([]);
  const [activeTab, setActiveTab] = useState("founder");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBearers();
  }, []);

  const fetchBearers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/office-bearers`);
      if (response.data && response.data.length > 0) {
        setBearers(response.data);
      }
    } catch (error) {
      console.log("Using placeholder data");
    } finally {
      setLoading(false);
    }
  };

  const getFilteredBearers = (roleType) => {
    if (bearers.length > 0) {
      return bearers.filter((b) => b.role_type === roleType);
    }
    return placeholderBearers[roleType] || [];
  };

  const getGridCols = (count) => {
    if (count === 1) return "md:grid-cols-1 max-w-md mx-auto";
    if (count === 2) return "md:grid-cols-2 max-w-2xl mx-auto";
    return "md:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div data-testid="office-bearers-page" className="min-h-screen pt-20">
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
                Our Leadership
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Office Bearers
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Meet the dedicated team of professionals who lead SPA Publication Group
              and guide our mission of academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office Bearers Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border border-slate-200 p-1 rounded-none flex-wrap">
                {roleCategories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    data-testid={`tab-${category.value}`}
                    className="px-6 py-3 text-sm font-medium rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {roleCategories.map((category) => (
              <TabsContent key={category.value} value={category.value} className="mt-0">
                {loading ? (
                  <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white p-6 animate-pulse">
                        <div className="w-32 h-32 bg-slate-200 rounded-full mx-auto mb-4" />
                        <div className="h-4 bg-slate-200 mb-2 w-3/4 mx-auto" />
                        <div className="h-3 bg-slate-200 w-1/2 mx-auto" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    className={`grid gap-8 ${getGridCols(
                      getFilteredBearers(category.value).length
                    )}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {getFilteredBearers(category.value).map((bearer, index) => (
                      <motion.div
                        key={bearer.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card
                          className="bg-white border border-slate-100 rounded-none overflow-hidden group hover:shadow-lg transition-all duration-300"
                          data-testid={`bearer-card-${bearer.id}`}
                        >
                          <CardContent className="p-8 text-center">
                            {/* Avatar */}
                            <div className="w-32 h-32 mx-auto mb-6 relative">
                              {bearer.image ? (
                                <img
                                  src={bearer.image}
                                  alt={bearer.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              ) : (
                                <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center">
                                  <User className="w-16 h-16 text-slate-300" />
                                </div>
                              )}
                              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#C5A059] px-4 py-1">
                                <category.icon className="w-4 h-4 text-slate-950" />
                              </div>
                            </div>

                            {/* Info */}
                            <h3 className="font-serif text-xl font-medium text-slate-900 mb-2">
                              {bearer.name}
                            </h3>
                            <p className="text-[#C5A059] font-medium text-sm mb-4">
                              {bearer.designation}
                            </p>
                            {bearer.bio && (
                              <p className="text-slate-500 text-sm leading-relaxed">
                                {bearer.bio}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </TabsContent>
            ))}
          </Tabs>

          {/* Note about upcoming content */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border border-slate-100 rounded-none inline-block">
              <CardContent className="p-8">
                <p className="text-slate-600 text-sm">
                  <span className="text-[#C5A059] font-medium">Note:</span> This page
                  is being updated with detailed profiles of our office bearers.
                  Please check back soon for complete information.
                </p>
              </CardContent>
            </Card>
          </motion.div>
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
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-medium text-white mt-3 mb-6">
              Want to Connect With Us?
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Have questions about our publications or interested in joining our team?
              We'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                data-testid="bearers-contact-btn"
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
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
