import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaRegFilePdf } from "react-icons/fa";
// import { HiOutlineAcademicCap } from "react-icons/hi";

export default function Footer() {
  return (
    <footer class="mt-10 py-8 bg-neutral-200 text-center">
      <div>
        <div class="mb-5 flex justify-center gap-4">
          <a target="_blank" href="mailto:shantelletoh@gmail.com">
            <div className="rounded-full w-10 h-10 border border-neutral-500 hover:border-neutral-800 text-neutral-500 hover:text-neutral-800 flex justify-center items-center">
              <HiOutlineMail className="w-7 h-7" />
            </div>
          </a>

          <a target="_blank" href="https://github.com/shantelletoh">
            <div className="rounded-full w-10 h-10 border border-neutral-500 hover:border-neutral-800 text-neutral-500 hover:text-neutral-800 flex justify-center items-center">
              <FaGithub className="w-7 h-7" />
            </div>
          </a>
          <a target="_blank" href="https://linkedin.com/in/shantelletoh">
            <div className="rounded-full w-10 h-10 border border-neutral-500 hover:border-neutral-800 text-neutral-500 hover:text-neutral-800 flex justify-center items-center">
              <FaLinkedin className="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>

      <div class="text-neutral-800">Copyright © 2022 Shantelle Toh</div>
    </footer>
  );
}
