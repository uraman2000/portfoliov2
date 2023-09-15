import Title from "../components/Title"
import clearlyImage from "../assets/portfolio/clearly.png"
import borrowersImage from "../assets/portfolio/borrowers.png"
import creditOfficerImage from "../assets/portfolio/creditOfficer.png"

const list = [
  {
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
export default function Portfolio({ innerRef }) {
  return (
    <section
      ref={innerRef}
      id="portfolio"
      className="flex xl:h-screen mt-10 xl:mt-0 justify-center pt-16"
    >
      <div className="w-10/12 md:w-11/12 xl:w-3/5">
        <Title text="PORTFOLIO" />
        <p className=" text-center mb-8">
          Here are some of the remarkable projects I've had the pleasure of
          working on. Each project represents a unique challenge, a creative
          journey, and a testament to my skills and dedication to delivering
          exceptional results. Below, you'll find a selection of projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {list.map((item, index) => (
            <div key={index} className="relative pb-2/3 group">
              <img
                className="relative inset-0 w-full h-full object-cover"
                src={item.image}
              />
              <a
                href={item.link}
                target="_blank"
                className=" transition scale-50 group-hover:scale-100 invisible group-hover:visible absolute inset-0 bg-gray-50 bg-opacity-80"
                rel="noreferrer"
              >
                <div className="w-full h-full flex justify-center items-center">
                  <div className="top-4 left-4 border-gray-300 border-t-2 border-l-2 z-10 absolute h-12 w-12"></div>
                  <div className="text-xl grid text-center">
                    <div className="font-bold">{item.name}</div>
                    <div className="italic text-sm">{item.link}</div>
                  </div>

                  <div className="bottom-4 right-4 border-gray-300 border-b-2 border-r-2 z-10 absolute h-12 w-12 block"></div>
                </div>
              </a>
            </div>
          ))}

          {/* <img src={borrowersImage} alt="" />

          <img src={creditOfficerImage} alt="" /> */}
        </div>
      </div>
    </section>
  )
}
