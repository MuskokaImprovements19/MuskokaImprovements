import ServicePage from "@/components/ServicePage";
import { IMAGES } from "@/lib/images";
import PageSEO from "@/components/PageSEO";

const CottageRenovations = () => (
    <>
      <PageSEO
        title="Cottage Renovations in Muskoka | Kitchen, Bathroom & Full Remodels"
        description="Expert cottage renovation services in Bracebridge, Port Carling, Gravenhurst and Muskoka. Kitchens, bathrooms, additions and full remodels with local craftsmanship."
        canonical="/services/cottage-renovations"
      />
      <ServicePage
    title="Cottage Renovations"
    subtitle="Transform Your Cottage Into a Modern Retreat"
    heroImage={IMAGES.kitchen}
    description={[
      "Whether you've just purchased a fixer-upper or want to modernize a family cottage that's been passed down through generations, Muskoka Improvements specializes in cottage renovations that respect character while adding modern comfort.",
      "We handle everything from kitchen and bathroom remodels to complete interior overhauls. Our team understands the unique challenges of cottage construction — from seasonal access to working with older structures.",
      "Every renovation is tailored to your vision, timeline, and budget. We keep you informed every step of the way.",
    ]}
    features={["Kitchen & bathroom remodels", "Open-concept conversions", "Flooring & finishing", "Windows & insulation upgrades", "Structural repairs & reinforcement", "Custom cabinetry & built-ins"]}
    gallery={[IMAGES.kitchen, IMAGES.cottage, IMAGES.construction]}
      />
    </>
  );

export default CottageRenovations;
