import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import PortfolioContext from "../store/portfoliostore";
import TransitionAlerts from "./Alert";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [severity, setSeverity] = useState("success");
  const [title, setTitle] = useState("Success");
  const [text, setText] = useState("Thanks for reaching me");
  const { changeAlert } = useContext(PortfolioContext);

  function Handleform(e) {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://portfolio-backend-ubkm.onrender.com/api/posts/create", {
        name: name,
        email: email,
        message: message,
      })
      .then((response) => {
        if (response.data.message === "success") {
          setName("");
          setMessage("");
          setEmail("");
        }
        if (response.data.message === "error") {
          setSeverity("error");
          setTitle("Error");
          setText("Something went wrong sorry try again");
        }
        setLoading(false);
        changeAlert(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <section className="movebottomup">
        <div className="py-6 lg:py-10">
          <TransitionAlerts severity={severity} title={title} text={text} />
          <form action="#" className="space-y-2" onSubmit={Handleform}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none focus:border-gray-400"
                placeholder="bamlaku"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:outline-none focus:border-gray-400"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:border-gray-400"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <Button variant="outlined" type="submit">
              {loading ? <CircularProgress size={25} /> : "Submit"}
            </Button>{" "}
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
