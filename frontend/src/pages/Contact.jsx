import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  Building2,
  Printer,
} from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "spapublications@gmail.com",
    link: "mailto:spapublications@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+91 6284607500",
    link: "tel:+916284607500",
  },
];

const offices = [
  {
    icon: Building2,
    title: "Head Office",
    address: "#124A, 2B, Shivalik Avenue, Hoshiarpur, Punjab",
  },
  {
    icon: Printer,
    title: "Press Office",
    address: "Nivea Art Press, Adda Hoshiarpur Chowk, Jalandhar, Punjab",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${API}/contact`, formData);
      setSubmitted(true);
      toast.success("Message sent successfully! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page" className="min-h-screen pt-20">
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
                Get In Touch
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl font-medium text-white leading-tight mb-6">
              Contact Us
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Have questions about publishing with us? We're here to help. Reach out to
              us through any of the following channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-50 border-0 rounded-none hover:bg-[#C5A059]/10 transition-colors h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-[#C5A059] flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-slate-950" />
                    </div>
                    <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">
                      {info.title}
                    </p>
                    <p
                      className="text-slate-900 font-medium"
                      data-testid={`contact-${info.title.toLowerCase()}`}
                    >
                      {info.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            ))}

            {offices.map((office, index) => (
              <motion.div
                key={office.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              >
                <Card className="bg-slate-50 border-0 rounded-none h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-slate-900 flex items-center justify-center mx-auto mb-4">
                      <office.icon className="w-7 h-7 text-[#C5A059]" />
                    </div>
                    <p className="text-slate-500 text-sm uppercase tracking-wider mb-2">
                      {office.title}
                    </p>
                    <p
                      className="text-slate-900 font-medium text-sm"
                      data-testid={`contact-${office.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {office.address}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#C5A059] text-sm font-medium tracking-widest uppercase">
                Send a Message
              </span>
              <h2 className="font-serif text-4xl font-medium text-slate-900 mt-3 mb-6">
                We'd Love to Hear From You
              </h2>
              <div className="w-16 h-[3px] bg-[#C5A059] mb-8" />

              {submitted ? (
                <Card className="bg-white border border-slate-100 rounded-none">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Your message has been sent successfully. We will get back to you
                      within 24-48 hours.
                    </p>
                    <Button
                      onClick={() => setSubmitted(false)}
                      className="bg-slate-900 hover:bg-slate-800 text-white rounded-none"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        data-testid="contact-name-input"
                        className="rounded-none border-slate-200 focus:border-[#C5A059] focus:ring-[#C5A059]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        data-testid="contact-email-input"
                        className="rounded-none border-slate-200 focus:border-[#C5A059] focus:ring-[#C5A059]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-700">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      required
                      data-testid="contact-subject-input"
                      className="rounded-none border-slate-200 focus:border-[#C5A059] focus:ring-[#C5A059]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your inquiry in detail..."
                      rows={6}
                      required
                      data-testid="contact-message-input"
                      className="rounded-none border-slate-200 focus:border-[#C5A059] focus:ring-[#C5A059]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    data-testid="contact-submit-btn"
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-none px-8 py-6 text-sm font-medium tracking-widest uppercase w-full md:w-auto"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-slate-950 border-0 rounded-none h-full">
                <CardContent className="p-10">
                  <h3 className="font-serif text-2xl font-medium text-white mb-8">
                    Why Contact Us?
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-slate-950" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          Publication Inquiries
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Questions about submitting your manuscript or publication process
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-slate-950" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          Partnership Opportunities
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Collaborate with us on academic conferences or journals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#C5A059] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-slate-950" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">
                          General Inquiries
                        </h4>
                        <p className="text-slate-400 text-sm">
                          Any other questions about SPA Publication Group
                        </p>
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
