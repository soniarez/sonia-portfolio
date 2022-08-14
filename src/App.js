import Home from './components/Home';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import SkillSet from './components/SkillSet';
import Contact from './components/Contact';
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <SkillSet />
      <Contact />

      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
