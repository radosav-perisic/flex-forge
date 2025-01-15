import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import ServicesInfo from "../src/components/ServicesInfo";
import CustomWebsite from "../src/pages/CustomWebsite";
import Footer from "./components/Footer";
import SeoOptimization from "./pages/SeoOptimization";
import WebsiteRedesign from "./pages/WebsiteRedesign";

import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <ServicesInfo />
              </>
            }
          />

          <Route path="/custom-website" element={<CustomWebsite />} />
          <Route path="/seo-optimization" element={<SeoOptimization />} />
          <Route path="/website-redesign" element={<WebsiteRedesign />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
