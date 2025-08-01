import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

// Service Pages

import AllServices from "./pages/services/AllServices";
import ACServices from "./pages/services/ACServices";
import WaterServices from "./pages/services/WaterServices";
import RefrigeratorServices from "./pages/services/RefrigeratorServices";
import WashingMachineServices from "./pages/services/WashingMachineService";
import KitchenServices from "./pages/services/KitchenServices";
import ServiceDetail from './pages/services/ServiceDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/services" element={<AllServices />} />
          <Route path="/services/ac-services" element={<ACServices />} />
          <Route path="/services/water-services" element={<WaterServices />} />
          <Route
            path="/services/refrigerator-services"
            element={<RefrigeratorServices />}
          />
          <Route
            path="/services/washing-machine-services"
            element={<WashingMachineServices />}
          />
          <Route
            path="/services/kitchen-services"
            element={<KitchenServices />}
          />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
