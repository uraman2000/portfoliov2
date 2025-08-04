/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { animated } from "@react-spring/web";
import { useStaggeredAnimation } from "../hooks/useScrollAnimation";

const jobHistory = [
  {
    company: "Eteam Workforce Private Corporation",
    position: "Senior React Developer",
    duration: "Nov 2024 – Present",
    techStack: [
      "React",
      "Typescript",
      "Redux tool kit",
      "Tailwind",
      "Ant Design",
      "Vitest",
    ],
    responsibilities: [
      "Collaborate with cross-functional teams including designers, backend developers, and QA to deliver robust healthcare-focused solutions",
      "Work extensively with FHIR R5 standards to build interoperable healthcare applications that align with modern data exchange protocols",
      "Maintain 80%+ coverage on unit and integration tests to ensure high code reliability, stability, and confidence during feature releases",
      "Architect reusable, testable components and implement efficient UI patterns using Redux Toolkit, Tailwind CSS, and TypeScript",
      "Conduct thorough code reviews and provide mentorship to junior developers to uphold code quality and consistency across the team",
      "Optimize performance using techniques such as lazy loading, memoization, and dynamic imports",
      "Participate actively in Agile processes including sprint planning, backlog grooming, and retrospectives",
      "Ensure application accessibility and responsiveness across devices and browsers",
    ],
  },
  {
    company: "Yempo - Your Employees Offshore",
    position: "Senior React Developer",
    duration: "Nov 2023 – Oct 2024",
    techStack: [
      "React",
      "Typescript",
      "Redux tool kit",
      "Tailwind",
      "Ant Design",
      "Vitest",
    ],
    responsibilities: [
      "Led technical discussions and provided leadership in architectural decisions related to frontend development",
      "Mentored and guided junior developers through code reviews, knowledge sharing, and hands-on training",
      "Stayed current with latest trends and advancements in React and related frontend technologies",
      "Proactively identified and proposed improvements to development processes and tools",
      "Collaborated effectively with cross-functional teams (backend developers, product managers) to achieve project goals",
      "Took ownership of assigned features and applications, ensuring timely delivery and quality",
      "Conducted thorough code reviews and provided actionable feedback to improve code quality, maintainability, and coding standards",
    ],
  },
  {
    company: "New York Global Consultants Inc. (NYGCI)",
    position: "Senior React Developer",
    duration: "Feb 2023 – Nov 2023",
    techStack: [
      "React",
      "Typescript",
      "Redux tool kit",
      "Material UI",
      "Styled component",
      "Vitest",
    ],
    responsibilities: [
      "Developed user-facing applications using React.js and TypeScript for enterprise clients",
      "Built modular and reusable components and libraries to improve development efficiency",
      "Optimized applications for performance using modern React patterns and best practices",
      "Implemented automated testing integrated into development and maintenance workflows",
      "Stayed up-to-date with developments in the JavaScript and React.js ecosystem",
      "Monitored security updates and issues with React and all project dependencies",
      "Proposed upgrades and updates necessary for maintaining modern security and development best practices",
    ],
  },

  {
    company: "Accenture Phils, Inc.",
    position: "Advance App Engineering Analyst",
    duration: "Feb 2021 – Feb 2023 ",
    techStack: [
      "Node.js",
      "Nest.js",
      "Typescript",
      "Postgres",
    ],
    responsibilities: [
      "Designed, developed, and integrated APIs using TypeScript and Nest.js for enterprise applications",
      "Managed projects from conception to delivery, both independently and with cross-functional teams",
      "Contributed to team growth through continuous learning initiatives and knowledge sharing",
      "Assisted Software Developer Manager in implementing software development best practices",
      "Participated in planning sessions providing technical insights and solution options",
      "Mentored junior developers in debugging and problem-solving techniques",
    ],
  },
  {
    company: "Gold Bell Financial Service (Singapore)",
    position: "Front-end Web Developer",
    duration: "April – May 2020",
    techStack: [
      "React.js",
      "Axios",
      "Styled Components",
    ],
    responsibilities: [
      "Developed frontend applications using React.js, Axios, and Styled Components with custom design systems",
      "Built responsive, reusable components according to provided design specifications for future scalability",
      "Collaborated with designers and Project Managers for seamless server deployment and production releases",
    ],
  },
  {
    company: "Radio Wealth Finance Company, Inc. (Philippines)",
    position: "Full Stack Web Developer",
    duration: "Jul 2019 – Feb 2021",
    techStack: [
      "React.js",
      "Material-UI",
      "Node.js",
      "TypeORM",
      "Microsoft SQL Server",
      "MySQL",
      ".NET Entity Framework",
    ],
    responsibilities: [
      "Designed and developed robust RESTful APIs using Node.js, TypeORM, and databases like MS SQL Server and MySQL to support financial services workflows",
      "Built scalable, responsive frontend applications using React.js and Material-UI, ensuring modern UI/UX for internal business tools",
      "Led the development of a Post-Dated Check (PDC) Monitoring System, enabling real-time tracking and reporting of PDC transactions across multiple branches",
      "Developed APIs for a Policy Portal using .NET Entity Framework, supporting integrated and automated policy management processes",
    ],
  },
  {
    company: "Tektos Ecosystems Limited (Philippines)",
    position: "Android Developer",
    duration: "Aug 2018 – Nov 2018",
    techStack: [
      "Android",
      "Kotlin",
    ],
    responsibilities: [
      "Created custom UI view components for production Android applications",
      "Enhanced and optimized existing applications for improved performance and user experience",
    ],
  },
  {
    company: "Infotouch (Philippines)",
    position: "Android Developer",
    duration: "Feb 2018 – Aug 2018",
    techStack: [
      "Android",
      "Kotlin",
    ],
    responsibilities: [
      "Collaborated with API developers and designers to deliver user-friendly stock trading application",
      "Implemented API integration using Retrofit and RxJava for seamless data handling",
    ],
  },
];

