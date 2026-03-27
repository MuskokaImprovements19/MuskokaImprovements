import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import PropertyManagement from "./pages/PropertyManagement";
import GeneralContracting from "./pages/services/GeneralContracting";
import DeckBuilding from "./pages/services/DeckBuilding";
import DockBuilding from "./pages/services/DockBuilding";
import CottageRenovations from "./pages/services/CottageRenovations";
import WeeklyGarbage from "./pages/services/WeeklyGarbage";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const basename = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/general-contracting" element={<GeneralContracting />} />
          <Route path="/services/deck-building" element={<DeckBuilding />} />
          <Route path="/services/dock-building" element={<DockBuilding />} />
          <Route path="/services/cottage-renovations" element={<CottageRenovations />} />
          <Route path="/services/weekly-garbage" element={<WeeklyGarbage />} />
          <Route path="/weekly-garbage" element={<WeeklyGarbage />} />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
