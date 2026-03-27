import ServicePage from "@/components/ServicePage";
import { IMAGES } from "@/lib/images";

const DockBuilding = () => (
  <ServicePage
    title="Dock Building"
    subtitle="Premium Waterfront Docks & Boathouses"
    heroImage={IMAGES.dock}
    description={[
      "A quality dock is essential to the Muskoka lifestyle. Muskoka Improvements designs and builds custom docks and boathouses that are as beautiful as they are functional.",
      "We work with the natural contours of your shoreline to create waterfront structures that stand the test of time. From floating docks to permanent crib docks and full boathouses, we have the expertise to bring your vision to life.",
      "All our waterfront builds comply with local regulations and are engineered to handle Muskoka's ice, wind, and water conditions.",
    ]}
    features={["Floating & permanent docks", "Crib dock construction", "Boathouse builds & repairs", "Boat lifts & accessories", "Shoreline restoration", "Permit coordination"]}
    gallery={[IMAGES.dock, IMAGES.boathouse, IMAGES.lakefront]}
  />
);

export default DockBuilding;
