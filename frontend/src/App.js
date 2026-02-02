import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Companies from "@/pages/Companies";
import CompanyDetail from "@/pages/CompanyDetail";
import Publications from "@/pages/Publications";
import Submission from "@/pages/Submission";
import OfficeBearers from "@/pages/OfficeBearers";
import Contact from "@/pages/Contact";

// Layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <div className="App min-h-screen bg-slate-50">
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:slug" element={<CompanyDetail />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/office-bearers" element={<OfficeBearers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
