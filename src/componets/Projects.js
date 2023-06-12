import Card from "./Card";
const Projects = () => {
  const projects = [
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
      liveurl: "https://cloneairbnbet.netlify.app/",
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
    {
      title: "coinawesome",
      description:
        "This project is a web application that fetches live crypto data and transaction information using a public crypto API. It is built using React.js, a popular frontend framework known for its efficiency, flexibility, and ease of use. The application provides real-time updates of crypto data and transaction information.",
      techstack: ["React js", "Tailwind Css", "Material UI","Axios","Crypto Api"],
      liveurl: "https://coinawesome.netlify.app/",
      Githuburl: "https://github.com/bamlakugetachew1/coin-awesome",
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
