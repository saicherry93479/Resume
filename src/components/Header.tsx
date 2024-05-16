import React from "react";
import Image from "../assets/sample.jpeg";
const Header = () => {
  return (
    <div className="py-9 relative px-4 sm:px-8 lg:px-12">
    <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="relative flex gap-4 ">
          
          <div className="flex flex-1 justify-center">
            
            <div
              hidden
              style={{
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: 0,
                display: "none",
              }}
            />
            <nav className="pointer-events-auto  block">
              <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                <li>
                  <a
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="/"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="#tech"
                  >
                    Tech
                  </a>
                </li>
                <li>
                  <a
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                    href="#work"
                  >
                    Work
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>
         
        </div>
        <div className="relative mt-12">
          <div
            className="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
            style={{
              opacity: "var(--avatar-border-opacity, 0)",
              transform: "var(--avatar-border-transform)",
            }}
          />
          <a
            aria-label="Home"
            className="block h-16 w-16 origin-left pointer-events-auto"
            style={{ transform: "var(--avatar-image-transform)" }}
            href="/"
          >
            <img
              alt=""
              fetchPriority="high"
              width={512}
              height={512}
              decoding="async"
              data-nimg={1}
              className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-16 w-16"
              style={{ color: "transparent" }}
              sizes="4rem"
              // srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=16&q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=32&q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=48&q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=64&q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=96&q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=256&q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=3840&q=75 3840w"
              src={Image}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
