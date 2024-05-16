
import Comcast from "../assets/Comcast.png";

const Experience = () => {
  return (
    <div
      id="work"
      className=" lg:mt-24 sm:px-8 relative  max-w-7xl lg:px-8 mx-auto "
    >
      <div className=" relative py-[90px] ">
        <div className="rounded-0 md:rounded-2xl max-w-4xl py-[40px]  mx-auto border border-zinc-100 p-6 dark:border-zinc-700/40 bg-white dark:bg-black/50">
          <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-4">
            <WorkIcon></WorkIcon>
            <p className="text-[24px] text-center md:text-[48px] font-[500] ">
              Work
            </p>
          </h2>
          <ol className="mt-6 flex flex-col  gap-8">
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
                  loading="lazy"
                  width={32}
                  height={32}
                  decoding="async"
                  data-nimg={1}
                  className="h-7 w-7"
                  style={{ color: "transparent" }}
                  src={Comcast}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Comcast
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Software Devloper
                </dd>

                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until Present"
                >
                  <time>2023-july</time> <span aria-hidden="true">—</span>{" "}
                  <time>Present</time>
                </dd>
              </dl>
            </li>
            <ExtraPara></ExtraPara>
            <li className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <img
                  alt=""
                  loading="lazy"
                  width={32}
                  height={32}
                  decoding="async"
                  data-nimg={1}
                  className="h-7 w-7"
                  style={{ color: "transparent" }}
                  src={Comcast}
                />
              </div>
              <dl className="flex flex-auto flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  Comcast
                </dd>
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                  Software Devloper Intern
                </dd>

                <dd
                  className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                  aria-label="2019 until Present"
                >
                  <time>2023-Jan</time> <span aria-hidden="true">—</span>{" "}
                  <time>2023-July</time>
                </dd>
              </dl>
            </li>
            <ExtraPara></ExtraPara>
          </ol>
          <a
            className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
            href="#"
          >
            Download Resume
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
            >
              <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const WorkIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-12 w-12 flex-none"
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
};

const ExtraPara = () => {
  return (
    <article className="group relative ">
      
      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 flex gap-2">
      <Icon></Icon>
        {/* <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" /> */}
        <p>
          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          <span className="relative z-10">
            Crafting a design system for a multiplanetary future
          </span>
        </p>
      </h2>

      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Most companies try to stay ahead of the curve when it comes to visual
        design, but for Planetaria we needed to create a brand that would still
        inspire us 100 years from now when humanity has spread across our entire
        solar system.
      </p>
      
    </article>
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
