/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react"
import Title from "../components/Title"
import emailjs from "@emailjs/browser"
import Loader from "../components/Loader"
import Envelope from "../assets/Envelope"
import Phone from "../assets/Phone"
import Footer from "./Footer"
import { animated, useSpring } from '@react-spring/web'
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation'
import PropTypes from 'prop-types'

export default function Contact({ innerRef }) {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  
  // Animation for the main container
  const [containerRef, containerAnimation] = useScrollAnimation(0, 0.2)
  
  // Animation for contact info items
  const contactItems = [
    { id: 'email', icon: Envelope, title: 'Email:', content: 'Uraman2000@gmail.com' },
    { id: 'phone', icon: Phone, title: 'Call:', content: '+63 960 211 2123' }
  ]
  const [contactRef, contactAnimations] = useStaggeredAnimation(contactItems, 100)
  
  // Animation for form
  const [formRef, formAnimation] = useScrollAnimation(200, 0.3)
  
  // Success message animation
  const successAnimation = useSpring({
    opacity: formSuccess ? 1 : 0,
    transform: formSuccess ? 'translateY(0px)' : 'translateY(-20px)',
    config: { tension: 200, friction: 20 },
  })
  
  // Form input animations
  const [focusedInput, setFocusedInput] = useState(null)
  
  // Individual input animations
  const nameAnimation = useSpring({
    transform: focusedInput === 'name' ? 'scale(1.02)' : 'scale(1)',
    boxShadow: focusedInput === 'name' 
      ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
      : '0 0 0 0px rgba(59, 130, 246, 0.1)',
    config: { tension: 200, friction: 15 },
  })
  
  const emailAnimation = useSpring({
    transform: focusedInput === 'email' ? 'scale(1.02)' : 'scale(1)',
    boxShadow: focusedInput === 'email' 
      ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
      : '0 0 0 0px rgba(59, 130, 246, 0.1)',
    config: { tension: 200, friction: 15 },
  })
  
  const subjectAnimation = useSpring({
    transform: focusedInput === 'subject' ? 'scale(1.02)' : 'scale(1)',
    boxShadow: focusedInput === 'subject' 
      ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
      : '0 0 0 0px rgba(59, 130, 246, 0.1)',
    config: { tension: 200, friction: 15 },
  })
  
  const messageAnimation = useSpring({
    transform: focusedInput === 'message' ? 'scale(1.02)' : 'scale(1)',
    boxShadow: focusedInput === 'message' 
      ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
      : '0 0 0 0px rgba(59, 130, 246, 0.1)',
    config: { tension: 200, friction: 15 },
  })

  const sendEmail = e => {
    e.preventDefault()
    setIsLoading(true)
    setFormSuccess(false)
    
    emailjs
      .sendForm(
        "service_tezgr8s",
        "template_d3pj1vk",
        form.current,
        "VhBIqLIiWJs-Isbt7"
      )
      .then(
        result => {
          console.log(result.text)
          e.target.reset()
          setIsLoading(false)
          setFormSuccess(true)
          setTimeout(() => setFormSuccess(false), 5000)
        },
        error => {
          console.log(error.text)
          e.target.reset()
          setIsLoading(false)
        }
      )
  }
  
  return (
    <div
      ref={innerRef}
      id="contact"
      className="h-max flex flex-col justify-between "
    >
      <section className="flex justify-center items-center pt-16">
        <animated.div 
          ref={containerRef}
          style={containerAnimation}
          className="w-10/12 md:w-11/12 xl:w-4/5"
        >
          <Title text="CONTACT" />
          <div className="md:mt-0 mt-10 flex flex-col md:flex-row">
            <div className="w-full flex md:justify-center">
              <div ref={contactRef} className=" flex justify-evenly flex-col gap-10">
                {contactItems.map((item, index) => (
                  <animated.div 
                    key={item.id}
                    style={contactAnimations[index]}
                    className="flex gap-3 items-center transform transition-transform hover:scale-105"
                  >
                    <div className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                      <item.icon />
                    </div>
                    <div className="">
                      <h4 className="text-xl text-gray-600 font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.content}</p>
                    </div>
                  </animated.div>
                ))}
              </div>
            </div>
            <animated.div 
              ref={formRef}
              style={formAnimation}
              className="w-full space-y-8 p-6"
            >
              {formSuccess && (
                <animated.div 
                  style={successAnimation}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4"
                >
                  Message sent successfully! I'll get back to you soon.
                </animated.div>
              )}
              
              <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <animated.input
                      style={nameAnimation}
                      type="text"
                      placeholder="Name"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                      className="focus:outline-none w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                    />

                    <animated.input
                      style={emailAnimation}
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                      className="focus:outline-none w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <animated.input
                      style={subjectAnimation}
                      type="text"
                      placeholder="Subject"
                      id="subject"
                      name="subject"
                      required
                      onFocus={() => setFocusedInput('subject')}
                      onBlur={() => setFocusedInput(null)}
                      className="focus:outline-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <animated.textarea
                      style={messageAnimation}
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required
                      onFocus={() => setFocusedInput('message')}
                      onBlur={() => setFocusedInput(null)}
                      className="focus:outline-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="disabled:bg-gray-600 flex items-center py-2 px-4 bg-blue-600 enabled:hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out transform enabled:hover:scale-105 enabled:hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <Loader /> Sending ....
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </animated.div>
          </div>
        </animated.div>
      </section>

      <Footer />
    </div>
  )
}

Contact.propTypes = {
  innerRef: PropTypes.func.isRequired,
}
