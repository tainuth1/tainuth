import { motion } from "framer-motion";

const skills = [
  { id: "skill1", name: "C/C++" },
  { id: "skill2", name: "HTML" },
  { id: "skill3", name: "CSS" },
  { id: "skill4", name: "JavaScript" },
  { id: "skill5", name: "Tailwind" },
  { id: "skill6", name: "Bootstrap" },
  { id: "skill7", name: "React" },
  { id: "skill8", name: "TypeScript" },
  { id: "skill9", name: "Vue" },
  { id: "skill10", name: "MongoDB" },
  { id: "skill12", name: "SQL Server" },
  { id: "skill12", name: "Supabase" },
  { id: "skill11", name: "JSON Server" },
  { id: "skill13", name: "PHP" },
  { id: "skill14", name: "Laravel" },
  { id: "skill15", name: "Git" },
  { id: "skill16", name: "GitHub" },
];

const SkillSection = () => {
  return (
    <section id="skill" className="max-w-[900px] mx-auto mt-28">
      <div className="text-center mb-14">
        <p className="text-[20px] transition-all font-bold text-gray-600 dark:text-white/60">
          My Programming Skills
        </p>
        <h1 className="text-[50px] mt-2 transition-all font-extrabold text-gray-800 dark:text-white">
          My Skills
        </h1>
      </div>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            // className="bg-white py-3 px-6 rounded-md border"
            className="cursor-pointer rounded-lg border border-black/[0.1] bg-white px-5 py-3 dark:border-gray-700 dark:bg-white/10 dark:text-white/80"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {skill.name}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillSection;
