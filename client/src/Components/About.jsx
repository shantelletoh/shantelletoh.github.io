import headshot from "../assets/headshot.png";

export default function About() {
  return (
    <div class="flex justify-center pt-12 pb-12">
      <div class="w-[85vw] max-w-[1080px] flex flex-col-reverse sm:flex-row items-center sm:gap-5 lg:gap-8">
        {/* about section text */}
        <div>
          <h1 class="text-3xl sm:text-4xl w-full b-4 text-center sm:text-left">
            Hi! I'm <span class="font-bold">Shantelle&nbsp;Toh</span>
          </h1>

          <div class="mt-2 text-center sm:text-left">
            <p class="text-xl sm:text-2xl lg:inline">
              Recent Computer Science Graduate |&nbsp;Full‑Stack&nbsp;Developer
            </p>
          </div>

          <p class="sm:text-[1.1rem] sm:w-[50vw] max-w-[700px] mt-3">
            I recently graduated from University of California, Santa Cruz with
            a B.S. in Computer Science. I'm currently looking for full-time
            software engineering opportunities.
          </p>
        </div>

        {/* headshot */}
        <img
          src={headshot}
          alt="Shantelle Toh headshot"
          className="w-[40vw] sm:w-[32vw] max-w-[250px] rounded-full"
        />
      </div>
    </div>
  );
}
