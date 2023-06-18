import { Link , Route} from 'react-router-dom';
import './App.css';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="HeroSection">     
      <NavBar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
