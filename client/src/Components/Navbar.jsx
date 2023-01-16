import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import stLogo from "../assets/ST_logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div class="bg-neutral-200">
      <div className="mx-auto max-w-[1080px] w-[85vw]">
        <div className="relative flex h-16 items-center justify-between">
          {/* small screen toggle menu button */}
          <div className="absolute left-0 flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-900 hover:bg-neutral-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
              {/* if open, display close menu icon */}
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => setOpen(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // otherwise menu closed, so display open menu icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => setOpen(true)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* nav on md and larger screens */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="block h-9 w-auto lg:hidden" src={stLogo} alt="" />
              <img className="hidden h-9 w-auto lg:block" src={stLogo} alt="" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex gap-1 md:gap-4 lg:gap-8">
                <a
                  href="#about"
                  class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md p-2 -ml-5 md:ml-1 font-semibold"
                >
                  About Me
                </a>
                <a
                  href="#skills"
                  class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md p-2 font-semibold"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md p-2 font-semibold"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md p-2 font-semibold"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md p-2 font-semibold"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Contact icons */}
          <div className="absolute right-0 flex items-center">
            <div className="relative flex gap-1 md:gap-4">
              <a
                target="_blank"
                href="mailto:shantelletoh@gmail.com"
                rel="noreferrer"
              >
                <div className="rounded-full w-8 h-8 border border-neutral-500 hover:border-neutral-800 text-neutral-500 hover:text-neutral-800 flex justify-center items-center">
                  <HiOutlineMail className="w-5 h-5" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/shantelletoh"
                rel="noreferrer"
              >
                <div className="rounded-full w-8 h-8 border border-neutral-500 hover:border-neutral-800 text-neutral-500 hover:text-neutral-800 flex justify-center items-center">
                  <FaLinkedin className="w-5 h-5" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://github.com/shantelletoh"
                rel="noreferrer"
              >
                <div className="rounded-full w-8 h-8 border border-neutral-500 hover:border-neutral-800 text-neutral-500 hover:text-neutral-800 flex justify-center items-center">
                  <FaGithub className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* when menu is open on small screens, display nav menu */}
      {open && (
        <div className="sm:hidden flex justify-center">
          <div className="space-y-1 w-[90vw] pb-3">
            <a
              href="#about"
              class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md px-3 py-1.5 font-semibold block w-fit"
            >
              About Me
            </a>
            <a
              href="#skills"
              class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md px-3 py-1.5 font-semibold block w-fit"
            >
              Skills
            </a>
            <a
              href="#experience"
              class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md px-3 py-1.5 font-semibold block w-fit"
            >
              Experience
            </a>
            <a
              href="#projects"
              class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md px-3 py-1.5 font-semibold block w-fit"
            >
              Projects
            </a>
            <a
              href="#contact"
              class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md px-3 py-1.5 font-semibold block w-fit"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
