/* eslint-disable react/no-unescaped-entities */
import LinkdnIcon from "../assets/LinkdnIcon"
import GithubIcon from "../assets/GithubIcon"

import Typewriter from "typewriter-effect"
export default function Hero({ innerRef }) {
  console.log(import.meta.env.BASE_URL)
  return (
    <section
      ref={innerRef}
      id="hero"
      className={`bg-hero bg-cover bg-center bg-fixed flex h-screen justify-center items-center`}
    >
      <div className=" bg-white absolute h-screen w-screen bg-opacity-90"></div>

      <div className="w-full md:w-3/5 z-20 flex gap-3 flex-col items-center md:items-start">
        <h1 className="text-3xl md:text-7xl font-bold text-gray-600">
          Pol Imbing
        </h1>

        <div className="text-gray-600 text-xl md:text-3xl flex items-center sm:flex-row flex-col gap-2">
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
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/uraman2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/pol-maynard-imbing-122a6315a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkdnIcon />
          </a>
          <a
            download
            href={"/pol-imbing-v2.pdf"}
            className="invisible w-0 md:visible md:w-max absolute md:relative md: disabled:bg-gray-600 flex items-center py-2 px-4 bg-blue-600 enabled:hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform enabled:hover:scale-105"
          >
            Download Resume
          </a>
        </div>
        <button className="mt-3 visible md:invisible disabled:bg-gray-600 flex items-center py-2 px-4 bg-blue-600 enabled:hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform enabled:hover:scale-105">
          Download Resume
        </button>
      </div>
    </section>
  )
}
