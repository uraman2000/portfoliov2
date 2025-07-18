/* eslint-disable react/no-unescaped-entities */
import Title from "../components/Title"
import meImage from "../assets/me.jpg"
import ArrowRight from "../assets/ArrowRight"
import { animated } from '@react-spring/web'
import { useScrollAnimation, useSlideAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'
import PropTypes from 'prop-types'

const ageCalculator = () => {
  const birthdate = new Date("1995-12-02")
  const currentDate = new Date()

  const age =
    currentDate.getFullYear() -
    birthdate.getFullYear() -
    (currentDate.getMonth() < birthdate.getMonth() ||
    (currentDate.getMonth() === birthdate.getMonth() &&
      currentDate.getDate() < birthdate.getDate())
      ? 1
      : 0)

  return age
}

export default function About({ innerRef }) {
  const info = {
    Birthday: "1 Dec 1996",
    Age: ageCalculator(),
    Website: "www.polimbing.dev",
    Phone: "+63 960 211 2123",
    Degree: "Bachelor",
    Email: "uraman2000@gmail.com",
  }

  // Animation for the main container
  const [containerRef, containerAnimation] = useScrollAnimation(0, 0.2)
  
  // Animation for the image (slide in from left)
  const [imageRef, imageAnimation] = useSlideAnimation('left', 100)
  
  // Animation for the content (slide in from right)
  const [contentRef, contentAnimation] = useSlideAnimation('right', 200)
  
  // Staggered animations for info items
  const infoItems = Object.entries(info)
  const [infoRef, infoAnimations] = useStaggeredAnimation(infoItems, 100)

  return (
    <section
      ref={innerRef}
      id="about"
      className="flex h-max mt-10  justify-center items-center"
    >
      <animated.div 
        ref={containerRef}
        style={containerAnimation}
        className="w-10/12 md:w-11/12 xl:w-3/5 "
      >
        <Title text="ABOUT" />
        <p className=" text-center">
          Greetings! I'm delighted to extend a warm welcome to my web portfolio.
          I am Pol Maynard O. Imbing, an IT and business specialist with a
          dedicated focus on Web Development. With a track record of more than
          five years, I bring a deep-seated enthusiasm for creating
          groundbreaking solutions and an unwavering commitment to enhancing my
          abilities.
        </p>
        <div className=" flex flex-col lg:flex-row mt-8  gap-10 items-center ">
          <animated.img 
            ref={imageRef}
            style={imageAnimation}
            className="w-max lg:w-2/5 h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" 
            src={meImage} 
            alt="Pol Maynard O. Imbing" 
          />
          <animated.div
            ref={contentRef}
            style={contentAnimation}
          >
            <div className="text-gray-500 font-bold text-3xl mb-2">
              Senior React Developer.
            </div>
            <div className="mb-4">
              I'm a passionate and results-driven web developer with a knack for
              turning ideas into functional and visually appealing digital
              experiences. My journey in the world of web development has been
              marked by a continuous quest for excellence and innovation.
            </div>
            <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
              {infoItems.map(([key, value], index) => (
                <animated.div 
                  key={key} 
                  style={infoAnimations[index]}
                  className="flex items-center gap-1 transform transition-transform hover:scale-105"
                >
                  <ArrowRight />
                  <strong>{key}: </strong> {value}
                </animated.div>
              ))}
            </div>
            <div className="mt-5">
              In my career, I've had the privilege of working on a wide range of
              projects that have honed my skills and deepened my passion for
              creating exceptional web solutions. I thrive on challenges and am
              constantly seeking opportunities to learn and grow. Feel free to
              explore my portfolio and get in touch if you have any inquiries or
              exciting projects in mind. I'm here to transform ideas into
              reality and contribute to the ever-evolving world of web
              development.
            </div>
          </animated.div>
        </div>
      </animated.div>
    </section>
  )
}

About.propTypes = {
  innerRef: PropTypes.func.isRequired,
}
