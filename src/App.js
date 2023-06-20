import { Link , Route} from 'react-router-dom';
import './App.css';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Experience from './components/experience';

function App() {
  return (
    <div className="HeroSection">     
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Experience />
    </div>
  );
}

export default App;
