import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeProvider";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "skill", label: "Skills" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const menuRefs = useRef([]);
  const [activeStyle, setActiveStyle] = useState({ width: 0, left: 0 });
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveTab(visibleSection.target.id);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    menuItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const activeItem =
      menuRefs.current[menuItems.findIndex((item) => item.id === activeTab)];
    if (activeItem) {
      setActiveStyle({
        width: activeItem.offsetWidth,
        left: activeItem.offsetLeft,
      });
    }
  }, [activeTab]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        switchTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleScrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="w-full z-[1] nav-bar">
      <div className="max-w-[1300px] flex justify-between items-center m-auto py-5">
        <div className="logo w-1/5 z-50 xl:block hidden">
          <h1 className="font-extrabold text-[35px] text-[#27272A] transition-all dark:text-white/80">
            NUTH
          </h1>
        </div>
        <div className="xl:w-3/5 w-full flex justify-center">
          <motion.nav
            initial={{ translateY: -30, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            style={{
              willChange: "transform, opacity",
            }}
            className="bg-white bg-opacity-50 border backdrop-blur-[0.5rem] fixed top-4 z-[1] shadow-sm px-4 py-2 rounded-full max-w-5xl dark:bg-gray-950 dark:bg-opacity-75 dark:border-0"
          >
            <ul className="w-full flex flex-wrap justify-center gap-6 relative">
              {/* Animated Background */}
              <motion.div
                className="absolute top-0 bottom-0 bg-[#F3F4F6] rounded-full dark:bg-[#1F2937] transition-all duration-0"
                animate={{ width: activeStyle.width, left: activeStyle.left }}
                transition={{ type: "spring", stiffness: 500, damping: 50 }}
              />

              {menuItems.map(({ id, label }, index) => (
                <li
                  key={id}
                  ref={(el) => {
                    menuRefs.current[index] = el;
                  }}
                  className={`relative px-4 py-2 cursor-pointer font-semibold z-10 transition-colors hover:text-gray-950 dark:hover:text-gray-400 ${
                    activeTab === id
                      ? "text-black dark:text-white/80"
                      : "text-gray-500"
                  } hover:text-black`}
                  onClick={() => handleScrollToSection(id)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>
        <div className="w-1/5 xl:flex justify-end hidden float-end">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={switchTheme}
            className={`${
              theme === "light" ? "bg-white" : "bg-[#252529]"
            } text-xl text-[#27272A] w-[45px] z-50 h-[45px] border transition-all rounded-full flex dark:border-gray-600 justify-center items-center`}
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px]"
                viewBox="0 0 384 512"
              >
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] fill-gray-400"
                viewBox="0 0 512 512"
              >
                <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
