import './App.css'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import ShowcaseSection from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";
import FeatureCards from "./sections/FeatureCards";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
function App() {
  return (
    <main>
      <div>
       <NavBar />
       <Hero />
       <ShowcaseSection />
       <FeatureCards />
       <Experience />
       <TechStack />
       <Contact/>
      </div>
    </main>
  )
}

export default App
