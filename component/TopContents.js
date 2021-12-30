import GithubIcon from "./icons/FaGithub";
import Link from "next/dist/client/link";

const TopContents = ({ props, children }) => {
  return(
    <div className="w-full">
      <div className="flex justify-center text-4xl bg-yellow-300 mt-5 p-5">
      <p>
      </p>
      {children}
      </div>
      <div className="flex flex-row justify-around items-center text-2xl bg-gray-200 p-5">
        <div className="flex flex-row w-full justify-center">
           <div className="flex flex-col m-5">
            {props.map(prop => 
              <div className="flex flex-col justify-between flex-wrap items-center">
              <Link href={"https://nextjs-hp-pied.vercel.app/"}>
              <a target="_blank">
               <GithubIcon />
              </a>
              </Link>
                <h3>{prop.name}</h3>
                <h3>{prop.desc}</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContents;