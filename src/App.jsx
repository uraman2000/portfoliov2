import Spotlight from "./components/Spotlight"
import Header from "./sections/Header"
import Hero from "./sections/Hero"
import TechMarquee from "./sections/TechMarquee"
import Experience from "./sections/Experience"
import Work from "./sections/Work"
import Stack from "./sections/Stack"
import Services from "./sections/Services"
// import Writing from "./sections/Writing" (hidden until there are real posts)
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App() {
  return (
    // Clips the drifting orbs sideways without breaking the sticky header
    <div className="relative overflow-x-clip">
      <Spotlight />
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <TechMarquee />
        {/* Section numbers follow page order: renumber Contact when Writing comes back */}
        <Experience index="01" />
        <Work index="02" />
        <Stack index="03" />
        <Services index="04" />
        {/* <Writing index="05" /> */}
        <Contact index="05" />
      </main>
      <Footer />
    </div>
  )
}
