import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import PageSEO from "@/components/PageSEO";

const InstagramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
);

const Projects = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the LightWidget script dynamically
    const existingScript = document.querySelector('script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Layout>
      <PageSEO
        title="Our Projects | Muskoka Improvements Portfolio"
        description="Browse recent renovation, deck, dock and property management projects across Bracebridge, Port Carling, Gravenhurst and Muskoka. Updated from our Instagram feed."
        canonical="/projects"
      />
      <section className="section-padding pt-16 pb-12 max-w-7xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-primary font-semibold tracking-[0.2em] uppercase text-sm mb-3">Portfolio</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Our Projects</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-muted-foreground max-w-2xl">
          Latest from our Instagram — real projects across Muskoka, updated automatically.
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          href="https://www.instagram.com/muskokaimprovements/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:underline"
        >
          <InstagramIcon /> @muskokaimprovements <ExternalLink className="h-4 w-4" />
        </motion.a>
      </section>

      <section className="section-padding pb-20 max-w-7xl mx-auto" ref={widgetRef}>
        <iframe
          src="https://lightwidget.com/widgets/f152e168e85e569681b2aae76683d1d3.html"
          className="lightwidget-widget w-full border-0 overflow-hidden"
          style={{ width: "100%", border: "0", overflow: "hidden" }}
          scrolling="no"
          allowTransparency
          title="Instagram feed from @muskokaimprovements"
        />
      </section>

      <section className="bg-card py-16 text-center">
        <div className="section-padding">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">See More on Instagram</h2>
          <p className="text-muted-foreground mb-6">Follow us for daily project updates, before & afters, and Muskoka inspiration.</p>
          <a href="https://www.instagram.com/muskokaimprovements/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wide">
            <InstagramIcon /> @muskokaimprovements
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
