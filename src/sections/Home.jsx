import { motion } from "framer-motion";
import myProfile from "./../assets/images/mypic.png";

const Home = () => {
  return (
    <section
      className="mt-[5rem] mb-[13rem] overflow-hidden xl:px-0 px-7"
      id="home"
    >
      <div className="max-w-[1300px] m-auto grid grid-cols-2">
        <div className="w-full flex flex-col justify-center items-start">
          <motion.h1
            className="font-extrabold text-[60px] text-[#27272A] dark:text-white"
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0,
            }}
            style={{ willChange: "transform, opacity" }}
          >
            HI!
            <br />
            <motion.span
              initial={{ translateX: -100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              style={{ willChange: "transform, opacity" }}
            >
              I'm Nuth
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h3
            className="text-[#52525B] font-bold my-3 text-[26px] dark:text-white/60"
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            style={{ willChange: "transform, opacity" }}
          >
            and I am a junior{" "}
            <span className="text-blue-600 font-extrabold dark:text-blue-200">
              Web Developer
            </span>
            .
          </motion.h3>

          {/* Button */}
          <motion.a
            className="mt-8 inline-block"
            href="#about"
            initial={{ translateX: -100, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <button className="text-[#565360] z-[1] px-8 py-3 relative overflow-hidden rounded-lg border-2 border-solid border-blue-600 font-bold text-[18px] dark:text-white/80 transition-all hover:text-white before:content-[''] before:z-[-1] before:absolute before:transition-all before:left-0 before:top-0 before:w-0 before:h-full before:bg-blue-600 hover:before:w-full">
              About Me
            </button>
          </motion.a>
          <div className="mt-16 flex gap-5">
            <motion.a
              initial={{ translateY: 30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              className="text-4xl text-[#52525B] transition-all duration-300 hover:text-[#27272A] hover:translate-y-[-4px] dark:text-white/80"
              href="https://www.linkedin.com/in/tai-nuth-6177aa313/"
              target="_blank"
              style={{ willChange: "transform, opacity" }}
            >
              <i className="home-icon fa-brands fa-linkedin"></i>
            </motion.a>
            <motion.a
              initial={{ translateY: 30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-4xl text-[#52525B] group transition-all hover:text-[#27272A] on-all hover:-translate-y-1 dark:text-white/80"
              href=""
              target="_blank"
              style={{ willChange: "transform, opacity" }}
            >
              <i className="home-icon fa-brands fa-telegram"></i>
            </motion.a>
            <motion.a
              initial={{ translateY: 30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              className="text-4xl text-[#52525B] group transition-all hover:text-[#27272A] on-all hover:-translate-y-1 dark:text-white/80"
              href="https://github.com/tainuth1"
              target="_blank"
              style={{ willChange: "transform, opacity" }}
            >
              <i className="home-icon fa-brands fa-github"></i>
            </motion.a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ translateX: 130, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="max-w-[470px] aspect-square rounded-full overflow-hidden border-solid border-[10px] border-blue-600 dark:border-white/60"
            style={{ willChange: "transform, opacity" }}
          >
            <img className="w-full h-full" src={myProfile} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
