import React from "react";

// Avatar
// import avatar_image from "../../assets/skill avatar.jpg";

// Language Logos
import dart_logo from "../../assets/dart_logo.png";
import csharp_logo from "../../assets/csharp_logo.svg";
import html_logo from "../../assets/html_logo.png";
import css_logo from "../../assets/css_logo.png";

// Frameworke Logos
import react_logo from "../../assets/react_logo.svg";
import flutter_logo from "../../assets/flutter_logo.svg";

// Database Logos
import ms_sql_logo from "../../assets/ms_sql_logo.svg";
import mysql_logo from "../../assets/my_sql_logo.svg";
import firebase_logo from "../../assets/firebase_logo.svg";

const Experience = () => {
  const languages = [
    { Image: dart_logo, text: "Dart" },
    { Image: csharp_logo, text: "C#" },
    { Image: html_logo, text: "HTML" },
    { Image: css_logo, text: "CSS" },
  ];

  const frameworks = [
    { Image: react_logo, text: "React" },
    { Image: flutter_logo, text: "Flutter" },
  ];

  const databases = [
    { Image: ms_sql_logo, text: "MSSQL" },
    { Image: mysql_logo, text: "MySQL" },
    { Image: firebase_logo, text: "Firebase" },
  ];
  return (
    <section
      id="skills"
      className="text-white min-h-screen flex place-items-center justify-center">
      <div className="text-center ">
        <h3 className="md:text-7xl py-8 text-4xl font-semibold uppercase ">
          My <span className="text-[#1EEFFD]">Skills</span>
        </h3>

        <h3 className="text-left pl-10 md:text-4xl text-2xl mb-8 mt-10">
          Programming Language
        </h3>
        <div className="grid md:gap-12 gap-8 grid-cols-3 md:grid-cols-4 ">
          {languages.map((content) => [
            <div
              key={content.text}
              className=" card items-center md:mx-auto duration-300 hover:scale-110">
              <img
                className="md:h-16 h-10"
                src={content.Image}
                alt={content.text}
              />
              <span className="pb-2 md:text-3xl  mt-5">{content.text}</span>
            </div>,
          ])}
        </div>
        <h3 className="text-left pl-10 md:text-4xl text-2xl mb-8 mt-10">
          Frameworks
        </h3>
        <div className="grid md:gap-12 gap-6 px-6 grid-cols-3 md:grid-cols-4 ">
          {frameworks.map((content) => [
            <div
              key={content.text}
              className="card items-center md:mx-auto duration-300 hover:scale-110 ">
              <img
                className="md:h-16 h-10"
                src={content.Image}
                alt={content.text}
              />
              <span className="pb-2 md:text-3xl  mt-5">{content.text}</span>
            </div>,
          ])}
        </div>
        <h3 className="text-left pl-10 md:text-4xl text-2xl mb-8 mt-10">
          Databases
        </h3>
        <div className="grid md:gap-12 gap-6 px-6 grid-cols-3 md:grid-cols-4 ">
          {databases.map((content) => [
            <div
              key={content.text}
              className="card items-center md:mx-auto duration-300 hover:scale-110">
              <img
                className="md:h-16 h-10"
                src={content.Image}
                alt={content.text}
              />
              <span className="pb-2 md:text-3xl  mt-5">{content.text}</span>
            </div>,
          ])}
        </div>
      </div>
    </section>
  );
};

export default Experience;
