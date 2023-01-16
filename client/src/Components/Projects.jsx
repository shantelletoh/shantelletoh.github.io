import { BsFileEarmarkCode } from "react-icons/bs";
import personalWebsite from "../assets/personal_website.png";

export default function Projects() {
  return (
    <div id="projects" class="pt-12 border-t border-gray-300 pb-10">
      <div class="flex justify-center">
        <div class="w-[85vw] max-w-[1080px] flex justify-center items-center gap-2">
          <BsFileEarmarkCode class="w-10 h-10" />
          <h1 class="text-4xl font-semibold">Projects</h1>
        </div>
      </div>
      <div class="flex justify-center mt-8">
        <div class="w-[85vw] max-w-[1080px]">
          {/* Project 1 */}
          <div class="gap-5 flex flex-col sm:flex-row items-center">
            {/* project 1 image */}
            <a
              target="_blank"
              href="https://github.com/shantelletoh/shantelletoh.github.io"
              rel="noreferrer"
            >
              <img class="rounded-t-lg w-full" src={personalWebsite} alt="" />
            </a>

            {/* project 1 title, description, and github link */}
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
                Personal Website
              </h5>
              <div class="mb-3 font-normal text-neutral-700">
                <p class="text-sm pb-2 font-semibold">
                  *The site you're looking at!*
                </p>
                <p>
                  My revamped front-end personal website built with React and
                  Tailwind CSS. Originally built with HTML, CSS, and JavaScript.{" "}
                </p>
              </div>
              <a
                target="_blank"
                href="https://github.com/shantelletoh/shantelletoh.github.io"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                rel="noreferrer"
              >
                View Project on Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2 -mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Project 2 ...*/}
        </div>
      </div>
    </div>
  );
}
