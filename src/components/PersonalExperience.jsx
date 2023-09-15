import React from "react"

const jobHistory = [
  {
    company: "New York Global Consultants Inc. (NYGCI)",
    position: "Senior React Developer",
    duration: "Feb 2023 – Present",
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
    company: "Tektos Ecosystems Limited (Philippines)",
    position: "Android Developer",
    duration: "Aug 2018 – Nov 2018",
    responsibilities: [
      "Created a custom UI view component for the app.",
      "Improving and developing the app.",
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
  return jobHistory.map((item, index) => (
    <div
      key={index}
      className="border-l-2 border-solid border-blue-500 pb-5 pl-5"
    >
      <div className=" text-blue-500 font-bold text-xl flex">
        <span className="-translate-x-7 w-4 h-4 border-2 border-blue-500 rounded-full flex items-center justify-center bg-white"></span>
        <span className="-translate-y-1/4 -translate-x-4">{item.company}</span>
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
  ))
}
