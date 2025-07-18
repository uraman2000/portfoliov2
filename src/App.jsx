import { useEffect, useRef, useState } from "react"
import { animated, useSpring } from '@react-spring/web'

import "./App.css"
import Hero from "./sections/Hero"
import Nav from "./sections/Nav"
import About from "./sections/About"
import Resume from "./sections/Resume"
import Portfolio from "./sections/Portfolio"
import Contact from "./sections/Contact"

function App() {
  const itemEls = useRef([])
  const [isLoading, setIsLoading] = useState(true)
  
  // Page load animation
  const pageAnimation = useSpring({
    opacity: isLoading ? 0 : 1,
    transform: isLoading ? 'translateY(50px)' : 'translateY(0px)',
    config: { tension: 120, friction: 25 },
  })
  
  // Loading screen animation
  const loadingAnimation = useSpring({
    opacity: isLoading ? 1 : 0,
    transform: isLoading ? 'scale(1)' : 'scale(0.8)',
    config: { tension: 200, friction: 20 },
  })

  useEffect(() => {
    console.log("🚀 ~ file: App.jsx:10 ~ App ~ itemEls:", itemEls)
    
    // Simulate loading time and then fade in the page
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    // Add smooth scroll behavior
    const handleSmoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth'
    }
    
    handleSmoothScroll()
    
    return () => {
      clearTimeout(timer)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [itemEls])

  if (isLoading) {
    return (
      <animated.div 
        style={loadingAnimation}
        className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 z-50"
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading Portfolio</h2>
          <p className="text-gray-500">Please wait while we prepare everything for you...</p>
        </div>
      </animated.div>
    )
  }

  return (
   <>
    <Nav observerRefs={itemEls} />
    <animated.div style={pageAnimation}>
      
      <Hero innerRef={element => (itemEls.current[0] = element)} />
      <About innerRef={element => (itemEls.current[1] = element)} />
      <Resume innerRef={element => (itemEls.current[2] = element)} />
      <Portfolio innerRef={element => (itemEls.current[3] = element)} />
      <Contact innerRef={element => (itemEls.current[4] = element)} />
    </animated.div></>
  )
}

export default App
