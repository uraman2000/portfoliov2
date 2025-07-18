/* eslint-disable react/no-unescaped-entities */
import LinkdnIcon from "../assets/LinkdnIcon"
import GithubIcon from "../assets/GithubIcon"
import { animated, useSpring } from '@react-spring/web'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PropTypes from 'prop-types'

import Typewriter from "typewriter-effect"

export default function Hero({ innerRef }) {
  // Animation for the main content container
  const [contentRef, contentAnimation] = useScrollAnimation(0, 0.1)
  
  const nameAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { tension: 120, friction: 25 },
    delay: 500,
  })

  const typewriterAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(30px)' },
    config: { tension: 120, friction: 25 },
    delay: 700,
  })

  const socialAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(30px)' },
    config: { tension: 120, friction: 25 },
    delay: 900,
  })

  const resumeAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(30px)' },
    config: { tension: 120, friction: 25 },
    delay: 1100,
  })

  // Background animation
  const backgroundAnimation = useSpring({
    opacity: 0.9,
    from: { opacity: 0 },
    config: { tension: 80, friction: 30 },
    delay: 100,
  })

  return (
    <section
      ref={innerRef}
      id="hero"
      className={`bg-hero bg-cover bg-center bg-fixed flex h-screen justify-center items-center relative overflow-hidden`}
    >
      <animated.div 
        style={backgroundAnimation}
        className="bg-white absolute h-screen w-screen"
      />

      <animated.div 
        ref={contentRef}
        style={contentAnimation}
        className="w-full md:w-3/5 z-20 flex gap-3 flex-col items-center md:items-start"
      >
        <animated.h1 
          style={nameAnimation}
          className="text-3xl md:text-7xl font-bold text-gray-600"
        >
          Pol Imbing
        </animated.h1>

        <animated.div 
          style={typewriterAnimation}
          className="text-gray-600 text-xl md:text-3xl flex items-center sm:flex-row flex-col gap-2"
        >
          <p>I'm a</p>
          <div className="text-blue-600">
            <Typewriter
              options={{
                strings: [
                  "React Developer",
                  "Nest Js Developer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </animated.div>

        <animated.div 
          style={socialAnimation}
          className="flex items-center gap-5"
        >
          <a
            href="https://github.com/uraman2000"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110 hover:rotate-3"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/pol-maynard-imbing-122a6315a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110 hover:-rotate-3"
          >
            <LinkdnIcon />
          </a>
          <a
            download
            href={"/pol-imbing-v2.pdf"}
            className="invisible w-0 md:visible md:w-max absolute md:relative md: disabled:bg-gray-600 flex items-center py-2 px-4 bg-blue-600 enabled:hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform enabled:hover:scale-105 enabled:hover:shadow-xl"
          >
            Download Resume
          </a>
        </animated.div>

        <animated.a
          style={resumeAnimation}
          download
          href={"/pol-imbing-v2.pdf"}
          className="mt-3 visible md:invisible disabled:bg-gray-600 flex items-center py-2 px-4 bg-blue-600 enabled:hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform enabled:hover:scale-105 enabled:hover:shadow-xl"
        >
          Download Resume
        </animated.a>
      </animated.div>
    </section>
  )
}

Hero.propTypes = {
  innerRef: PropTypes.func.isRequired,
}
