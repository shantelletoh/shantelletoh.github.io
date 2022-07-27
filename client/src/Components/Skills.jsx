import { GiGearHammer } from "react-icons/gi";
// import { FaReact } from "react-icons/fa";
// import { AiOutlineHtml5 } from "react-icons/ai";
// import { DiCss3 } from "react-icons/di";
// import { SiTailwindcss } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { SiJavascript } from "react-icons/si";
// import { SiCplusplus } from "react-icons/si";
// import cplusplus from "../assets/skills/cplusplus_language.png";
// import { AiOutlineCode } from "react-icons/ai";
// import { FaLanguage } from "react-icons/fa";
import c from "../assets/skills/c_language.png";
import css from "../assets/skills/css_icon.png";
import git from "../assets/skills/git_icon.svg";
import html from "../assets/skills/html_icon.png";
import java from "../assets/skills/java_icon.jpg";
import javascript from "../assets/skills/javascript_icon.png";
import python from "../assets/skills/python_icon.png";
import mongodb from "../assets/skills/mongodb_icon.svg";
import express from "../assets/skills/express_icon.svg";
import vue from "../assets/skills/vue_icon.png";
import bulma from "../assets/skills/bulma_icon.svg";
import tailwind from "../assets/skills/tailwind_icon.svg";
import react from "../assets/skills/react_icon.svg";

export default function Skills() {
  return (
    <div id="skills" class="pt-12 border-t border-gray-300 pb-10">
      <div class="flex justify-center">
        <div class="w-[85vw] max-w-[1080px] flex items-center justify-center gap-2">
          <GiGearHammer class="w-10 h-10" />
          <h1 class="text-4xl font-semibold">Skills</h1>
        </div>
      </div>
      <div class="flex justify-center">
        <div className="w-[85vw] max-w-[1080px] mt-8">
          <div class="flex grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 items-center gap-2">
            {/* <FaReact class="w-10 h-10" />
            <AiOutlineHtml5 class="w-10 h-10" />
            <DiCss3 class="w-10 h-10" />
            <SiTailwindcss class="w-10 h-10" />
            <SiMongodb class="w-10 h-10" />
            <SiJavascript class="w-10 h-10" />
            <SiCplusplus class="w-10 h-10" />
            <img src={c} alt="" class="w-10" />
            <img src={cplusplus} alt="" class="w-10" /> */}
            {/* <div>
              <AiOutlineCode class="w-10 h-10" />
            </div> */}

            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={html} alt="" class="w-8" />
              <p>HTML</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={css} alt="" class="w-8" />
              <p>CSS</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={javascript} alt="" class="w-8" />
              <p>JavaScript</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={python} alt="" class="w-8" />
              <p>Python</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={c} alt="" class="w-8" />
              <p>C/C++</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={react} alt="" class="w-8" />
              <p>React</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={tailwind} alt="" class="w-8" />
              <p>Tailwind CSS</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={mongodb} alt="" class="w-8 h-8" />
              <p>MongoDB</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={express} alt="" class="w-8" />
              <p>Express JS</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={vue} alt="" class="w-8" />
              <p>Vue JS</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={bulma} alt="" class="w-8 h-9" />
              <p>Bulma CSS</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={git} alt="" class="w-8" />
              <p>Git</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={java} alt="" class="w-8" />
              <p>Java</p>
            </div>
            {/* <p class="text-xl font-semibold">
              HTML, CSS, JavaScript, Python, ExpressJS, MongoDB, Tailwind CSS,
              C/C++, Git, Java
            </p> */}
          </div>
          {/* <div class="flex items-center gap-2">
            <FaLanguage class="w-10 h-10" />
            <p>English, Mandarin, Cantonese, Spanish</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
