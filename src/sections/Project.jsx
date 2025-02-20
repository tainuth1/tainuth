import { useState } from "react";
import ecommerce from "./../assets/images/e-commerce-project.png";
import universityMS from "./../assets/images/university-management-project.png";
import freepikclone from "./../assets/images/freepik-project.png";
import gammingweb from "./../assets/images/gaming-web.png";
import blogapp from "./../assets/images/blog-app.png";
const myProject = [
  {
    id: "pro1",
    title: "E-Commerce Website - Management System",
    description:
      "Developed a Product Management System for an e-commerce platform using Laravel and SQL for backend, and Tailwind CSS for frontend design.",
    github: "https://github.com/tainuth1/E-Commerce",
    image: `${ecommerce}`,
    create_at: "August 14, 2024",
    creator: "Tai Nuth",
  },

  {
    id: "pro7",
    title: "Blog Post App",
    description:
      "Developed a Blog Post App using ReactJS, Tailwind CSS, and JSON Server, allowing users to create, edit, and manage their blog posts efficiently.",
    github: "https://github.com/tainuth1/Blog-Project",
    image: `${blogapp}`,
    create_at: "December 28, 2024",
    creator: "Tai Nuth",
  },
  {
    id: "pro2",
    title: "University Management System",
    description:
      "Created a University Management System using PHP and MySQL, allowing student enrollment, management of students, classes, teachers, departments, payments.",
    github: "https://github.com/tainuth1/University-Mangement",
    image: `${universityMS}`,
    create_at: "June 28, 2024",
    creator: "Tai Nuth",
  },
  {
    id: "pro4",
    title: "Website for gaming News & Turnament",
    description:
      "Designed a website for gaming news, tournaments, gaming stuff. Include news updates, and announcements about upcoming game releases.",
    github: "https://github.com/tainuth1/Gaming-website",
    image: `${gammingweb}`,
    create_at: "November 26, 2023",
    creator: "Tai Nuth",
  },
  {
    id: "pro3",
    title: "Freepik home page website Recreation",
    description:
      "Recreating the landing page of the Freepik website. Built with responsive design and interactive functionality to closely match the original.",
    github: "https://github.com/tainuth1/Freepik-Copy",
    image: `${freepikclone}`,
    create_at: "October 18, 2023",
    creator: "Tai Nuth",
  },
];

const Project = () => {
  const [projects] = useState(myProject);
  return (
    <section className="relative" id="project">
      <div className="max-w-[1300px] m-auto mt-32 overflow-hidden pb-10">
        <div className="text-center mb-14">
          <p className="text-[20px] font-bold transition-all text-gray-600 leading-3 dark:text-white/60">
            All My Work
          </p>
          <h1 className="text-[50px] mt-2 font-extrabold transition-all text-gray-800 dark:text-white">
            My Work
          </h1>
        </div>
        <div className="">
          <div className="">
            <div className="slider flex gap-12 transition-transform duration-500">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className="group card max-w-[400px] min-h-[600px] p-5 border-[1.5px] relative transition-all border-[#d1d9e0b3] dark:border-gray-700 cursor-pointer rounded-xl flex-shrink-0 hover:border-blue-600"
                >
                  <div className="project-img-wrapper w-full h-[280px] border-[1px] border-[#d1d9e0b3] dark:border-gray-700 rounded-xl overflow-scroll group-hover:border-blue-600 shadow">
                    <img className="rounded-xl" src={item.image} alt="" />
                  </div>
                  <div className="px-2">
                    <h6 className="flex items-center transition-all text-[15px] dark:text-gray-500 text-gray-600 font-semibold my-3">
                      {item.create_at}
                      <span className="text-[17px] px-5">|</span>
                      {item.creator}
                    </h6>
                    <a className="text-[20px] transition-all font-bold hover:underline dark:text-white/80">
                      {item.title}
                    </a>
                    <p className="text-[16px] transition-all text-gray-500 mt-3 dark:text-gray-400 font-medium ">
                      {item.description}
                    </p>
                  </div>
                  <a href={item.github} target="_blank">
                    <button className="absolute bottom-[-30px] left-8 bg-white px-5 py-3 rounded-lg border-[1px] transition-all border-[#d1d9e0b3] dark:border-gray-700 dark:bg-[#374151] dark:text-white/80 text-gray-600 text-[25px] group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[360deg]">
                      <i className="fa-brands fa-github"></i>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        id="prevBtn"
        className="slider-btn absolute top-[60%] left-[30px] transform -translate-y-1/2 text-[18px] text-gray-600 px-5 py-3 rounded-full transition-all border active:scale-[0.95] active:bg-blue-600 active:text-white hover:bg-gray-200 sm:hidden"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        id="nextBtn"
        className="slider-btn absolute top-[60%] right-[30px] transform -translate-y-1/2 text-[18px] text-gray-600 px-5 py-3 rounded-full transition-all border active:scale-[0.95] active:bg-blue-600 active:text-white hover:bg-gray-200 sm:hidden"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default Project;
