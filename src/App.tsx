import Header from "./components/Header";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SectionDivider from "./components/SectionDivider";

const App = () => {
  return (
    <div className="bg-[#0d0b04] overflow-hidden">
      <Header />
      <Home />
      <SectionDivider />
      <Project />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Contact />
      <SectionDivider />
    </div>
  );
};

export default App;
