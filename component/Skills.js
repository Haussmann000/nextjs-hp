import Link from "next/dist/client/link";
import AwsIcon from "./icons/FaAWS";
import TerraformIcon from "./icons/SiTerraform";
import JsIcon from "./icons/DiJS";

const Skills = ({}) => {
  return(
    <div className="w-full">
      <div className="flex justify-center text-4xl bg-yellow-300 mt-5 p-5">
      <p>
      </p>
      Skills
      </div>
      <div className="flex flex-row justify-around items-center text-2xl bg-gray-200 p-5">
        <div className="flex flex-row w-full justify-center">
           <div className="flex flex-row m-15 w-full justify-around">
              <div className="flex flex-col justify-between flex-wrap items-center">
              <a href={"https://nextjs-hp-pied.vercel.app/"} target="_blank">
               <AwsIcon />
              </a>
                <h3>AWS</h3>
                <h3>1year</h3>
              </div>
              <div className="flex flex-col justify-between flex-wrap items-center">
              <a href={"https://nextjs-hp-pied.vercel.app/"} target="_blank">
               <TerraformIcon />
              </a>
                <h3>Terraform</h3>
                <h3>1year</h3>
              </div>
              <div className="flex flex-col justify-between flex-wrap items-center">
              <a href={"https://nextjs-hp-pied.vercel.app/"} target="_blank">
               <JsIcon />
              </a>
                <h3>JavaScript</h3>
                <h3>1year</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;