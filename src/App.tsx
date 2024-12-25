import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Services from '../src/components/Services';
import ServicesInfo from '../src/components/ServicesInfo';
import CustomWebsite from '../src/pages/CustomWebsite';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          {/* Home route - renders the common components */}
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

          {/* CustomWebsite route - only renders the CustomWebsite component */}
          <Route path="/custom-website" element={<CustomWebsite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
