import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, BookMarked, FileText, ArrowRight, User, Building2, X, ShoppingCart, MessageCircle } from "lucide-react";

const WHATSAPP_CATALOGUE = "https://wa.me/c/916284607500";

const publications = [
  // Intellect Jurists Publishers - Textbooks
  {
    id: "16",
    title: "A Textbook on Electronic Media in India",
    author: "Dr. Pratima Sudam Bansod, Dr. Vandana Bhivsen Sirsath",
    publication_type: "textbook",
    publisher: "Intellect Jurists Publishers",
    publisher_slug: "intellect-jurists",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/c8c7j0ws_IMG-20251220-WA0004.jpg",
  },
  {
    id: "17",
    title: "Intersection of Disability and Employment Laws in India",
    author: "Nancy Kanwar",
    publication_type: "textbook",
    publisher: "Intellect Jurists Publishers",
    publisher_slug: "intellect-jurists",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/xe3ce5ds_IMG-20251009-WA0003.jpg",
  },
  {
    id: "18",
    title: "The New Wage Code, 2019: A Critical Study on Universal Minimum Wages for Organized and Unorganized Labour in India",
    author: "Dr. S. Mano",
    publication_type: "textbook",
    publisher: "Intellect Jurists Publishers",
    publisher_slug: "intellect-jurists",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/0ecj7491_IMG-20251124-WA0004.jpg",
  },
  {
    id: "19",
    title: "Judicial Discretion in Granting Bail: Analyzing the Divergent Judicial Trends",
    author: "Ms. Aiswarya S, Mr. I Madhav Ganesh",
    publication_type: "textbook",
    publisher: "Intellect Jurists Publishers",
    publisher_slug: "intellect-jurists",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/4nnnl5lj_IMG-20251120-WA0001.jpg",
  },
  {
    id: "20",
    title: "Medical Termination of Pregnancy Act, 1971: Moral and Social Issues",
    author: "Ms. Priyanka Khule Kandelkar, Prof. Krishna Ahirao Iyer",
    publication_type: "textbook",
    publisher: "Intellect Jurists Publishers",
    publisher_slug: "intellect-jurists",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/ch3vxe6g_IMG-20251121-WA0006.jpg",
  },
  // SPA Publications books
  {
    id: "11",
    title: "Honor Killing in India: Critical Analysis",
    author: "Bini Das",
    publication_type: "book",
    publisher: "SPA Publications",
    publisher_slug: "spa-publications",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/hm0bvq7l_IMG-20250610-WA0009.jpg",
  },
  {
    id: "12",
    title: "Custody of Conflict: A Legal Commentary on the Enemy Property Act, 1968",
    author: "Ms. Aiswarya S, Mr. I Madhav Ganesh",
    publication_type: "book",
    publisher: "SPA Publications",
    publisher_slug: "spa-publications",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/253sy1je_IMG-20250807-WA0008.jpg",
  },
  {
    id: "13",
    title: "Resurgent Corporate Governance: The Saga of Scams Unfolded",
    author: "Dr. Kalpana Thakur",
    publication_type: "book",
    publisher: "SPA Publications",
    publisher_slug: "spa-publications",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/csybpqe0_IMG-20250611-WA0002.jpg",
  },
  {
    id: "14",
    title: "An Indian Outlook on Health Insurance",
    author: "Dr. Sneha Marathe",
    publication_type: "book",
    publisher: "SPA Publications",
    publisher_slug: "spa-publications",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/xm15wxhy_IMG-20250719-WA0041.jpg",
  },
  {
    id: "15",
    title: "Shipping Laws & Practice",
    author: "Dr. M E Aliyar",
    publication_type: "book",
    publisher: "SPA Publications",
    publisher_slug: "spa-publications",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/ojqcb2sa_IMG-20250719-WA0042.jpg",
  },
  // Legal Luminaries books
  {
    id: "6",
    title: "Realities Unmasked: AI, Intimacy and the Absurd Digital World",
    author: "Dr. Sovana Mukherjee",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/vwzvkts8_IMG-20251220-WA0002.jpg",
  },
  {
    id: "7",
    title: "Citizenship, Constitution and Controversy: The CAA Perspective",
    author: "Adv. G. Raja Kumari, Adv. Amandeep Kaur",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/1ln9dlgj_IMG-20250610-WA0007.jpg",
  },
  {
    id: "8",
    title: "Indian Constitution: Concepts, Theories and Critique",
    author: "Adv. G Raja Kumari, Adv. Amandeep Kaur, Adv. Sukhmandeep Kaur, Mr. Prasanna Kannan",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/vgcqe2dx_IMG-20250612-WA0003.jpg",
  },
  {
    id: "9",
    title: "Lex Silentia: Interpreting the Unspoken Bhartiya Nyaya Sanhita, 2023",
    author: "Adv. Amandeep Kaur",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/qnac6o8y_IMG-20250603-WA0017.jpg",
  },
  {
    id: "10",
    title: "Shattered Ceilings: Women, Law & Social Change",
    author: "Dr. R.N Singh, Dr. Pawan Kumar Srivastava",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2025,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/a86vzj58_IMG-20250412-WA0005.jpg",
  },
  {
    id: "1",
    title: "The Constitution as a Shield: Advancing Women's Rights",
    author: "Dr. R.N Singh, Dr. Priyanka Puri, Dr. Kalpana Thakur",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/bflj8lub_IMG_20260124_133919.jpg",
  },
  {
    id: "2",
    title: "Voices from the Edge: Rights & Remedies For Vulnerable Groups In India",
    author: "Dr. Swarup Mukherjee, Dr. Subholaxmi Mukherjee (Editors)",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/60x9qbtm_IMG-20260123-WA0006.jpg",
  },
  {
    id: "3",
    title: "Law, Technology and Cyber Crimes: Emerging Challenges for Protection of Women and Children",
    author: "Dr. Kalpana Thakur, Ms. Alka Rani, Mr. Rahul Mdhara",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/p83wlzn2_IMG-20260121-WA0006.jpg",
  },
  {
    id: "4",
    title: "Indian Family Law: Principles and Practice",
    author: "Ms. Alka Rani, Dr. Kalpana Thakur, Mr. Rahul Mdhara",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/wr3xhb54_IMG-20260121-WA0005.jpg",
  },
  {
    id: "5",
    title: "Crimes of the New Age: Crimes and Judgments under Indian Criminal Law",
    author: "Mr. Rahul Mdhara, Dr. Kalpana Thakur, Ms. Alka Rani",
    publication_type: "edited_volume",
    publisher: "Legal Luminaries Publication House",
    publisher_slug: "legal-luminaries",
    year: 2026,
    cover_image: "https://customer-assets.emergentagent.com/job_37efc3c3-f1a5-4028-a803-e9ddc7d446f6/artifacts/79kygf7i_IMG-20260119-WA0017.jpg",
  },
];

