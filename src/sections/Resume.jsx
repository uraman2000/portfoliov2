/* eslint-disable react/no-unescaped-entities */
import PersonalExperience from "../components/PersonalExperience"
import Title from "../components/Title"
import { animated } from '@react-spring/web'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import PropTypes from 'prop-types'

export default function Resume({ innerRef }) {
  // Animation for the main container
  const [containerRef, containerAnimation] = useScrollAnimation(0, 0.2)
  
  // Animation for the experience section
  const [experienceRef, experienceAnimation] = useScrollAnimation(200, 0.3)

  return (
    <section
      ref={innerRef}
      id="resume"
      className="flex h-max mt-10 justify-center items-center "
    >
      <animated.div 
        ref={containerRef}
        style={containerAnimation}
        className="w-10/12 md:w-11/12 xl:w-3/5"
      >
        <Title text="RESUME" />
        <p className=" text-center mb-8">
          Throughout my professional journey, I've been driven by a relentless
          pursuit of excellence and a passion for creating innovative solutions.
          I've had the privilege of working on diverse projects that have
          allowed me to grow and refine my skills. I believe in the power of
          technology to transform ideas into reality, and I'm dedicated to
          pushing the boundaries of what's possible in the world of IT and
          business.
        </p>
        <div className="text-3xl font-bold text-gray-600 mt-5 mb-6">
          Professional Experience
        </div>
        <animated.div 
          ref={experienceRef}
          style={experienceAnimation}
          className="flex flex-col flex-wrap gap-x-8"
        >
          <PersonalExperience />
        </animated.div>
      </animated.div>
    </section>
  )
}

Resume.propTypes = {
  innerRef: PropTypes.func.isRequired,
}
