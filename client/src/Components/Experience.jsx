import { MdWorkOutline } from "react-icons/md";
import baskinLogo from "../assets/experience/baskin-engineering-logo.png";
import cruzhacks2022Logo from "../assets/experience/cruzhacks-2022-logo.png";
import cruzhacks2023Logo from "../assets/experience/cruzhacks-2023-logo.jpg";
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
                <img src={cruzhacks2023Logo} alt="" />
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
                    Oversaw all sponsorship for the largest hackathon in Santa
                    Cruz with over 600 attendees
                  </li>
                  <li>
                    Led a team of 3 to secure over $25,000 for the event by
                    fostering relationships and partnering with corporate and
                    non-profit sponsors
                  </li>
                  <li>
                    Took on the task of managing all food outreach and logistics
                    for the 3-day event
                  </li>
                </ul>
              </p>
            </li>
            <li class="mb-8 ml-6">
              <span class="absolute flex items-center -ml-1 justify-center w-10 h-10 -left-4 ring-8 ring-white">
                <img src={baskinLogo} alt="" />
              </span>
              <h3 class="flex items-center ml-2 mb-1 text-lg font-semibold text-black">
                Computer Networks Course Group Tutor and Grader | Baskin
                Engineering at UC Santa Cruz{" "}
              </h3>
              <p class="block ml-2 mb-2 leading-none text-gray-500">
                Sep 2022 - Dec 2022
              </p>
              <p class="ml-2 mb-4 text-gray-600">
                <ul
                  style={{
                    paddingLeft: "1.5em",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Assisted TAs in weekly lab sections with over 25 students
                  </li>
                  <li>
                    Held weekly tutoring sessions covering TCP/IP conceptual
                    layers, routing and switching protocols, socket programming,
                    congestion control mechanisms, and MAC protocols
                  </li>
                  <li>
                    Graded and provided individual targeted feedback for labs,
                    quizzes, and midterms
                  </li>
                  <li>
                    Worked with the professor to improve students' learning
                    experience and help with course logistics
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
                    Invited keynote speakers, judges, and mentors from diverse
                    backgrounds to motivate hackers
                  </li>
                  <li>
                    Spearheaded planning and coordination for hacker workshops,
                    events and activities
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
                Sep 2021 - Aug 2022
              </p>
              <p class="ml-2 mb-4 text-gray-600">
                <ul
                  style={{
                    paddingLeft: "1.5em",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Spring 2022, Fall 2022: Tutored for Computer Systems and
                    Assembly Language
                  </li>
                  <li>
                    Winter 2022, Summer 2022: Tutored for Beginning Programming
                    in Python
                  </li>
                  <li>
                    Held 4 to 6 weekly group tutoring sessions and one-on-one
                    tutoring sessions
                  </li>
                  <li>
                    Tutored over 200 students on assignments covering Python,
                    RISC-V assembly, MIPS assembly, logic design, and Git
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
                Jan 2021 - Dec 2022
              </p>
              <p class="ml-2 mb-4 text-gray-600">
                <ul
                  style={{
                    paddingLeft: "1.5em",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Fall 2021, Fall 2022: Graded for Computer Systems and
                    Assembly Language
                  </li>
                  <li>
                    Winter 2021: Graded for Programming Abstractions: Python
                  </li>
                  <li>
                    Evaluated over 300 Python programming and logic design labs
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
