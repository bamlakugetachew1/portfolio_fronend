import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
const Card = (props) => {
  return (
    <div>
      <div className="max-w-sm mb-2 md:mb-0 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="p-3">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              # {props.data.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.data.description}
          </p>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            # Tech Stack
          </h5>
          <ul className="flex flex-wrap gap-2">
            {props.data.techstack.map((stack) => {
              return (
                <li
                  key={stack}
                  className="bg-[#f7f3de]  text-center rounded-full p-1"
                >
                  {stack}
                </li>
              );
            })}
          </ul>
          <div className="mt-2 flex justify-between gap-1">
            <div>
              <LinkIcon></LinkIcon>
              <a
                className="underline ml-1"
                href={props.data.liveurl}
                target="_blank"
              >
                {" "}
                Live Preview
              </a>
            </div>
            <div>
              <GitHubIcon></GitHubIcon>
              <a
                className="underline ml-1"
                href={props.data.Githuburl}
                target="_blank"
              >
                {" "}
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
