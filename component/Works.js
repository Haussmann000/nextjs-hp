import AwsIcon from "./icons/FaAWS";
import Image from "next/dist/client/image";

const Works = () => {
  return(
    <div className="w-full">
      <div className="flex justify-center text-4xl bg-yellow-300 mt-5 p-5">
      <p>
      </p>
      Works
      </div>
      <div className="flex flex-row justify-around items-center text-2xl bg-gray-200 p-5">
        <div className="flex flex-row w-full justify-center">
           <div className="flex flex-row m-15 w-full justify-around">
              <div className="flex flex-col justify-between flex-wrap items-center">
              <a href={"https://nextjs-hp-pied.vercel.app/"} target="_blank">
              <Image src="http://capture.heartrails.com/100x100/delay=1?https://nextjs-hp-pied.vercel.app/" width={100} height={100}></Image>
              </a>
                <h3>Next Portfolio</h3>
                <h3>このページです</h3>
              </div>
              <div className="flex flex-col justify-between flex-wrap items-center">
              <a href={"https://react-ts-weather-app.vercel.app/"} target="_blank">
               <Image src="http://capture.heartrails.com/100x100/delay=1?https://react-ts-weather-app.vercel.app/" width={100} height={100}></Image>
              </a>
                <h3>World Weather</h3>
                <h3>世界の天気を表示します</h3>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;