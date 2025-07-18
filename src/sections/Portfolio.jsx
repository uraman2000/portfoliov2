/* eslint-disable react/no-unescaped-entities */
import Title from "../components/Title"
import clearlyImage from "../assets/portfolio/clearly.png"
import borrowersImage from "../assets/portfolio/borrowers.png"
import creditOfficerImage from "../assets/portfolio/creditOfficer.png"
import dataLabImage from "../assets/portfolio/data-lab.png"
import { animated } from '@react-spring/web'
import { useScrollAnimation, useStaggeredAnimation, useHoverAnimation } from '../hooks/useScrollAnimation'
import PropTypes from 'prop-types'

const list = [
  {
    name: "Data Lab",
    image: dataLabImage,
    link: " https://cs.c-datalab.com/",
  }, {
    name: "Clearly",
    image: clearlyImage,
    link: " https://www.clearly.ca/en-ca",
  },
  {
    name: "Goldbell Borrowers",
    image: borrowersImage,
    link: " https://goldbell-borrowers.netlify.app",
  },
  {
    name: "Goldbell Credit Office",
    image: creditOfficerImage,
    link: " https://goldbell-credit-office.netlify.app",
  },
]

// Portfolio Item Component with animations
const PortfolioItem = ({ item, animation }) => {
  const [hoverAnimation, setIsHovered] = useHoverAnimation()
  
  return (
    <animated.div 
      style={{ ...animation, ...hoverAnimation }}
      className="relative pb-2/3 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="relative inset-0 w-full h-full object-cover rounded-lg"
        src={item.image}
        alt={item.name}
      />
      <a
        href={item.link}
        target="_blank"
        className="transition-all duration-300 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 absolute inset-0 bg-gray-50 bg-opacity-90 rounded-lg flex items-center justify-center"
        rel="noreferrer"
      >
        <div className="w-full h-full flex justify-center items-center relative">
          <div className="top-4 left-4 border-blue-500 border-t-2 border-l-2 z-10 absolute h-12 w-12 rounded-tl-lg transition-all duration-300"></div>
          <div className="text-xl grid text-center transform transition-transform duration-300 group-hover:scale-110">
            <div className="font-bold text-gray-800">{item.name}</div>
            <div className="italic text-sm text-blue-600">{item.link}</div>
          </div>
          <div className="bottom-4 right-4 border-blue-500 border-b-2 border-r-2 z-10 absolute h-12 w-12 rounded-br-lg transition-all duration-300"></div>
        </div>
      </a>
    </animated.div>
  )
}

PortfolioItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  animation: PropTypes.object.isRequired,
}

export default function Portfolio({ innerRef }) {
  // Animation for the main container
  const [containerRef, containerAnimation] = useScrollAnimation(0, 0.2)
  
  // Staggered animations for portfolio items
  const [gridRef, gridAnimations] = useStaggeredAnimation(list, 150)

  return (
    <section
      ref={innerRef}
      id="portfolio"
      className="flex h-max  justify-center mt-10"
    >
      <animated.div 
        ref={containerRef}
        style={containerAnimation}
        className="w-10/12 md:w-11/12 xl:w-3/5"
      >
        <Title text="PORTFOLIO" />
        <p className=" text-center mb-8">
          Here are some of the remarkable projects I've had the pleasure of
          working on. Each project represents a unique challenge, a creative
          journey, and a testament to my skills and dedication to delivering
          exceptional results. Below, you'll find a selection of projects.
        </p>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {list.map((item, index) => (
            <PortfolioItem
              key={index}
              item={item}
              animation={gridAnimations[index]}
            />
          ))}
        </div>
      </animated.div>
    </section>
  )
}

Portfolio.propTypes = {
  innerRef: PropTypes.func.isRequired,
}
