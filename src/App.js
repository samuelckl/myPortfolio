import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './pages/components/Navbar';
import Footer from './pages/components/Footer';

const App = () => {
  return (
     <>
     <div className="bg-gradient-to-r from-orange-50 to-orange-200 h-screen m-0 pt-4">
      <div className ="" >
        <Navbar />
        </div>
     
        <Routes>
           <Route path="/myPortfolio" element={<Home />} />
           <Route path="/skills" element={<Skills />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/resume" element={<Resume />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        </div>
        
     </>
  );
};

export default App;
