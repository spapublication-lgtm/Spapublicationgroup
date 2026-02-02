import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BookMarked, FileText, ArrowRight, User, Calendar } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const samplePubs = [
  { id: "1", title: "Principles of Constitutional Law", author: "Dr. Rajesh Kumar", publication_type: "book", publisher: "SPA Publications", year: 2024, cover_image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop" },
  { id: "2", title: "Contemporary Legal Studies", author: "Multiple Authors", publication_type: "edited_volume", publisher: "Legal Luminaries", year: 2024, cover_image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop" },
  { id: "3", title: "Research Methods in Social Sciences", author: "Prof. Anita Sharma", publication_type: "research", publisher: "Blue Globe International", year: 2023, cover_image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop" },
  { id: "4", title: "Introduction to Business Law", author: "Dr. Suresh Mehta", publication_type: "book", publisher: "Intellect Jurists", year: 2024, cover_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" },
  { id: "5", title: "International Human Rights Law", author: "Multiple Authors", publication_type: "edited_volume", publisher: "Aquitas International", year: 2023, cover_image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop" },
  { id: "6", title: "Advances in Legal Technology", author: "Dr. Priya Singh", publication_type: "research", publisher: "Blue Globe International", year: 2024, cover_image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop" },
];

export default function Publications() {
  const [publications, setPublications] = useState(samplePubs);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    axios.get(`${API}/publications`)
      .then(res => { if (res.data.length > 0) setPublications(res.data); })
      .catch(() => {});
  }, []);

  const filtered = activeTab === "all" ? publications : publications.filter(p => p.publication_type === activeTab);

  return (
    <div data-testid="publications-page" className="min-h-screen pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Our Catalog</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white mb-6">Publications</h1>
            <p className="text-slate-400 text-lg">Explore our collection of academic publications.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border p-1 rounded-none">
                <TabsTrigger value="all" data-testid="tab-all" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <BookMarked className="w-4 h-4 mr-2" /> All
                </TabsTrigger>
                <TabsTrigger value="book" data-testid="tab-book" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <BookOpen className="w-4 h-4 mr-2" /> Books
                </TabsTrigger>
                <TabsTrigger value="edited_volume" data-testid="tab-edited" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <FileText className="w-4 h-4 mr-2" /> Edited
                </TabsTrigger>
                <TabsTrigger value="research" data-testid="tab-research" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <FileText className="w-4 h-4 mr-2" /> Research
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((pub) => (
                  <Card key={pub.id} className="bg-white border rounded-none overflow-hidden group hover:shadow-lg transition-all" data-testid={`publication-card-${pub.id}`}>
                    <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                      <img src={pub.cover_image} alt={pub.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-medium text-slate-900 mb-2 group-hover:text-[#C5A059]">{pub.title}</h3>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                        <User className="w-4 h-4" /> {pub.author}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" /> {pub.year} • {pub.publisher}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-medium text-white mb-6">Want to See Your Work Here?</h2>
          <p className="text-slate-400 text-lg mb-10">Submit your manuscript today.</p>
          <Button asChild data-testid="publications-submit-btn" className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6">
            <Link to="/submission">Submit Manuscript <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
