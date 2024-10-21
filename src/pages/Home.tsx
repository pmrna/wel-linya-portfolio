export default function Home() {
  return (
    <div id="home" className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/src/assets/BG_HOME.png"
        alt="brand"
        className="h-screen w-full object-cover"
      ></img>

      {/* Overlay text & logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <img
          src="src/assets/WELL_RENDERS_2.png"
          alt=""
          className="h-auto w-[400px] mb-0 object-contain"
          style={{ marginBottom: "-60px" }} //cool hack to fix the gap below logo
        />
        <h1 className="text-[#cdcdcd] text-4xl font-archivo font-black leading-none">
          WEL+LINYA ARCHITECTS
        </h1>
        <h2 className="text-white text-[12px] font-roboto font-bold mt-3">
          ARCHITECT & DESIGNER
        </h2>
      </div>
    </div>
  );
}
