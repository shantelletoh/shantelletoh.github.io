import { GiGearHammer } from "react-icons/gi";
import html from "../assets/skills/html_icon.png";
import javascript from "../assets/skills/javascript_icon.png";
import python from "../assets/skills/python_icon.png";
import c from "../assets/skills/c_language.png";
import react from "../assets/skills/react_icon.svg";
import tailwind from "../assets/skills/tailwind_icon.svg";
import mongodb from "../assets/skills/mongodb_icon.svg";
import java from "../assets/skills/java_icon.jpg";
import git from "../assets/skills/git_icon.svg";
import vim from "../assets/skills/vim_icon.gif";
import vscode from "../assets/skills/vscode_icon.png";
import linux from "../assets/skills/linux_icon.jpg";
import node from "../assets/skills/node_icon.png";

export default function Skills() {
  return (
    <div id="skills" class="pt-12 border-t border-gray-300 pb-10">
      {/* section title */}
      <div class="flex justify-center">
        <div class="w-[85vw] max-w-[1080px] flex items-center justify-center gap-2">
          <GiGearHammer class="w-10 h-10" />
          <h1 class="text-4xl font-semibold">Skills</h1>
        </div>
      </div>

      {/* section content */}
      <div class="flex justify-center">
        <div className="w-[85vw] max-w-[1080px] mt-8">
          <div class="flex grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={html} alt="" class="w-8" />
              <p>HTML/CSS</p>
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
              <p>React JS</p>
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
              <img src={node} alt="" class="w-8" />
              <p>Node JS</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={java} alt="" class="w-8" />
              <p>Java</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={vscode} alt="" class="w-8" />
              <p>Visual Studio Code</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={vim} alt="" class="w-8" />
              <p>Vim</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={linux} alt="" class="w-8" />
              <p>Linux/Unix</p>
            </div>
            <div class="flex items-center gap-3 text-lg font-semibold mb-2">
              <img src={git} alt="" class="w-8" />
              <p>Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
