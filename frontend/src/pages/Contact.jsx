import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, Building2, Printer } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page" className="min-h-screen pt-20">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Get In Touch</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white mb-6">Contact Us</h1>
            <p className="text-slate-400 text-lg">We're here to help. Reach out through any channel.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="mailto:spapublications@gmail.com" className="block">
              <Card className="bg-slate-50 border-0 rounded-none hover:bg-[#C5A059]/10 transition-colors h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#C5A059] flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-slate-950" />
                  </div>
                  <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Email</p>
                  <p className="text-slate-900 font-medium" data-testid="contact-email">spapublications@gmail.com</p>
                </CardContent>
              </Card>
            </a>
            <a href="tel:+916284607500" className="block">
              <Card className="bg-slate-50 border-0 rounded-none hover:bg-[#C5A059]/10 transition-colors h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-[#C5A059] flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-slate-950" />
                  </div>
                  <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Phone</p>
                  <p className="text-slate-900 font-medium" data-testid="contact-phone">+91 6284607500</p>
                </CardContent>
              </Card>
            </a>
            <Card className="bg-slate-50 border-0 rounded-none h-full">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-7 h-7 text-[#C5A059]" />
                </div>
                <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Head Office</p>
                <p className="text-slate-900 font-medium text-sm" data-testid="contact-head-office">#124A, 2B, Shivalik Avenue, Hoshiarpur, Punjab</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-50 border-0 rounded-none h-full">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <Printer className="w-7 h-7 text-[#C5A059]" />
                </div>
                <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">Press Office</p>
                <p className="text-slate-900 font-medium text-sm" data-testid="contact-press-office">Nivea Art Press, Adda Hoshiarpur Chowk, Jalandhar, Punjab</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">Send a Message</span>
              <h2 className="font-serif text-4xl font-medium text-slate-900 mt-3 mb-6">We'd Love to Hear From You</h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />

              {submitted ? (
                <Card className="bg-white border rounded-none">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4">Thank You!</h3>
                    <p className="text-slate-600 mb-6">Your message has been sent. We'll respond within 24-48 hours.</p>
                    <Button onClick={() => setSubmitted(false)} className="bg-slate-900 text-white rounded-none">
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your full name" required data-testid="contact-name-input" className="rounded-none" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" required data-testid="contact-email-input" className="rounded-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="What is this regarding?" required data-testid="contact-subject-input" className="rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Please describe your inquiry..." rows={6} required data-testid="contact-message-input" className="rounded-none resize-none" />
                  </div>
                  <Button type="submit" disabled={loading} data-testid="contact-submit-btn" className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 py-6 w-full md:w-auto">
                    {loading ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
                  </Button>
                </form>
              )}
            </div>

            <Card className="bg-slate-950 border-0 rounded-none h-fit">
              <CardContent className="p-10">
                <h3 className="font-serif text-2xl font-medium text-white mb-8">Why Contact Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-slate-950" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Publication Inquiries</h4>
                      <p className="text-slate-400 text-sm">Questions about submitting manuscripts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-slate-950" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Partnership Opportunities</h4>
                      <p className="text-slate-400 text-sm">Collaborate on conferences or journals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-slate-950" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">General Inquiries</h4>
                      <p className="text-slate-400 text-sm">Any other questions about us</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-10 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Clock className="w-4 h-4 text-[#C5A059]" />
                    <span>Response Time: 24-48 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
