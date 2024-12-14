import React, { useRef, useState } from "react"
import Title from "../components/Title"
import emailjs from "@emailjs/browser"
import Loader from "../components/Loader"
import Envelope from "../assets/Envelope"
import Phone from "../assets/Phone"
import Footer from "./Footer"

export default function Contact({ innerRef }) {
  const form = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const sendEmail = e => {
    e.preventDefault()
    setIsLoading(true)
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
        <div className="w-10/12 md:w-11/12 xl:w-4/5">
          <Title text="CONTACT" />
          <div className="md:mt-0 mt-10 flex flex-col md:flex-row">
            <div className="w-full flex md:justify-center">
              <div className=" flex justify-evenly flex-col gap-10">
                <div className="flex gap-3 items-center">
                  <div>
                    <Envelope />
                  </div>
                  <div className="">
                    <h4 className="text-xl text-gray-600 font-bold">Email:</h4>
                    <p className="text-sm text-gray-600">
                      Uraman2000@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <div>
                    <Phone />
                  </div>
                  <div className="">
                    <h4 className="text-xl text-gray-600 font-bold">Call:</h4>
                    <p className="text-sm text-gray-600">+63 960 211 2123</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full space-y-8 p-6  ">
              <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                <div className="space-y-6">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      className=" focus:outline-none w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    />

                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      className=" focus:outline-none w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      id="subject"
                      name="subject"
                      required
                      className=" focus:outline-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required
                      className=" focus:outline-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="disabled:bg-gray-600 flex items-center py-2 px-4 bg-blue-600 enabled:hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform enabled:hover:scale-105"
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
