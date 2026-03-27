import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, TreePine, Snowflake, Droplets, Leaf, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import { IMAGES } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const services = [
  { icon: Shield, title: "Weekly Maintenance", desc: "Regular property checks, cleaning, and upkeep to keep your cottage in top shape." },
  { icon: Wrench, title: "Preventative Maintenance", desc: "Proactive inspections and repairs to avoid costly surprises." },
  { icon: Leaf, title: "Landscaping", desc: "Lawn care, garden maintenance, and property beautification." },
  { icon: Snowflake, title: "Winter Services", desc: "Snow removal, ice management, and winterization to protect your investment." },
  { icon: Droplets, title: "Water Systems", desc: "Water line opening, closing, and maintenance for seasonal properties." },
  { icon: TreePine, title: "Lot Clearing & Tree Work", desc: "Brush clearing, tree removal, and lot preparation services." },
];

const PropertyManagement = () => (
  <Layout>
    <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
      <img src={IMAGES.lakefront} alt="Muskoka property management" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="relative z-10 section-padding pb-12 max-w-7xl mx-auto w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">Relax, We've Got You Covered</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground">Property Management</motion.h1>
      </div>
    </section>

    <section className="section-padding py-20 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-lg text-muted-foreground leading-relaxed mb-4">
          Your Muskoka property is more than an investment — it's where family memories are made. Muskoka Improvements provides comprehensive property management services so you can enjoy your time at the cottage worry-free.
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="text-lg text-muted-foreground leading-relaxed">
          From weekly maintenance checks to seasonal opening and closing, we handle everything. Our team treats your property as if it were our own — with care, attention to detail, and the local knowledge that only comes from living and working in Muskoka.
        </motion.p>
      </div>
    </section>

    <section className="bg-card py-20">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">What We Offer</p>
          <h2 className="font-serif text-4xl font-bold text-foreground">Our Property Management Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="bg-background border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
              <s.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding py-20 max-w-7xl mx-auto">
      <h2 className="font-serif text-3xl font-bold text-foreground mb-10">Properties We Manage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[IMAGES.lakefront, IMAGES.deck, IMAGES.cottage].map((img, i) => (
          <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="overflow-hidden rounded-lg">
            <img src={img} alt={`Managed property ${i + 1}`} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>

    <section className="bg-card py-20 text-center">
      <div className="section-padding max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Let Us Take Care of Your Property</h2>
        <p className="text-muted-foreground text-lg mb-8">Get a customized property management plan tailored to your needs.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
          Get Started <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default PropertyManagement;
