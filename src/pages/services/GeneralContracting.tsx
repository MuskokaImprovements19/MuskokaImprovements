import ServicePage from "@/components/ServicePage";
import { IMAGES } from "@/lib/images";

const GeneralContracting = () => (
  <ServicePage
    title="General Contracting"
    subtitle="Full-Service Construction Across Muskoka"
    heroImage={IMAGES.boathouse}
    description={[
      "From foundations to finishing touches, Muskoka Improvements provides comprehensive general contracting services across Bracebridge, Port Carling, Gravenhurst, and all of Muskoka.",
      "Whether you're building a new cottage, renovating an existing property, or adding a custom boathouse, our experienced team manages every aspect of your project with precision and care.",
      "We pride ourselves on transparent communication, quality craftsmanship, and delivering projects on time and on budget. Every project is owner-supervised to ensure the highest standards.",
    ]}
    features={["New builds & custom homes", "Boathouses & waterfront structures", "Foundations & framing", "Interior & exterior finishing", "Project management & planning", "Permit acquisition & compliance"]}
    gallery={[IMAGES.boathouse, IMAGES.construction, IMAGES.cottage, IMAGES.deck]}
  />
);

export default GeneralContracting;
