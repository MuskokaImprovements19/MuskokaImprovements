import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, TreePine, Ship, Home } from "lucide-react";
import Layout from "@/components/Layout";
import { IMAGES } from "@/lib/images";
import PageSEO from "@/components/PageSEO";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const services = [
  { title: "Deck & Dock Building", desc: "Bespoke waterfront structures crafted to the highest standard.", icon: Ship, path: "/services/deck-building", img: IMAGES.deck },
  { title: "Cottage Renovations", desc: "Elevating your retreat with uncompromising craftsmanship and design.", icon: Home, path: "/services/cottage-renovations", img: IMAGES.kitchen },
  { title: "Property Management", desc: "White-glove, year-round stewardship for distinguished properties.", icon: TreePine, path: "/property-management", img: IMAGES.lakefront },
];

const Index = () => (
  <Layout>
      <PageSEO
        title="Muskoka Property Management, Renovations & Contracting"
        description="Premium cottage property management, deck & dock building, and renovations in Bracebridge, Port Carling, Gravenhurst and all of Muskoka. Locally owned since 2019."
        canonical="/"
      />
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.hero} alt="Muskoka lakefront property" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-primary font-semibold tracking-[0.3em] uppercase text-sm mb-4">
          Muskoka's Premier Property Experts
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
          Exclusive Care
          <br />
          <span className="text-gradient">For Muskoka's Finest</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          We partner with homeowners who demand nothing less than perfection. Premium property management, bespoke renovations, and white-glove service across Bracebridge, Port Carling, Gravenhurst, and all of Muskoka.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
            Become a Client <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold rounded-md hover:border-primary hover:text-primary transition-colors text-sm uppercase tracking-wide">
            View Our Portfolio
          </Link>
        </motion.div>
      </div>
    </section>

    {/* About */}
    <section className="section-padding py-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">About Us</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built on <span className="text-gradient">Quality & Trust</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2019 by Brendan Mizzen and Evan Kieraszewicz, Muskoka Improvements serves a select group of clients who expect the highest calibre of property care and craftsmanship. Owner-operated with hands-on expertise, we bring personal attention to every project.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            From bespoke boathouses and docks to complete cottage transformations, we handle every detail with precision. Our comprehensive property management ensures your investment is protected and pristine year-round. We accept a limited number of clients to maintain our standard of excellence.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:gap-3 transition-all">
            Inquire About Membership <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2} className="relative">
          <img src={IMAGES.boathouse} alt="Muskoka boathouse project" className="rounded-lg w-full aspect-[4/3] object-cover" />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-2xl">
            <p className="text-3xl font-bold font-serif">5+</p>
            <p className="text-sm font-medium">Years Serving Muskoka</p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="bg-card py-24">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">What We Do</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Link to={s.path} className="group relative block overflow-hidden rounded-lg aspect-[16/9]">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <s.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.deck} alt="Muskoka waterfront deck and dock project" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/85" />
      </div>
      <div className="relative z-10 text-center section-padding max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
          Ready To Elevate <span className="text-gradient">Your Property?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          We partner with a select few who share our commitment to excellence. Tell us about your property and vision — and why Muskoka Improvements is the right fit for you.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
          Submit Your Application <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
