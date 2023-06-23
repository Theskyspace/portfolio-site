import './App.css';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Experience from './components/experience';
import Contact from './components/contact';
import Work from './components/work';

function App() {
  return (
    <div className="HeroSection">     
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
