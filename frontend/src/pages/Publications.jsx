import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BookMarked, FileText, ArrowRight, User, Building2 } from "lucide-react";

const publications = [
  // New books
  {
    id: "6",
    title: "Realities Unmasked: AI, Intimacy and the Absurd Digital World",
    author: "Dr. Sovana Mukherjee",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/vwzvkts8_IMG-20251220-WA0002.jpg",
  },
  {
    id: "7",
    title: "Citizenship, Constitution and Controversy: The CAA Perspective",
    author: "Adv. G. Raja Kumari, Adv. Amandeep Kaur",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/1ln9dlgj_IMG-20250610-WA0007.jpg",
  },
  {
    id: "8",
    title: "Indian Constitution: Concepts, Theories and Critique",
    author: "Adv. G Raja Kumari, Adv. Amandeep Kaur, Adv. Sukhmandeep Kaur, Mr. Prasanna Kannan",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/vgcqe2dx_IMG-20250612-WA0003.jpg",
  },
  {
    id: "9",
    title: "Lex Silentia: Interpreting the Unspoken Bhartiya Nyaya Sanhita, 2023",
    author: "Adv. Amandeep Kaur",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/qnac6o8y_IMG-20250603-WA0017.jpg",
  },
  {
    id: "10",
    title: "Shattered Ceilings: Women, Law & Social Change",
    author: "Dr. R.N Singh, Dr. Pawan Kumar Srivastava",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/a86vzj58_IMG-20250412-WA0005.jpg",
  },
  // Previous books
  {
    id: "1",
    title: "The Constitution as a Shield: Advancing Women's Rights",
    author: "Dr. R.N Singh, Dr. Priyanka Puri, Dr. Kalpana Thakur",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/bflj8lub_IMG_20260124_133919.jpg",
  },
  {
    id: "2",
    title: "Voices from the Edge: Rights & Remedies For Vulnerable Groups In India",
    author: "Dr. Swarup Mukherjee, Dr. Subholaxmi Mukherjee (Editors)",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/60x9qbtm_IMG-20260123-WA0006.jpg",
  },
  {
    id: "3",
    title: "Law, Technology and Cyber Crimes: Emerging Challenges for Protection of Women and Children",
    author: "Dr. Kalpana Thakur, Ms. Alka Rani, Mr. Rahul Mdhara",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/p83wlzn2_IMG-20260121-WA0006.jpg",
  },
  {
    id: "4",
    title: "Indian Family Law: Principles and Practice",
    author: "Ms. Alka Rani, Dr. Kalpana Thakur, Mr. Rahul Mdhara",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/wr3xhb54_IMG-20260121-WA0005.jpg",
  },
  {
    id: "5",
    title: "Crimes of the New Age: Crimes and Judgments under Indian Criminal Law",
    author: "Mr. Rahul Mdhara, Dr. Kalpana Thakur, Ms. Alka Rani",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/79kygf7i_IMG-20260119-WA0017.jpg",
  },
];

export default function Publications() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" 
    ? publications 
    : publications.filter(p => p.publication_type === activeTab);

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
            <p className="text-slate-400 text-lg">Explore our collection of {publications.length} academic publications from Legal Luminaries Publication House.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border p-1 rounded-none">
                <TabsTrigger value="all" data-testid="tab-all" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <BookMarked className="w-4 h-4 mr-2" /> All ({publications.length})
                </TabsTrigger>
                <TabsTrigger value="book" data-testid="tab-book" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <BookOpen className="w-4 h-4 mr-2" /> Books
                </TabsTrigger>
                <TabsTrigger value="edited_volume" data-testid="tab-edited" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <FileText className="w-4 h-4 mr-2" /> Edited Volumes ({publications.filter(p => p.publication_type === 'edited_volume').length})
                </TabsTrigger>
                <TabsTrigger value="research" data-testid="tab-research" className="px-6 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white">
                  <FileText className="w-4 h-4 mr-2" /> Research
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab}>
              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <BookMarked className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-slate-700 mb-2">No Publications Found</h3>
                  <p className="text-slate-500">Publications in this category will be added soon.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filtered.map((pub) => (
                    <Card key={pub.id} className="bg-white border rounded-none overflow-hidden group hover:shadow-xl transition-all" data-testid={`publication-card-${pub.id}`}>
                      <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                        <img src={pub.cover_image} alt={pub.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <CardContent className="p-4">
                        <span className="inline-block bg-[#C5A059]/10 text-[#C5A059] px-2 py-0.5 text-xs font-semibold tracking-wider uppercase mb-2">
                          Edited Volume
                        </span>
                        <h3 className="font-serif text-sm font-medium text-slate-900 mb-2 line-clamp-2 group-hover:text-[#C5A059] transition-colors leading-tight">
                          {pub.title}
                        </h3>
                        <div className="flex items-start gap-1 text-slate-500 text-xs mb-2">
                          <User className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{pub.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 text-xs">
                          <Building2 className="w-3 h-3" />
                          <span className="truncate">Legal Luminaries</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-medium text-white mb-6">Want to See Your Work Here?</h2>
          <p className="text-slate-400 text-lg mb-10">Submit your manuscript today to be published by SPA Publication Group.</p>
          <Button asChild data-testid="publications-submit-btn" className="bg-[#C5A059] hover:bg-[#a88a48] text-slate-950 rounded-none px-8 py-6">
            <Link to="/submission">Submit Manuscript <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
