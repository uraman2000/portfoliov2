import React from "react"

const jobHistory = [
  {
    company: "Eteam Workforce Private Corporation",
    position: "Senior React Developer",
    duration: "Nov 2024 – Present",
    responsibilities: [
      "Collaborate with cross-functional teams including designers, backend developers, and QA to deliver robust healthcare-focused solutions.",
      "Work extensively with FHIR R5 standards to build interoperable healthcare applications that align with modern data exchange protocols.",
      "Maintain 80%+ coverage on unit and integration tests to ensure high code reliability, stability, and confidence during feature releases.",
      "Architect reusable, testable components and implement efficient UI patterns using technologies like Redux Toolkit, Tailwind CSS, and TypeScript.",
      "Conduct thorough code reviews and provide mentorship to junior developers to uphold code quality and consistency across the team.",
      "Optimize performance using techniques such as lazy loading, memoization, and dynamic imports.",
      "Participate actively in Agile processes including sprint planning, backlog grooming, and retrospectives.",
      "Ensure application accessibility and responsiveness across devices and browsers.",
    ],
  },
  {
    company: "Yempo - Your Employees Offshore",
    position: "Senior React Developer",
    duration: "Nov 2023 – Oct 2024",
    responsibilities: [
      "Participate in technical discussions and provide leadership in architectural decisions related to the front-end.",
      "Mentor and guide junior developers by providing code reviews, knowledge sharing, and on-the-job training.",
      "Stay up-to-date with the latest trends and advancements in React and related front-end technologies.",
      "Proactively identify and propose improvements to development processes and tools.",
      "Collaborate effectively with cross-functional teams (back-end developers, product managers) to achieve project goals.",
      "Take ownership of assigned features and applications, ensuring timely delivery and quality.",
      "Conduct thorough code reviews and provide actionable feedback to improve code quality, maintainability, and adherence to coding standards.",
    ],
  },
  {
    company: "New York Global Consultants Inc. (NYGCI)",
    position: "Senior React Developer",
    duration: "Feb 2023 – Nov 2023",
    responsibilities: [
      "Developing user-facing applications using ReactJS",
      "Build ReactJS application using Typescript.",
      "Building modular and reusable components and libraries",
      "Optimizing your application for performance",
      "Implementing automated testing integrated into development and maintenance workflows.",
      "Staying up to date with all recent developments in the JavaScript and ReactJS space",
      "Keeping an eye on security updates and issues found with React and all project dependencies.",
      "Proposing any upgrades and updates necessary for keeping up with modern security and development best practices",
    ],
  },

  {
    company: "Accenture Phils, Inc.",
    position: "Advance App Engineering Analyst",
    duration: "Feb 2021 – Feb 2023 ",
    responsibilities: [
      "Designing, developing, and integrating APIs using TypeScript using Nest.js.",
      "Managing projects from conception to finished product, either independently or with a team. Assisting with developer's changes and integrations.",
      "Contributing to team growth and self-paced continuous learning.",
      "Assisting the Software Developer Manager in implementing software development.",
      "Participating in providing ideas and options during planning sessions.",
      "Helping junior developers with bug fixing.",
    ],
  },
  {
    company: "Gold Bell Financial Service (Singapore)",
    position: "Front-end Web Developer",
    duration: "April – May 2020",
    responsibilities: [
      "Developing Front-end applications using React.js, Axios, and Styled Component with Styled System for custom design.",
      "Developing and debugging web views according to provided design specifications. Building reusable components for future use.",
      "Working with designers and Project Manager for deployment on the server.",
    ],
  },
  {
    company: "Radio Wealth Finance Company, Inc. (Philippines)",
    position: "Full Stack Web Developer",
    duration: "Jul 2019 – Feb 2021",
    responsibilities: [
      "Developing Rest APIs using Node.js, TypeOrm, MsSql, and MySQL.",
      "Developing Front-end applications using React.js and Material-UI.",
      "Developing a PDC monitoring system to monitor all the PDC transactions of all branches of the company.",
      "Developing APIs for Policy Portal using DotNet Entity Framework.",
    ],
  },
  {
    company: "Tektos Ecosystems Limited (Philippines)",
    position: "Android Developer",
    duration: "Aug 2018 – Nov 2018",
    responsibilities: [
      "Created a custom UI view component for the app.",
      "Improving and developing the app.",
    ],
  },
  {
    company: "Infotouch (Philippines)",
    position: "Android Developer",
    duration: "Feb 2018 – Aug 2018",
    responsibilities: [
      "Working with API developers and App Designers to deliver a user-friendly Stock Marketing app for the company's client.",
      "Using Retrofit and RxJava for API Integration.",
      "Using the Kotlin language.",
    ],
  },
]

export default function PersonalExperience() {
  const middleIndex = Math.ceil(jobHistory.length / 3)
  const column1Data = jobHistory.slice(0, middleIndex )
  const column2Data = jobHistory.slice(middleIndex)
console.log(middleIndex)
  const layout = item => {
    return (
      <div className="border-l-2 border-solid border-blue-500 pb-5 pl-5 p-4 pt-0">
        <div className=" text-blue-500 font-bold text-xl flex">
          <span className="-translate-x-7 w-4 h-4 border-2 border-blue-500 rounded-full flex items-center justify-center bg-white"></span>
          <span className="-translate-y-1/4 -translate-x-4">
            {item.company}
          </span>
        </div>
        <div className="-translate-y-3 italic">{item.position}</div>
        <div className="bg-gray-50 w-max py-1 px-4 font-semibold mb-4">
          {item.duration}
        </div>
        <ul className="ml-5 list-disc list-outside">
          {item.responsibilities.map((item, key) => (
            <li key={key} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:w-1/2 w-full">
        <div className="flex flex-col flex-wrap mt-2">
          {column1Data.map((item, index) => (
            <>
              {layout(item)}
            </>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div className="flex flex-col flex-wrap">
          {column2Data.map((item, index) => (
            <>
              {layout(item)}
            </>
          ))}
        </div>
      </div>
    </div>
  )

  // return jobHistory.map((item, index) => (
  //   <div
  //     key={index}
  //     className="border-l-2 border-solid border-blue-500 pb-5 pl-5 w-1/2 p-4"
  //   >
  //     <div className=" text-blue-500 font-bold text-xl flex">
  //       <span className="-translate-x-7 w-4 h-4 border-2 border-blue-500 rounded-full flex items-center justify-center bg-white"></span>
  //       <span className="-translate-y-1/4 -translate-x-4">{item.company}</span>
  //     </div>
  //     <div className="-translate-y-3 italic">{item.position}</div>
  //     <div className="bg-gray-50 w-max py-1 px-4 font-semibold mb-4">
  //       {item.duration}
  //     </div>
  //     <ul className="ml-5 list-disc list-outside">
  //       {item.responsibilities.map((item, key) => (
  //         <li key={key} className="mb-2">
  //           {item}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // ))
}
