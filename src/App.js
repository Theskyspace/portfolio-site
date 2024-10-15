import './App.css';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import Experience from './components/experience';
import Contact from './components/contact';
import Work from './components/work';
import { BrowserRouter , Route,  Switch } from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={resume} />
      </Switch  >
    </BrowserRouter>
  </>
  );
}
function Home() {
  console.log("Here")
  return (
    <div className="HeroSection">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Experience />
      <Work />
      <Contact />
    </div>
  )
}
const resume = () => {
  // Replace "resume.pdf" with the path to your PDF file
  const pdfUrl = "/static/media/Akash_2024.dc8f35e5f23309edffdc.pdf";
  window.location.href = pdfUrl;
  return null; // Return null to prevent rendering anything for this component
};

export default App;
