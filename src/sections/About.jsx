import { motion } from "framer-motion";

const infoItems = [
  { label: "Age", value: "19" },
  { label: "Religion", value: "Khmer" },
  { label: "Address", value: "#Toul Kork, Phnum Penh" },
  { label: "Email", value: "tainuth1@gmail.com" },
  { label: "Phone", value: "+855-81725020" },
  { label: "Freelance", value: "Available" },
];
const skills = [
  { name: "Web Design", percent: 80 },
  { name: "Web Backend", percent: 60 },
  { name: "Database", percent: 50 },
  { name: "Development", percent: 75 },
];

const About = () => {
  return (
    <section className="w-full" id="about">
      <div className="max-w-[1300px] m-auto">
        <div className="w-full flex gap-16">
          <div className="w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 60 }} // Start faded out & below
              whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
              viewport={{ once: true }} // Only animate once
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 0,
              }}
              className="text-[60px] font-extrabold text-[#27272A] dark:text-white transition-all"
            >
              About Me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Only animate once
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 0.1,
              }}
              className="text-[25px] font-normal text-[#52525B] dark:text-white/60"
            >
              I love to create Management System.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Only animate once
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 15,
                delay: 0.2,
              }}
              className=""
            >
              <div className="flex items-center gap-4 mt-5">
                <div className="">
                  <a href="" download="TAI Nuth_Web-Developer_CV.pdf">
                    <button className="flex items-center gap-4 text-[20px] px-10 py-3 bg-blue-600 text-white shadow rounded-full transition-all hover:bg-blue-700 active:scale-[0.9]">
                      <i className="fa-solid fa-download"></i>
                      Download CV
                    </button>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    target="_blank"
                    href="https://web.facebook.com/tai.nuth.5/"
                    className="group w-12 h-12 flex justify-center items-center shadow cursor-pointer rounded-full border-[2px] border-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-[0.9]"
                  >
                    <i className="fa-brands text-[20px] text-blue-800 transition-all group-hover:text-white fa-facebook-f"></i>
                  </a>
                  <a
                    target="_blank"
                    href=""
                    className="group w-12 h-12 flex justify-center items-center shadow cursor-pointer rounded-full border-[2px] border-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-[0.9]"
                  >
                    <i className="fa-brands text-[20px] text-blue-800 transition-all group-hover:text-white fa-telegram"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/tainuth1"
                    className="group w-12 h-12 flex justify-center items-center shadow cursor-pointer rounded-full border-[2px] border-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-[0.9]"
                  >
                    <i className="fa-brands text-[20px] text-blue-800 transition-all group-hover:text-white fa-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/tai-nuth/"
                    className="group w-12 h-12 flex justify-center items-center shadow cursor-pointer rounded-full border-[2px] border-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-[0.9]"
                  >
                    <i className="fa-brands text-[20px] text-blue-800 transition-all group-hover:text-white fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }} // Start faded out & below
            whileInView={{ opacity: 1, x: 0 }} // Animate when in viewport
            viewport={{ once: true }} // Only animate once
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              delay: 0,
            }}
            className="w-1/2"
          >
            <p className="text-[19px] text-[#52525B] dark:text-white/80 transition-all">
              Im a Junior Web Developer with a strong foundation in creating
              dynamic and user-friendly websites. Driven by a passion for
              technology and continuous learning, I am eager to apply my
              knowledge to real-world challenges. My academic background and
              project experience have equipped me with the ability to develop
              both front-end and back-end solutions. I am now looking to further
              hone my skills in a collaborative and innovative environment.
            </p>
          </motion.div>
        </div>
        <div className="flex mt-16 gap-16">
          <div className="w-1/2 lg:w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Only animate once
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.13 },
                },
              }}
              className="flex flex-col gap-1"
            >
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  className={`flex items-center px-6 py-5 rounded-2xl gap-3 ${
                    index % 2 !== 0 ? "bg-[#f7f8fe] dark:bg-[#374151]" : ""
                  }`}
                >
                  <h2 className="w-1/3 text-[19px] text-gray-800 font-bold transition-all dark:text-white/80">
                    {item.label}:
                  </h2>
                  <p className="w-full text-[18px] font-medium transition-all text-gray-600 dark:text-white/60">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="w-1/2 lg:w-full">
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} // Only animate once
              className="grid grid-cols-2 gap-8 p-10 border-[2.5px] border-blue-600 rounded-xl"
            >
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-full h-[200px] rounded-lg border-[.2px] border-[#d1d9e0b3] flex justify-center items-center relative overflow-hidden cursor-pointer transition-all hover:shadow hover:-translate-y-1 hover:border-[1px] hover:border-blue-600"
                >
                  <div className="w-full text-center">
                    <p className="text-[60px] font-bold text-gray-800 leading-[55px] dark:text-white">
                      {skill.percent}%
                    </p>
                    <p className="text-[20px] font-medium text-gray-800 dark:text-white/80">
                      {skill.name}
                    </p>
                  </div>
                  <div className="w-full h-[20px] border-[.2px] border-gray-100 absolute bottom-0">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="h-full bg-blue-600 rounded-e-md"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