export default function PersonalExperience() {
  const middleIndex = Math.ceil(jobHistory.length / 3);
  const column1Data = jobHistory.slice(0, middleIndex);
  const column2Data = jobHistory.slice(middleIndex);

  // Staggered animations for job history items
  const [column1Ref, column1Animations] = useStaggeredAnimation(
    column1Data,
    200
  );
  const [column2Ref, column2Animations] = useStaggeredAnimation(
    column2Data,
    300
  );

  const layout = (item, animation) => {
    return (
      <animated.div
        style={animation}
        className="border-l-2 border-solid border-blue-500 pb-5 pl-5 p-4 pt-0 hover:bg-gray-50 transition-colors duration-300 rounded-r-lg"
      >
        <div className=" text-blue-500 font-bold text-xl flex">
          <span className="-translate-x-7 w-4 h-4 border-2 border-blue-500 rounded-full flex items-center justify-center bg-white transition-all duration-300 hover:scale-110"></span>
          <span className="-translate-y-1/4 -translate-x-4">
            {item.company}
          </span>
        </div>
        <div className="-translate-y-3 italic text-gray-600">
          {item.position}
        </div>
        <div className="-translate-y-3 font-semibold text-gray-600 text-sm">
          {item.techStack && item.techStack.join(" • ")}
        </div>
        <div className="bg-blue-50 w-max py-1 px-4 font-semibold mb-4 rounded-full text-blue-700">
          {item.duration}
        </div>
        <ul className="ml-5 list-disc list-outside space-y-2">
          {item.responsibilities.map((responsibility, key) => (
            <li key={key} className="mb-2 text-gray-700 leading-relaxed">
              {responsibility}
            </li>
          ))}
        </ul>
      </animated.div>
    );
  };

  return (
    <div className="flex lg:flex-row flex-col gap-8">
      <div className="lg:w-1/2 w-full">
        <div
          ref={column1Ref}
          className="flex flex-col flex-wrap mt-2 space-y-6"
        >
          {column1Data.map((item, index) => (
            <React.Fragment key={index}>
              {layout(item, column1Animations[index])}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 w-full">
        <div ref={column2Ref} className="flex flex-col flex-wrap space-y-6">
          {column2Data.map((item, index) => (
            <React.Fragment key={index}>
              {layout(item, column2Animations[index])}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
