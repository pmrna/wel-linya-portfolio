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
        <p className="text-white text-[1rem] tracking-wide uppercase text-justify font-roboto font-bold mt-5 max-w-[350px] md:max-w-[750px]">
          WelLinya Architects offers quality and convenient design that plays an
          important part in our work because our principle is to connect our
          users through the space they live. Making the imaginative into a
          profoundly improved space for the client and the masses. As
          architects, we seek aesthetic development in every project,
          formulating ideas in accordance with the rule principles of building
          codes to ensure the stability and safety of design. <br /> <br />
          WelLinya Architects will help you guide and accomplish the project; we
          collaborate deeply with our clients to execute the project to the top
          of our client vision.
        </p>
      </div>
    </div>
  );
}
