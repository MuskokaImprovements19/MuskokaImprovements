import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Layout from "./Layout";

interface ServicePageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string[];
  features: string[];
  gallery: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const ServicePage = ({ title, subtitle, heroImage, description, features, gallery }: ServicePageProps) => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
      <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="relative z-10 section-padding pb-12 max-w-7xl mx-auto w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-2">{subtitle}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground">{title}</motion.h1>
      </div>
    </section>

    {/* Content */}
    <section className="section-padding py-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-4">
          {description.map((p, i) => (
            <motion.p key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="text-muted-foreground leading-relaxed text-lg">
              {p}
            </motion.p>
          ))}
        </div>
        <div>
          <div className="bg-card rounded-lg p-8 border border-border sticky top-28">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">What's Included</h3>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <motion.li key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  {f}
                </motion.li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
              Get a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Gallery */}
    {gallery.length > 0 && (
      <section className="bg-card py-20">
        <div className="section-padding max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-10">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i} className="overflow-hidden rounded-lg">
                <img src={img} alt={`${title} project ${i + 1}`} className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* CTA */}
    <section className="section-padding py-20 text-center max-w-3xl mx-auto">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
      <p className="text-muted-foreground mb-8">Contact us today for a free consultation and quote.</p>
      <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
        Contact Us <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  </Layout>
);

export default ServicePage;
