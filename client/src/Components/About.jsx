import headshot from "../assets/headshot.png";

export default function About() {
  return (
    <div class="flex justify-center pt-10 pb-10">
      <div class="w-[85vw] max-w-[1080px] flex justify-between items-center sm:gap-3 lg:gap-8">
        <div>
          <h1 class="text-4xl w-full b-4">
            Hi! I'm{" "}
            <span class="text-4xl font-bold block md:inline">
              Shantelle Toh
            </span>
          </h1>

          <div class="mt-2">
            {/* <span class="text-2xl block md:inline">Computer Science Student</span> */}
            <p class="text-2xl lg:inline">
              Computer Science Student |&nbsp;Full‑Stack&nbsp;Developer
            </p>
            {/* <p class="text-2xl lg:inline"> | Full-Stack Developer</p> */}
          </div>
          <p class="text-[1.1rem] w-[50vw] md:w-[55vw] max-w-[700px] mt-3">
            I'm a junior at UC Santa Cruz and I plan to graduate in December 2022 with a B.S. in Computer Science. I'm looking for software engineering opportunities post-grad.
          </p>
        </div>
        <div>
          <img
            src={headshot}
            alt="Shantelle Toh headshot"
            className="w-[50vw] max-w-[300px] rounded-full"
            // className="w-[50vw] rounded-full lg:w-[20vw] lg:max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
