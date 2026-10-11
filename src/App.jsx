import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Work from "./sections/Work"
import Services from "./sections/Services"
import Experience from "./sections/Experience"
import Stack from "./sections/Stack"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Work />
        <Services />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
