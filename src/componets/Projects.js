import Card from "./Card";
const Projects = () => {
  const projects = [
     {
      title: "crowdfund",
      description:
        "This project is a RESTful API for a crowdfunding application, designed for horizontal scalability and high performance. Built with Node.js and based on Express, MongoDB, Redis, JWT and BullMQ, it supports clustering and is fully containerized using Docker. The project also includes a CI/CD pipeline for seamless deployment and maintenance.",
      techstack: ["Node.js", " Express.js", "MongoDB","Redis","Docker","Jest","Swagger","GitHub Actions"],
      Githuburl: "https://github.com/bamlakugetachew1/kickstarterprod",
    },
    {
      title: "airbnb",
      description:
        "The project is a decentralized web3.0 version of the Airbnb renting website , built on top of Node.js, Express.js, MongoDB, and React. It allows users to rent out their properties, houses, and apartments and earn money. The project uses Google OAuth and PassportJS for signing in and Node.js and Express for the backend. MongoDB is used for data persistence",
      techstack: [
        "React",
        "Node js",
        "MongoDb",
        "ExpressJs",
        "Material UI",
        "Tailwind Css",
      ],
      liveurl: "https://findhomeone.netlify.app/",
      Githuburl: "https://github.com/bamlakugetachew1/airbnbbackend",
    },
    {
      title: "Blogethiopia",
      description:
        "This project is built using the MERN (MongoDB, Express, React, Node.js) stack, which is a popular combination of technologies for full-stack web development. It includes a range of features that are similar to those of Medium, a popular online publishing platform.which allow users to like,share and save contents,also listen in audio format",
      techstack: [
        "React",
        "Node js",
        "MongoDb",
        "ExpressJs",
        "Material UI",
        "Tailwind Css",
      ],
      liveurl: "https://blogethiopia.netlify.app/",
      Githuburl: "https://github.com/bamlakugetachew1/Blogs",
    },
    {
      title: "letschatwithfreedom",
      description:
        "This project is a simple and efficient chat application that enables users to create groups and initiate conversations. It is built using a powerful technology stack, including Node.js, Express.js, MongoDB, and Vue.js. This combination of technologies enables the application to provide a seamless and reliable user experience.",
      techstack: [
        "Vue js",
        "Web Socket",
        "Node js",
        "MongoDb",
        "ExpressJs",
        "Tailwind Css",
      ],
      liveurl: "https://letschatwithfreedom.netlify.app/",
      Githuburl: "https://github.com/bamlakugetachew1/chat",
    },
  ];
  return (
    <div className="mt-10 font-body">
      <h3 className="font-body font-semibold text-xl my-1">Projects</h3>
      <div className="md:grid md:grid-cols-2 md:gap-2">
        {projects.map((data) => {
          return <Card key={data.title} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
