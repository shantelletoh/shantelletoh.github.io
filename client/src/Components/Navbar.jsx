export default function Navbar() {
  return (
    <div class="bg-neutral-200 flex justify-center gap-2 py-2">
      <a
        href="#about"
        class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md p-2 font-semibold"
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
        href="#contact"
        class="text-neutral-800 hover:bg-neutral-300 hover:text-black rounded-md p-2 font-semibold"
      >
        Contact
      </a>
    </div>
  );
}
