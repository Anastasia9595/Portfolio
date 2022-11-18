import React from "react";
import project1_image from "../../assets/project 1.jpg";
import project2_image from "../../assets/project 2.jpg";
import project3_image from "../../assets/project 3.jpg";

// Language Logos
import dart_logo from "../../assets/dart_logo.png";
import html_logo from "../../assets/html_logo.png";
import css_logo from "../../assets/css_logo.png";
import javascript_logo from "../../assets/javascript.png";

// Frameworke Logos
import react_logo from "../../assets/react_logo.svg";
import flutter_logo from "../../assets/flutter_logo.svg";

// Database Logos
import mysql_logo from "../../assets/my_sql_logo.svg";
import firebase_logo from "../../assets/firebase_logo.svg";

const Projects = () => {
  const projects = [
    {
      title: "Recording deliveries App",
      description: "Reacoring newly arrived goods with this app",
      Image: project1_image,

      languages: [
        { Image: dart_logo, text: "Dart" },
        { Image: flutter_logo, text: "Flutter" },
        { Image: html_logo, text: "HTML" },
        { Image: css_logo, text: "CSS" },
        { Image: mysql_logo, text: "MySQL" },
      ],
    },
    {
      title: "Notes App",
      description:
        "It is possible to create, edit and save notes both locally an in the cloud.",
      Image: project2_image,
      languages: [
        { Image: dart_logo, text: "Dart" },
        { Image: flutter_logo, text: "Flutter" },
        { Image: firebase_logo, text: "Firebase" },
      ],
    },
    {
      title: "Shopping Web application",
      description:
        "It is possible to put all goods into the shopping cart and display the total price for alle products",
      Image: project3_image,
      languages: [
        { Image: react_logo, text: "React" },
        { Image: javascript_logo, text: "JavaScript" },
        { Image: html_logo, text: "HTML" },
        { Image: css_logo, text: "CSS" },
        { Image: firebase_logo, text: "Firebase" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#22085a]  mt-60 text-white min-h-screen flex justify-center items-center">
      <div>
        <h3 className="md:text-7xl text-4xl font-semibold uppercase text-center mb-24">
          My <span className="text-[#1EEFFD]">Projects</span>
        </h3>

        <div className="grid md:gap-12 gap-6 px-6  grid-cols-1 md:grid-cols-3 ">
          {projects.map((project, index) => [
            <div
              key={index}
              className="pb-6 max-w-sm bg-gray-800 overflow-hidden rounded-2xl">
              <img
                className=" rounded-t-lg h-1/2 duration-300 hover:scale-110 transition ease-in-out object-cover"
                src={project.Image}
                alt={project.description}
              />
              <div key={index} className="p-5">
                <h5 className="mb-2 text-2xl pointer-events-none font-semibold tracking-tight text-white">
                  {project.title}
                </h5>

                <div className="flex flex-row items-center justify-end ">
                  {project.languages.map((language, index) => (
                    <div key={index} className="ml-4 mt-3 ">
                      <img
                        className="  h-8"
                        src={language.Image}
                        alt={language.text}
                      />
                    </div>
                  ))}
                </div>
                <div className="h-1/2 ">
                  <p className="my-4 pointer-events-none  text-gray-200  ">
                    {project.description}
                  </p>
                </div>
                <div className="flex justify-around ">
                  <a
                    href="#home"
                    className="btn-primary  py-2 px-3 text-sm font-medium text-center w-fit text-white  rounded-lg ">
                    Code
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-code-slash"
                      viewBox="0 0 16 16">
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg>
                  </a>
                  <a
                    href="#home"
                    className="btn-primary py-2 px-3 text-sm font-medium text-center w-fit text-white  rounded-lg  focus:ring-4 focus:outline-none ">
                    Demo Video
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-film"
                      viewBox="0 0 16 16">
                      <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>,
          ])}
        </div>
      </div>
    </section>
  );
};

export default Projects;
