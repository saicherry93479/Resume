

const Knowledge = () => {
  return (
    <div
      id="tech"
      className="mt-16 lg:mt-24 sm:px-8 relative  max-w-7xl lg:px-8 mx-auto"
    >
      <div className="bg-[#edebe1] relative py-[90px] ">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl text-center">
          Technologies I know
        </h1>
        <div className="grid grid-cols-2 mt-10 ">
          <div className="mx-auto space-y-4">
            <PTag text="React"></PTag>
            <PTag text="Javascript"></PTag>
            <PTag text="Redux"></PTag>
            <PTag text="Nodejs"></PTag>
            <PTag text="Expressjs"></PTag>
          </div>
          <div className="mx-auto space-y-4">
            <PTag text="Django"></PTag>
            <PTag text="Python"></PTag>
            <PTag text="Solidity"></PTag>
            <PTag text="Docker"></PTag>
            <PTag text="Kubernetes"></PTag>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;

const PTag = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-2 justify-start items-center">
      <Icon></Icon>
      <p className="font-[700] ">{text}</p>
    </div>
  );
};

const Icon = () => {
  return (
    <span className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M24.9986 44.8337C21.0764 44.8334 17.2423 43.6702 13.981 41.4911C10.7195 39.3118 8.17737 36.2143 6.67624 32.5902C5.1751 28.9662 4.78233 24.9783 5.54761 21.131C6.31288 17.2838 8.20182 13.7498 10.9756 10.976C13.7493 8.20231 17.2833 6.31337 21.1306 5.54809C24.9778 4.78282 28.9657 5.17559 32.5897 6.67672C36.2138 8.17786 39.3113 10.7199 41.4907 13.9815C43.6698 17.2428 44.8329 21.0769 44.8332 24.9991C44.8269 30.2576 42.7352 35.299 39.0168 39.0173C35.2985 42.7356 30.2572 44.8274 24.9986 44.8337Z"
          fill="#CB5A4B"
          stroke="black"
          strokeWidth={2}
        />
        <path
          d="M20.8332 35.1871C19.7287 35.1827 18.6708 34.7418 17.8903 33.9604C17.1097 33.1791 16.6698 32.1207 16.6665 31.0163V18.983C16.6665 18.2516 16.8591 17.5331 17.2248 16.8997C17.5905 16.2663 18.1165 15.7403 18.7499 15.3746C19.3833 15.0089 20.1018 14.8164 20.8332 14.8164C21.5646 14.8164 22.2831 15.0089 22.9165 15.3746L33.3332 21.3913C33.9665 21.757 34.4925 22.283 34.8581 22.9164C35.2238 23.5498 35.4163 24.2683 35.4163 24.9996C35.4163 25.731 35.2238 26.4495 34.8581 27.0829C34.4925 27.7163 33.9665 28.2423 33.3332 28.608L22.9165 34.6246C22.2837 34.9922 21.565 35.1862 20.8332 35.1871Z"
          fill="white"
        />
      </svg>
    </span>
  );
};


