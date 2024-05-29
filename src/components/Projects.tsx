import GoalStreetOne from "../assets/GoalStreetOne.jpeg";
import Shivoham from "../assets/Pc.jpeg";
import Fodeto from "../assets/FodetoOne.jpeg";
import Sree from "../assets/Sree.jpeg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="mt-16 lg:mt-24 sm:px-8 relative  max-w-7xl lg:px-8 mx-auto "
    >
      <div className="relative  px-8 ">
        <ProjectOne></ProjectOne>
      </div>
    </div>
  );
};

export default Projects;

const ProjectOne = () => {
  return (
    <div className="">
      <h1 className=" text-center mb-8 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Recent
        <span className="font-[700]"> Projects</span>
      </h1>
      <div className="w-full   ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto md:auto-rows-[25rem] ">
          <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#f6bd41] dark:border-white/[0.2]   justify-between flex flex-col space-y-4 md:col-span-2 border-2 border-black hover:border-0 bg-[#f6bd41]">
            <div className="flex flex-1 w-full h-[250px]  rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
              <img
                src={GoalStreetOne}
                className="w-full object-cover h-full aspect-square rounded-xl "
              ></img>
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
              <Icon></Icon>
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                Goalstreet (Eductational Instiute Website)
              </div>
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                Developed "Goalstreet," a dynamic platform that connects
                students with educational institutes for internships and
                courses, featuring an intuitive front end built with React and
                Tailwind CSS.
              </div>
            </div>
          </div>
          <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#538ff7] dark:border-white/[0.2]   justify-between flex flex-col space-y-4 md:col-span-1 border-2 border-black hover:border-0 bg-[#538ff7]">
            <div className="flex flex-1 w-full h-[250px]  rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
              <img
                src={Fodeto}
                className="w-full object-cover h-full aspect-square rounded-xl "
              ></img>
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
              <Icon></Icon>
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                Fodeto
              </div>
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                A Food Application developed in Flutter , currently using by
                2000 users.
              </div>
            </div>
          </div>
          <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#65b867] dark:border-white/[0.2]   justify-between flex flex-col space-y-4 md:col-span-1 border-2 border-black hover:border-0 bg-[#65b867]">
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
              <img
                src={Sree}
                className="w-full object-cover h-full aspect-square rounded-xl "
              ></img>
            </div>

            <div className="group-hover/bento:translate-x-2 transition duration-200">
              <Icon></Icon>
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                Sree Boutique
              </div>
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                A cloth showroom application
              </div>
            </div>
          </div>
          <div className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-[#ec5e4f] dark:border-white/[0.2]   justify-between flex flex-col space-y-4 md:col-span-2 border-2 border-black hover:border-0 bg-[#ec5e4f]">
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]   border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
              <img
                src={Shivoham}
                className="w-full object-cover h-full aspect-square rounded-xl "
              ></img>
            </div>
            <div className="group-hover/bento:translate-x-2 transition duration-200">
              <Icon></Icon>
              <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                Plcement Cracker
              </div>
              <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300"></div>
            </div>
          </div>
        </div>
      </div>
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
