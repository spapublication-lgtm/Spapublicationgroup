import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Briefcase, BookOpen, Award, ArrowRight } from "lucide-react";
import { useState } from "react";

const placeholders = {
  founder: [{ id: "1", name: "To Be Announced", designation: "Founder & Chairman", bio: "Details will be updated soon." }],
  director: [
    { id: "2", name: "Director Position", designation: "Managing Director", bio: "Details will be updated soon." },
    { id: "3", name: "Director Position", designation: "Director of Publications", bio: "Details will be updated soon." },
  ],
  editor: [
    { id: "4", name: "Editor Position", designation: "Chief Editor", bio: "Details will be updated soon." },
    { id: "5", name: "Editor Position", designation: "Senior Editor", bio: "Details will be updated soon." },
    { id: "6", name: "Editor Position", designation: "Associate Editor", bio: "Details will be updated soon." },
  ],
  advisory: [
    { id: "7", name: "Advisory Member", designation: "Senior Advisor", bio: "Details will be updated soon." },
    { id: "8", name: "Advisory Member", designation: "Academic Advisor", bio: "Details will be updated soon." },
  ],
};

export default function OfficeBearers() {
  const [activeTab, setActiveTab] = useState("founder");

  const getBearers = (type) => placeholders[type] || [];

  return (
    <div data-testid="office-bearers-page" className="min-h-screen pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Our Leadership</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white mb-6">Office Bearers</h1>
            <p className="text-slate-400 text-lg">Meet the dedicated team who lead SPA Publication Group.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border p-1 rounded-none flex-wrap">
                <TabsTrigger value="founder" data-testid="tab-founder" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <Award className="w-4 h-4 mr-2" /> Founder
                </TabsTrigger>
                <TabsTrigger value="director" data-testid="tab-director" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <Briefcase className="w-4 h-4 mr-2" /> Directors
                </TabsTrigger>
                <TabsTrigger value="editor" data-testid="tab-editor" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <BookOpen className="w-4 h-4 mr-2" /> Editors
                </TabsTrigger>
                <TabsTrigger value="advisory" data-testid="tab-advisory" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <User className="w-4 h-4 mr-2" /> Advisory
                </TabsTrigger>
              </TabsList>
            </div>

            {["founder", "director", "editor", "advisory"].map((type) => (
              <TabsContent key={type} value={type}>
                <div className={`grid gap-8 ${getBearers(type).length === 1 ? "max-w-md mx-auto" : getBearers(type).length === 2 ? "md:grid-cols-2 max-w-2xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                  {getBearers(type).map((bearer) => (
                    <Card key={bearer.id} className="bg-white border rounded-none" data-testid={`bearer-card-${bearer.id}`}>
                      <CardContent className="p-8 text-center">
                        <div className="w-32 h-32 mx-auto mb-6 relative">
                          <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center">
                            <User className="w-16 h-16 text-slate-300" />
                          </div>
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#C5A059] px-4 py-1">
                            {type === "founder" && <Award className="w-4 h-4 text-slate-950" />}
                            {type === "director" && <Briefcase className="w-4 h-4 text-slate-950" />}
                            {type === "editor" && <BookOpen className="w-4 h-4 text-slate-950" />}
                            {type === "advisory" && <User className="w-4 h-4 text-slate-950" />}
                          </div>
                        </div>
                        <h3 className="font-serif text-xl font-medium text-slate-900 mb-2">{bearer.name}</h3>
                        <p className="text-[#C5A059] font-medium text-sm mb-4">{bearer.designation}</p>
                        <p className="text-slate-500 text-sm">{bearer.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-16 text-center">
            <Card className="bg-white border rounded-none inline-block">
              <CardContent className="p-8">
                <p className="text-slate-600 text-sm">
                  <span className="text-[#C5A059] font-medium">Note:</span> This page is being updated with detailed profiles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-medium text-white mb-6">Want to Connect?</h2>
          <p className="text-slate-400 text-lg mb-10">Have questions or interested in joining our team?</p>
          <Button asChild data-testid="bearers-contact-btn" className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
