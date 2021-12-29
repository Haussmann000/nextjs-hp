
const TopContents = ({props, title, name, desc}) => {
  return(
    <div className="w-full">
      <div className="flex justify-center text-4xl bg-yellow-300 mt-5 p-5">
      <p>
      {props["skills"].AWS.name}
      </p>
        {/* <p>{title}</p> */}
      </div>
      <div className="flex flex-row justify-around items-center text-2xl bg-gray-200 p-5">
        <div className="flex-col">
          <p>{name}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default TopContents;