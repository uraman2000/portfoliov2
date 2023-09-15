import homeIcon from "../assets/home.svg"
import aboutIcon from "../assets/about.svg"
import resumeIcon from "../assets/resume.svg"
import portfolioIcon from "../assets/portfolio.svg"
import servicesIcon from "../assets/services.svg"
import contactIcon from "../assets/contact.svg"
import { useEffect, useMemo, useRef, useState } from "react"
import CloseIcon from "../assets/CloseIcon"
import HamburgerIcon from "../assets/HamburgerIcon"

export default function Nav({ observerRefs }) {
  const navItems = [
    {
      name: "Home",
      icon: homeIcon,
      href: "#hero",
    },
    {
      name: "About",
      icon: aboutIcon,
      href: "#about",
    },
    {
      name: "Resume",
      icon: resumeIcon,
      href: "#resume",
    },
    {
      name: "Portfolio",
      icon: portfolioIcon,
      href: "#portfolio",
    },

    {
      name: "Contact",
      icon: contactIcon,
      href: "#contact",
    },
  ]

  const [isIntersecting, setIsIntersecting] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(entry.target.id)
          }
        },
        { rootMargin: "-30%" }
      ),
    []
  )

  useEffect(() => {
    observerRefs.current.map(item => observer.observe(item))
    // observer.observe(observerRefs.current[0])

    return () => {
      observer.disconnect()
    }
  }, [observerRefs, observer])
  const hamburgerHandler = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header id="header">
      <nav
        id="navbar"
        className="ml-5 fixed top-0 left-0 z-10 invisible md:visible navbar nav-menu h-screen flex items-center"
      >
        <ul className="flex flex-col gap-3 ">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`${
                  item.href.replace(/#/g, "") === isIntersecting
                    ? "bg-blue-500"
                    : "bg-gray-100"
                } group hover:bg-blue-500   w-14 h-14 rounded-full  flex  hover:w-32   transition-width duration-300 flex-row gap-3 items-center`}
              >
                <img
                  src={item.icon}
                  className={`${
                    item.href.replace(/#/g, "") === isIntersecting
                      ? "invert"
                      : ""
                  } group-hover:invert h-5`}
                  style={{ paddingLeft: " 18px" }}
                />

                <span className="text-white invisible group-hover:visible">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className=" visible md:invisible ">
        <button
          className="fixed top-10 right-10 z-10"
          onClick={hamburgerHandler}
        >
          {!isOpen ? <HamburgerIcon /> : <CloseIcon />}
        </button>
        <nav
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform transform fixed z-50 border-r w-3/6 bg-white px-5 h-screen flex items-center justify-center`}
        >
          <ul className="flex flex-col gap-3  w-full">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`${
                    item.href.replace(/#/g, "") === isIntersecting
                      ? "bg-blue-500"
                      : "bg-gray-100"
                  } group w-full h-14 rounded-full flex flex-row gap-3 items-center`}
                >
                  <img
                    src={item.icon}
                    className={`${
                      item.href.replace(/#/g, "") === isIntersecting
                        ? "invert"
                        : ""
                    }  h-5`}
                    style={{ paddingLeft: " 18px" }}
                  />

                  <span
                    className={`${
                      item.href.replace(/#/g, "") === isIntersecting
                        ? "text-white"
                        : "text-gray-500"
                    } `}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
