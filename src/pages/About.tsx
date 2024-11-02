export default function About() {
  return (
    <div id="about" className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/static/images/BG_ABOUT.png"
        alt="brand"
        className="h-screen w-full object-cover"
      ></img>

      {/* Overlay text & logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-[#cdcdcd] text-[2rem] font-archivo font-black md:text-4xl">
          WEL+LINYA ARCHITECTS
        </h1>
        <p className="text-neutral-200 text-base tracking-wide uppercase text-center font-roboto font-bold mt-5 max-w-[350px] md:max-w-[750px]">
          As my architecture journey is still in progress, this will only
          perform as my portfolio looking for freelance services that only cover
          the rendering field and not to entertain design, and planning
          services.
        </p>
      </div>
    </div>
  );
}
