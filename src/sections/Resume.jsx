import { motion } from "framer-motion";

const educationData = [
  {
    year: "2023 - Present",
    title: "Bachelor Degree",
    institution: "Royal University of Phnum Penh",
    description:
      "Currently I'm the third-year university student in Bachelor Degree of Computer science at RUPP.",
  },
  {
    year: "2023 - 2023",
    title: "Certificate",
    institution: "ETEC Center",
    description:
      "I have graduated in web frontend and backend development short course at ETEC.",
  },
];
const experienceData = [
  {
    year: "Oct 2024 - Present",
    title: "Instructor",
    institution: "ETEC Center",
    description:
      "As an Instructor at ETEC Center, I teach C++ and web development, including HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and ReactJS. I help students build practical skills through hands-on learning and real-world projects.",
  },
];

const Resume = () => {
  return (
    <section id="resume">
      <div className="max-w-[1300px] m-auto mt-32">
        <div className="text-center mb-16">
          <p className="text-[20px] font-bold transition-all text-gray-600 leading-3 dark:text-white/60">
            My Background Information
          </p>
          <h1 className="text-[50px] mt-2 transition-all font-extrabold text-gray-800 dark:text-white">
            My Resume
          </h1>
        </div>
        <div className="flex gap-10">
          <div className="w-1/2 bg-[#f7f8fe] rounded-xl p-14 shadow dark:bg-[#374151]">
            <h2 className="text-[27px] font-bold transition-all dark:text-white">
              Education
            </h2>
            <div className="border-l-[5px] border-blue-600 pl-8 mt-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0,
                  }}
                  className="relative before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-blue-600 before:top-0 before:left-[-45px] mt-11 first:mt-0"
                >
                  <p className="flex items-center gap-2 text-[17px] font-semibold text-blue-700 transition-all dark:text-white/60">
                    <i className="fa-regular fa-calendar-days "></i>
                    {edu.year}
                  </p>
                  <h2 className="text-[#717171] text-[17px] font-semibold my-3 transition-all dark:text-white/80">
                    {edu.title}
                  </h2>
                  <div className="border-[2px] border-[#d1d9e0b3] rounded-lg p-5 cursor-pointer transition-all hover:border-blue-600">
                    <h3 className="text-[18px] font-bold transition-all dark:text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-[#717171] transition-all dark:text-white/60">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-1/2 bg-[#f7f8fe] rounded-xl p-14 shadow dark:bg-[#374151]">
            <h2 className="text-[27px] font-bold transition-all dark:text-white">
              Experiences
            </h2>
            <div className="border-l-[5px] border-blue-600 pl-8 mt-4">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0,
                  }}
                  className="relative before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-blue-600 before:top-0 before:left-[-45px] mt-11 first:mt-0"
                >
                  <p className="flex items-center gap-2 text-[17px] font-semibold text-blue-700 transition-all dark:text-white/60">
                    <i className="fa-regular fa-calendar-days"></i>
                    {exp.year}
                  </p>
                  <h2 className="text-[#717171] text-[17px] font-semibold my-3 transition-all dark:text-white/80">
                    {exp.title}
                  </h2>
                  <div className="border-[2px] border-[#d1d9e0b3] rounded-lg p-5 cursor-pointer transition-all hover:border-blue-600">
                    <h3 className="text-[18px] font-bold transition-all dark:text-white">
                      {exp.institution}
                    </h3>
                    <p className="text-[#717171] transition-all dark:text-white/60">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
