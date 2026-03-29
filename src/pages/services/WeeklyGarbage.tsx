import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Recycle, Package, AlertCircle, ShieldCheck, Send, CheckCircle, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { IMAGES } from "@/lib/images";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PageSEO from "@/components/PageSEO";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

const InfoCard = ({ icon: Icon, title, children, index }: { icon: any; title: string; children: React.ReactNode; index: number }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index} className="bg-card border border-border rounded-lg p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-md bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground">{title}</h3>
    </div>
    <div className="text-muted-foreground text-sm leading-relaxed space-y-2">{children}</div>
  </motion.div>
);

const WeeklyGarbage = () => {
  const { toast } = useToast();
  const [formType, setFormType] = useState<"inquiry" | "bin">("inquiry");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", island: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("garbage_inquiries" as any).insert({
        id,
        type: formType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        island: formData.island,
        message: formData.message || null,
      });
      if (error) throw error;

      // Send email notification to work@muskokaimprovements.com
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "garbage-inquiry",
          recipientEmail: "work@muskokaimprovements.com",
          idempotencyKey: `garbage-${id}`,
          templateData: {
            type: formType,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || undefined,
            island: formData.island,
            message: formData.message || undefined,
          },
        },
      });

      setSubmitted(true);
      toast({ title: "Request sent!", description: formType === "bin" ? "We'll be in touch about your bin order." : "We'll get back to you shortly." });
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <PageSEO
        title="Weekly Garbage & Recycling Pickup | Island Cottages on Lake Muskoka"
        description="Weekly garbage and recycling pickup service for island cottages on Lake Muskoka. Reliable waste collection for seasonal and year-round properties."
        canonical="/weekly-garbage"
      />
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
        <img src={IMAGES.garbageLakeside} alt="Weekly Garbage & Recycling Pickup" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative z-10 section-padding pb-12 max-w-7xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">Island Cottage Service</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground">Weekly Garbage & Recycling</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground mt-3 max-w-2xl">
            Reliable weekly pickup for island cottagers on Lake Muskoka — May through October. <strong className="text-foreground">$1,260 + HST for the season.</strong>
          </motion.p>
        </div>
      </section>

      {/* Important Update Banner */}
      <section className="section-padding max-w-7xl mx-auto pt-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-primary/5 border border-primary/20 rounded-lg p-6 flex gap-4 items-start">
          <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
          <div>
            <h2 className="font-serif text-lg font-bold text-foreground mb-1">2026 Update: Black Bags Still Accepted</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The District Municipality of Muskoka now requires <strong className="text-foreground">clear bags</strong> at their landfills and has changed recycling rules. <strong className="text-foreground">This doesn't affect you</strong> — we use private waste facilities, so we continue to accept regular black bags as always.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Info Cards Grid */}
      <section className="section-padding py-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard icon={CalendarDays} title="Pickup Schedule" index={0}>
            <ul className="space-y-1.5">
              <li><strong className="text-foreground">Season:</strong> May 19 – October 13</li>
              <li><strong className="text-foreground">Pickup day:</strong> Every Monday</li>
              <li><strong className="text-foreground">Holiday weeks:</strong> If Monday is a holiday (e.g. Labour Day), pickup moves to Tuesday</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Recycle} title="What We Accept" index={1}>
            <ul className="space-y-1.5">
              <li>✓ Household garbage & food waste</li>
              <li>✓ Recycling</li>
              <li>✓ Cardboard (bagged or broken down & tied)</li>
            </ul>
          </InfoCard>

          <InfoCard icon={Package} title="Bag Limits" index={2}>
            <p>Standard limit is <strong className="text-foreground">5 bags per week</strong>.</p>
            <p>We're flexible with occasional overages — just let us know in advance if you expect to exceed this regularly.</p>
          </InfoCard>

          <InfoCard icon={ShieldCheck} title="Animal-Proof Bin Required" index={3}>
            <p>All garbage must be stored in an <strong className="text-foreground">animal-proof bin</strong> to prevent wildlife from getting into your waste.</p>
            <p className="text-foreground font-medium">We supply bins for $1,200 — order below or bring your own.</p>
          </InfoCard>
        </div>
      </section>

      {/* Inquiry / Order Form */}
      <section className="bg-card py-16" id="inquire">
        <div className="section-padding max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-2 text-center">Get Started</h2>
            <p className="text-muted-foreground text-center mb-8">Inquire about the service or order an animal-proof bin.</p>

            {/* Toggle */}
            <div className="flex gap-2 mb-8 justify-center">
              <button
                onClick={() => { setFormType("inquiry"); setSubmitted(false); }}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-colors ${formType === "inquiry" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
              >
                Service Inquiry
              </button>
              <button
                onClick={() => { setFormType("bin"); setSubmitted(false); }}
                className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-colors ${formType === "bin" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"}`}
              >
                Order a Bin — $1,200
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {formType === "bin" ? "Bin Order Received!" : "Inquiry Sent!"}
                </h3>
                <p className="text-muted-foreground">We'll be in touch shortly. Thank you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                    <Input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="(705) 555-0123" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Island / Location *</label>
                    <Input required value={formData.island} onChange={(e) => setFormData({ ...formData, island: e.target.value })} placeholder="e.g. Browning Island" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    {formType === "bin" ? "Delivery details or questions" : "Message"}
                  </label>
                  <Textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={formType === "bin" ? "Any delivery instructions or questions about the bin..." : "Tell us about your property and what you need..."} rows={4} />
                </div>
                <Button type="submit" size="lg" disabled={loading} className="w-full uppercase tracking-wide font-semibold">
                  {loading ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Send className="h-4 w-4 mr-2" />}
                  {formType === "bin" ? "Order Bin" : "Send Inquiry"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WeeklyGarbage;
