import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typed from "react-typed";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import docx from "../bamlaku.docx";
const Home = () => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 mt-7">
      <div className="md:flex-row flex flex-col md:gap-40 lg:gap-80">
        <div>
          <h3 className="text-2xl mt-2 md:text-3xl movelefttright">
            Hi,👋<br></br> I Am <span className="text-[#f5adb9]">Bamlaku</span>{" "}
            <span className="text-[#f37e8a]">Getachew </span> <br></br>
          </h3>
          <div className="movelefttright1">
            <Typed
              className="text-2xl"
              strings={[
                "I build things for web",
                "And Mobile ",
                "Lets Get In Touch",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </div>

          <div className="flex gap-3 mt-2 mb-3 hover:cursor-pointer">
            <a href="https://github.com/bamlakugetachew1" target="_blank">
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/bamlaku-getachew/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="flex gap-3">
            <a
              href={docx}
              download="bamlaku_resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outlined" endIcon={<DownloadIcon />}>
                Resume
              </Button>
            </a>
          </div>
        </div>
        <div className="mt-2 md:mt-0 moverightleft1">
          <img
            className="h-36 w-36 hover:border-pink-200  bg-cover bg-no-repeat rounded-full border border-l-4 border-r-4 border-b-4 border-t-4 
            border-b-pink-300
            border-t-pink-300
            border-r-pink-200 border-l-pink-200"
            src="https://res.cloudinary.com/dwq2ftoo3/image/upload/v1669919254/photo_2022-12-01_21-25-52_vtei43.jpg"
            alt="profile images"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
