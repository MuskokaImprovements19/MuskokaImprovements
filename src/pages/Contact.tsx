import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Briefcase } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PageSEO from "@/components/PageSEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Inquiry: ${formData.service || "General"}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nService: ${formData.service}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:Work@Muskokaimprovements.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email client", description: "Your message details have been pre-filled." });
  };

  return (
    <Layout>
      <PageSEO
        title="Contact Muskoka Improvements | Free Quote"
        description="Get a free quote for property management, cottage renovations, deck & dock building in Muskoka. Call 705-703-0070 or fill out our contact form."
        canonical="/contact"
      />
      {/* Hero */}
      <section className="section-padding pt-16 pb-12 max-w-7xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Get In Touch</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Contact Us</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl">
          Ready to start your project or need property management? Reach out — we'd love to hear from you.
        </motion.p>
      </section>

      <section className="section-padding pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                  <Input required placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                  <Input required type="email" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-background border-border" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input placeholder="(705) 000-0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-background border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Service</label>
                  <Select onValueChange={(v) => setFormData({ ...formData, service: v })}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Property Management">Property Management</SelectItem>
                      <SelectItem value="Weekly Garbage">Weekly Garbage Pickup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Address *</label>
                <Input required placeholder="123 Lakeshore Dr, Bracebridge, ON" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="bg-background border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                <Textarea required placeholder="Tell us about your project..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-background border-border" />
              </div>
              <Button type="submit" className="w-full py-6 text-sm uppercase tracking-wide font-semibold">
                <Send className="h-4 w-4 mr-2" /> Request Client Membership
              </Button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center"><Phone className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <a href="tel:+17057030070" className="text-foreground font-medium hover:text-primary transition-colors">(705) 703-0070</a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center"><Mail className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <a href="mailto:Work@Muskokaimprovements.com" className="text-foreground font-medium hover:text-primary transition-colors text-sm">Work@Muskokaimprovements.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="h-5 w-5 text-primary" /></div>
                  <div>
                    <p className="text-xs text-muted-foreground">Service Area</p>
                    <p className="text-foreground font-medium">Bracebridge, Port Carling, Gravenhurst & all of Muskoka</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="font-serif text-xl font-bold text-foreground">Careers</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Interested in joining the Muskoka Improvements team? We're always looking for skilled, motivated individuals. Send us your resume!
              </p>
              <a href="mailto:Work@Muskokaimprovements.com?subject=Career%20Inquiry" className="text-primary text-sm font-semibold hover:underline">Apply Now →</a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
