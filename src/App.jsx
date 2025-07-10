import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WID from './components/WID';
import Education from './components/Education';
import Proficiency from './components/Proficiency';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'
// const themeColors = {
//   primary: "#2D2D2D",     // Dark Ash - main background, nav bar
//   secondary: "#F45D01",   // Royal Orange - buttons, call-to-action, highlights
//   text: "#F5F5F5",        // Soft light gray - for general text
//   textMuted: "#B0B0B0",   // Muted gray - subtext or placeholder text
//   accent: "#FFFFFF",      // White - cards, sections, dividers
//   border: "#3A3A3A",      // Slightly lighter than primary - for subtle borders
// }

{/* <a href="https://lordicon.com/">Icons by Lordicon.com</a> */}
// attribution


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WID/>
      <Proficiency/>
      <Education/>
      <Projects/>
      <Contact />
      <Footer/>
    </>
  )
}

export default App
