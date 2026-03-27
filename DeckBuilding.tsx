import ServicePage from "@/components/ServicePage";
import { IMAGES } from "@/lib/images";

const DeckBuilding = () => (
  <ServicePage
    title="Deck Building"
    subtitle="Custom Decks Built for Muskoka Living"
    heroImage={IMAGES.deck}
    description={[
      "Your deck is where memories are made — morning coffees overlooking the lake, summer barbecues, and starlit evenings. Muskoka Improvements builds custom decks designed to enhance your outdoor living experience.",
      "We use premium materials built to withstand Muskoka's harsh winters and beautiful summers. Every deck is custom-designed to complement your property's architecture and maximize your views.",
      "From initial design consultation to final staining, we handle every detail with craftsmanship and care.",
    ]}
    features={["Custom design & layout", "Premium composite & natural wood", "Multi-level & wraparound decks", "Built-in seating & planters", "Railing & stair systems", "Staining & weatherproofing"]}
    gallery={[IMAGES.deck, IMAGES.cottage, IMAGES.lakefront]}
  />
);

export default DeckBuilding;
