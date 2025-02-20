import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Resume from "./sections/Resume";
import Skill from "./sections/Skill";
import Footer from "./components/Footer";
import { useTheme } from "./contexts/ThemeProvider";

const App = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="w-full bg-slate-100 h-[100vh] xl:hidden flex gap-10 flex-col justify-center items-center">
        <h1 className="text-center text-gray-800 text-4xl font-bold px-4">
          មិនទាន់មាន Responsive ទេ​អាចមើលលើ Computer ឬ​ Device ដែលមាន Screen
          ធំជាងនេះទៅ😂
        </h1>
      </div>
      <div className={`${theme === "dark" ? "dark" : ""} xl:block hidden`}>
        <div className={`bg-[#F9FAFB] dark:bg-[#111827] transition-all -z-20`}>
          <Navbar />
          <div className="absolute left-[-35rem] top-[5rem] h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[10rem]"></div>
          <Home />
          <About />
          <Resume />
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
