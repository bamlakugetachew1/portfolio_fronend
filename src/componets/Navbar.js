import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../animation.css";
const Navbar = () => {
  const [activepage, setActivepage] = useState("homepage");
  const [mobilemenu, setMobilemenu] = useState(true);
  let url = window.location.href;
  url = url.slice(35, url.length);

  useEffect(() => {
    seturl();
  }, [url]);
  function changeactivepage(value) {
    setActivepage(value);
    setMobilemenu(true);
  }
  function Changemobilemenu() {
    setMobilemenu(!mobilemenu);
  }
  function seturl() {
    if (url === "/") {
      setActivepage("homepage");
    }
    if (url === "/about") {
      setActivepage("aboutpage");
    }
    if (url === "/technologies") {
      setActivepage("technopage");
    }
    if (url === "/contact") {
      setActivepage("contactpage");
    }
    if (url === "/projects") {
      setActivepage("projectpage");
    }
  }
  return (
    <div  onClick={() => {
                changeactivepage("homepage");
              }}
className="flex justify-between hover:cursor-pointer text-lg">
      <div className="text-[#f37e8a]">
        <Link to="/">Bamlaku</Link>
      </div>
      <div className="md:hidden">
        <div className="flex justify-end" onClick={Changemobilemenu}>
          {mobilemenu === true ? <MenuIcon /> : <CloseIcon />}
        </div>
        <div className={`${!mobilemenu ? "block" : " hidden"} mt-3`}>
          <ul className={`flex flex-col gap-2  moverightleft`}>
            <li
              onClick={() => {
                changeactivepage("homepage");
              }}
              className={`${
                activepage === "homepage"
                  ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                  : ""
              }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => {
                changeactivepage("aboutpage");
              }}
              className={`${
                activepage === "aboutpage"
                  ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                  : ""
              }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
            >
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={() => {
                changeactivepage("technopage");
              }}
              className={`${
                activepage === "technopage"
                  ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                  : ""
              }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
            >
              {" "}
              <Link to="/technologies">Technologies</Link>
            </li>
            <li
              onClick={() => {
                changeactivepage("projectpage");
              }}
              className={`${
                activepage === "projectpage"
                  ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                  : ""
              }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
            >
              {" "}
              <Link to="/projects">Projects</Link>
            </li>
            <li
              onClick={() => {
                changeactivepage("contactpage");
              }}
              className={`${
                activepage === "contactpage"
                  ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                  : ""
              }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
            >
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>{" "}
        </div>
      </div>
      <div className=" hidden md:flex md:justify-between md:gap-3">
        <ul className="flex gap-3">
          <li
            onClick={() => {
              changeactivepage("homepage");
            }}
            className={`${
              activepage === "homepage"
                ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                : ""
            }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => {
              changeactivepage("aboutpage");
            }}
            className={`${
              activepage === "aboutpage"
                ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                : ""
            }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={() => {
              changeactivepage("technopage");
            }}
            className={`${
              activepage === "technopage"
                ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                : ""
            }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
          >
            {" "}
            <Link to="/technologies">Technologies</Link>
          </li>
          <li
            onClick={() => {
              changeactivepage("projectpage");
            }}
            className={`${
              activepage === "projectpage"
                ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                : ""
            }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
          >
            {" "}
            <Link to="/projects">Projects</Link>
          </li>
          <li
            onClick={() => {
              changeactivepage("contactpage");
            }}
            className={`${
              activepage === "contactpage"
                ? "text-[#99cad6] pb-1 border-b-orange-300 border-b-2"
                : ""
            }  hover:text-[#99cad6] hover:pb-1 hover:border-b-orange-300 hover:border-b-2`}
          >
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
