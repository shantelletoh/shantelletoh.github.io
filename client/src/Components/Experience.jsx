import { MdWorkOutline } from "react-icons/md";

import baskinLogo from "../assets/experience/baskin-engineering-logo.png";
import cruzhacks2022Logo from "../assets/experience/cruzhacks-2022-logo.png";
import lssLogo from "../assets/experience/ucsc-lss-logo.png";

export default function Experience() {
  return (
    <div id="experience" class="pt-12 border-t border-neutral-300 pb-10">
      <div className="flex justify-center">
        <div className="w-[85vw] max-w-[1080px] flex items-center justify-center gap-2">
          <MdWorkOutline class="w-10 h-10" />
          <h1 class="text-4xl font-semibold">Experience</h1>
        </div>
      </div>
      <div class="flex justify-center">
        <div className="w-[85vw] max-w-[1080px] mt-8 ml-10">
          <ol class="relative border-l border-gray-300 border-l-2">
            <li class="mb-8 ml-6">
              <span class="absolute flex items-center -ml-1 justify-center w-10 h-10 -left-4 ring-8 ring-white">
                <img src={cruzhacks2022Logo} alt="" />
              </span>
              <h3 class="flex items-center ml-2 mb-1 text-lg font-semibold text-black">
                Director of Sponsorship | CruzHacks 2023{" "}
              </h3>
              <p class="block ml-2 mb-2 leading-none text-gray-500">
                Feb 2022 - Present
              </p>
              <p class="ml-2 mb-4 text-gray-600">
                <ul
                  style={{
                    paddingLeft: "1.5em",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Oversee all sponsorship for Santa Cruz’s largest hackathon
                    attended by 600+ students
                  </li>
                  <li>
                    Lead a team of 3 to fundraise for the event by fostering
                    relationships and partnering with corporate sponsors
                  </li>
                </ul>
              </p>
            </li>
            <li class="mb-8 ml-6">
              <span class="absolute flex items-center -ml-1 justify-center w-10 h-10 -left-4 ring-8 ring-white">
                <img src={cruzhacks2022Logo} alt="" />
              </span>
              <h3 class="flex items-center ml-2 mb-1 text-lg font-semibold text-black">
                Logistics Officer | CruzHacks 2022{" "}
              </h3>
              <p class="block ml-2 mb-2 leading-none text-gray-500">
                May 2021 - Feb 2022
              </p>
              <p class="ml-2 mb-4 text-gray-600">
                <ul
                  style={{
                    paddingLeft: "1.5em",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Spearheaded planning and physical preparations for CruzHacks
                  </li>
                  <li>
                    Coordinated hacker workshops, activities, and keynote
                    speakers
                  </li>
                </ul>
              </p>
            </li>
            <li class="mb-8 ml-6">
              <span class="absolute flex items-center -ml-1 justify-center w-10 h-10 -left-4 ring-8 ring-white">
                <img src={lssLogo} alt="" />
              </span>
              <h3 class="flex items-center ml-2 mb-1 text-lg font-semibold text-black">
                Python and Computer Systems & Assembly Language Course Tutor |
                Learning Support Services at UC Santa Cruz{" "}
              </h3>
              <p class="block ml-2 mb-2 leading-none text-gray-500">
                Sep 2021 - Present
              </p>
              <p class="ml-2 mb-4 text-gray-600">
                <ul
                  style={{
                    paddingLeft: "1.5em",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Fall 2022, Spring 2022: Tutored for Computer Systems and
                    Assembly Language (CSE12)
                  </li>
                  <li>
                    Winter 2022: Tutored for Beginning Programming in Python
                    (CSE20)
                  </li>
                  <li>Held 4-6 weekly one-on-one and group sessions</li>
                  <li>
                    Helped over 200 students debug Python, RISC-V assembly, and
                    MIPS assembly code and logic design assignments and gain
                    strong fundamentals in programming and course material.
                  </li>
                </ul>
              </p>
            </li>
            <li class="ml-6">
              <span class="absolute flex items-center -ml-1 justify-center w-10 h-10 -left-4 ring-8 ring-white">
                <img src={baskinLogo} alt="" />
              </span>
              <h3 class="flex items-center ml-2 mb-1 text-lg font-semibold text-black">
                Python and Assembly Language Course Grader | Baskin Engineering
                at UC Santa Cruz
              </h3>
              <p class="block ml-2 mb-2 leading-none text-gray-500">
                Jan 2021 - Dec 2021
              </p>
              <p class="ml-2 mb-4 text-gray-600">
                <ul
                  style={{
                    paddingLeft: "1.5em",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Winter 2021: Graded for Programming Abstractions: Python
                    (CSE30)
                  </li>
                  <li>
                    Fall 2021: Graded for Computer Systems and Assembly Language
                    (CSE12)
                  </li>
                  <li>
                    Evaluated 300+ programming assignments and logic design labs
                    by providing individual targeted feedback
                  </li>
                  <li>
                    Worked with the professor to improve students' learning
                    experience and help with course logistics
                  </li>
                </ul>
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
