import { useEffect, useRef } from "react"

import "./App.css"
import Hero from "./sections/Hero"
import Nav from "./sections/Nav"
import About from "./sections/About"
import Resume from "./sections/Resume"
import Portfolio from "./sections/Portfolio"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  const itemEls = useRef([])

  useEffect(() => {
    console.log("🚀 ~ file: App.jsx:10 ~ App ~ itemEls:", itemEls)
  }, [itemEls])

  return (
    <>
      <Nav observerRefs={itemEls} />
      <Hero innerRef={element => (itemEls.current[0] = element)} />
      <About innerRef={element => (itemEls.current[1] = element)} />
      <Resume innerRef={element => (itemEls.current[2] = element)} />
      <Portfolio innerRef={element => (itemEls.current[3] = element)} />
      <Contact innerRef={element => (itemEls.current[4] = element)} />
     
    </>
  )
}

export default App