const companyNames = {
  "spa-publications": "SPA Publications",
  "legal-luminaries": "Legal Luminaries Publication House",
  "intellect-jurists": "Intellect Jurists Publishers",
  "blue-globe-international": "Blue Globe International",
  "aquitas-international": "Aquitas International",
};

export default function Publications() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all");
  const companyFilter = searchParams.get("company");

  useEffect(() => {
    if (companyFilter) {
      setActiveTab("all");
    }
  }, [companyFilter]);

  const clearCompanyFilter = () => {
    setSearchParams({});
  };

  let filtered = publications;
  
  if (companyFilter) {
    filtered = filtered.filter(p => p.publisher_slug === companyFilter);
  }
  
  if (activeTab !== "all") {
    filtered = filtered.filter(p => p.publication_type === activeTab);
  }

  const companyName = companyFilter ? companyNames[companyFilter] : null;
  const bookCount = publications.filter(p => p.publication_type === 'book').length;
  const editedCount = publications.filter(p => p.publication_type === 'edited_volume').length;
  const textbookCount = publications.filter(p => p.publication_type === 'textbook').length;

  const getTypeLabel = (type) => {
    if (type === "edited_volume") return "Edited Volume";
    if (type === "textbook") return "Textbook";
    return "Book";
  };

  const getTypeBadgeColor = (type) => {
    if (type === "textbook") return "bg-emerald-100 text-emerald-700";
    if (type === "edited_volume") return "bg-[#C5A059]/10 text-[#C5A059]";
    return "bg-blue-100 text-blue-700";
  };

  return (
    <div data-testid="publications-page" className="min-h-screen pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Our Catalog</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white mb-6">
              {companyName ? companyName : "Publications"}
            </h1>
            <p className="text-slate-400 text-lg">
              {companyName 
                ? `Explore ${filtered.length} publication${filtered.length !== 1 ? 's' : ''} from ${companyName}.`
                : `Explore our collection of ${publications.length} academic publications.`
              }
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {companyFilter && (
            <div className="flex justify-center mb-8">
              <div className="bg-[#C5A059]/10 border border-[#C5A059]/20 px-4 py-2 flex items-center gap-3">
                <span className="text-slate-700 text-sm">
                  Showing publications from: <strong className="text-[#C5A059]">{companyName}</strong>
                </span>
                <button onClick={clearCompanyFilter} className="text-slate-500 hover:text-slate-700 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12 overflow-x-auto">
              <TabsList className="bg-white border p-1 rounded-none">
                <TabsTrigger value="all" data-testid="tab-all" className="px-4 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white text-sm">
                  <BookMarked className="w-4 h-4 mr-2" /> All ({publications.length})
                </TabsTrigger>
                <TabsTrigger value="book" data-testid="tab-book" className="px-4 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white text-sm">
                  <BookOpen className="w-4 h-4 mr-2" /> Books ({bookCount})
                </TabsTrigger>
                <TabsTrigger value="edited_volume" data-testid="tab-edited" className="px-4 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white text-sm">
                  <FileText className="w-4 h-4 mr-2" /> Edited ({editedCount})
                </TabsTrigger>
                <TabsTrigger value="textbook" data-testid="tab-textbook" className="px-4 py-3 rounded-none data-[state=active]:bg-slate-900 data-[state=active]:text-white text-sm">
                  <BookOpen className="w-4 h-4 mr-2" /> Textbooks ({textbookCount})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab}>
              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <BookMarked className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-slate-700 mb-2">No Publications Found</h3>
                  <p className="text-slate-500 mb-6">
                    {companyFilter ? `No publications available from ${companyName} yet.` : "Publications will be added soon."}
                  </p>
                  {companyFilter && (
                    <Button onClick={clearCompanyFilter} variant="outline" className="rounded-none">View All Publications</Button>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {filtered.map((pub) => (
                    <Card key={pub.id} className="bg-white border rounded-none overflow-hidden group hover:shadow-xl transition-all" data-testid={`publication-card-${pub.id}`}>
                      <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
                        <img src={pub.cover_image} alt={pub.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <a 
                            href={WHATSAPP_CATALOGUE} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-4 py-2 flex items-center gap-2 font-medium text-sm hover:bg-[#128C7E] transition-colors"
                          >
                            <ShoppingCart className="w-4 h-4" /> Buy Now
                          </a>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <span className={`inline-block px-2 py-0.5 text-xs font-semibold tracking-wider uppercase mb-2 ${getTypeBadgeColor(pub.publication_type)}`}>
                          {getTypeLabel(pub.publication_type)}
                        </span>
                        <h3 className="font-serif text-sm font-medium text-slate-900 mb-2 line-clamp-2 group-hover:text-[#C5A059] transition-colors leading-tight">
                          {pub.title}
                        </h3>
                        <div className="flex items-start gap-1 text-slate-500 text-xs mb-2">
                          <User className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span className="line-clamp-2">{pub.author}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400 text-xs mb-3">
                          <Building2 className="w-3 h-3" />
                          <span className="truncate">{pub.publisher.replace(" Publication House", "").replace(" Publishers", "")}</span>
                        </div>
                        <a 
                          href={WHATSAPP_CATALOGUE} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full bg-[#25D366] text-white py-2 flex items-center justify-center gap-2 text-xs font-medium hover:bg-[#128C7E] transition-colors"
                        >
                          <ShoppingCart className="w-3 h-3" /> Buy Now
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {companyFilter && filtered.length > 0 && (
            <div className="text-center mt-12">
              <Button onClick={clearCompanyFilter} variant="outline" className="rounded-none border-slate-300">View All Publications</Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-[#C5A059]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-slate-950 mb-2">Need More Information?</h3>
              <p className="text-slate-800">Contact us directly for bulk orders, custom requests, or any inquiries.</p>
            </div>
            <div className="flex gap-4">
              <a 
                href={WHATSAPP_CATALOGUE}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 flex items-center gap-2 font-medium hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Catalogue
              </a>
              <Link 
                to="/contact"
                className="bg-slate-950 text-white px-6 py-3 flex items-center gap-2 font-medium hover:bg-slate-800 transition-colors"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
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
