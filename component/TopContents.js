import GithubIcon from "./FaGithub";

const TopContents = ({ props }) => {
  return(
    <div className="w-full">
      <div className="flex justify-center text-4xl bg-yellow-300 mt-5 p-5">
      <p>
      </p>
        {props[0].title}
      </div>
      <div className="flex flex-row justify-around items-center text-2xl bg-gray-200 p-5">
        <div className="flex flex-row w-full justify-around">
          <div className="flex flex-row justify-center flex-wrap">
           <GithubIcon />
           <div className="flex flex-col m-5">
            <p>{props[0].content[0].name}</p>
            <p>{props[0].content[0].desc}</p>
           </div>
          </div>
          <div className="flex flex-row justify-center flex-wrap">
           <GithubIcon />
           <div className="flex flex-col m-5">
            <p>{props[0].content[1].name}</p>
            <p>{props[0].content[1].desc}</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContents;