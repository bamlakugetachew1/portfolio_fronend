import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import BusinessIcon from "@mui/icons-material/Business";
import LinkIcon from "@mui/icons-material/Link";
const About = () => {
  return (
    <div className="mt-10 font-body">
      <h3 className="font-body font-semibold text-xl my-1">About me</h3>
      <p>
        As a developer, I am excited to bring my passion and enthusiasm for web
        development to your projects. While I may not have as many years of
        experience as some other developers, I make up for it with my hunger for
        knowledge and eagerness to learn. I have a strong foundation in various
        technologies such as MongoDB, React, Node.js, Express.js, PHP, MySQL,
        and many different frontend and backend technologies, and I'm always
        eager to expand my skills and knowledge. I understand the importance of
        delivering efficient, high-quality code that meets the needs of the
        end-user while adhering to best coding practices. So if you're looking
        for a developer who will work tirelessly to exceed your expectations,
        I'm here to help!
      </p>
      <h3 className="font-body font-semibold text-lg my-1">Work Experience</h3>

      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Mar 2022 - June 2022
          </time>
          <h3 className="text-lg  text-gray-900 dark:text-white">
            Hahu jobs Intern
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            During my time as an intern at Minab ICT Solutions, I worked on a
            variety of projects involving front-end and back-end technologies
            such as Vue.js, Hasura, PostgreSQL, Node, and Tailwind CSS. One of
            my major contributions was developing a Food Recipe Website using
            these technologies, which allowed users to browse and search for
            recipes using various filters. I gained hands-on experience
            implementing both front-end and back-end functionalities, and
            enjoyed working in a team-based environment with other developers
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Sep 2023 - Dec 2023{" "}
          </time>
          <h3 className="text-lg  text-gray-900 dark:text-white">
            Backend Nodejs Developer upwork
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            I've worked as a freelance Node.js developer on Upwork, creating
            custom CMS systems and real-time communication platforms for clients
            in different industries. Through these experiences, I developed
            strong communication skills and the ability to work effectively
            under tight timelines and budgets. I enjoy the challenge of creating
            scalable solutions that meet clients' specific needs
          </p>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Mar 2023 - June 2022{" "}
          </time>
          <h3 className="text-lg  text-gray-900 dark:text-white">
            Boost software Intern
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            As an intern at Boost Software, I've been working with a team of
            fellow developers to build an automated campus leaving web app using
            MERN stack. Through this experience, I've learned the importance of
            effective collaboration and communication in order to deliver a
            high-quality product. I've also gained expertise in using modern
            development tools and techniques, and am enthusiastic about
            continuing to expand my knowledge in this area
          </p>
        </li>
      </ol>

      <h3 className="font-body font-semibold text-lg my-1">Education</h3>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Oct 2019 - June 2024
          </time>
          <h3 className="text-lg  text-gray-900 dark:text-white">
            BSc Software Engineering
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            As a software student at Bahir Dar University, I have developed a
            strong foundation in object-oriented programming, data structures,
            and fundamental software concepts. Through coursework and projects,
            I have gained experience in languages such as Java, C++, and Python,
            and have worked with data structures such as arrays, linked lists,
            and trees. I am enthusiastic about applying these skills to create
            robust and efficient software solutions that meet the needs of
            end-users
          </p>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Apr 2023 - Jun 2023
          </time>
          <h3 className="text-lg  text-gray-900 dark:text-white">
            Meta Front-End Developer Professional Certificate
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            As a participant in the Meta Professional Front-End Developer
            program, I developed a strong foundation in front-end web
            development, with a focus on using React JS and advanced JavaScript
            to create engaging user interfaces. Through coursework and hands-on
            projects, I gained experience in solving common front-end
            development issues and enhancing the overall user experience
          </p>
          <div className="flex gap-2">
            <LinkIcon></LinkIcon>{" "}
            <a
              href="https://www.coursera.org/account/accomplishments/professional-cert/KEB3V3ND4HRK"
              target="_blank"
            >
              Go to certificate
            </a>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default About;
