import React from "react";
import { content } from "../../Content";

const AboutNew = () => {
  const { about } = content;
  return (
    <section id="about" className="text-white min-h-screen">
      <div className="grid md:gap-12 gap-6 px-6  grid-cols-1  md:grid-cols-2">
        <div className=" h-48 col-span-2 flex justify-center items-center">
          <h3 className="md:text-7xl text-4xl font-semibold uppercase">
            {about.title[0]}{" "}
            <span className="text-[#1EEFFD]">{about.title[1]}</span>
          </h3>
        </div>
        <div className="h-full md:flex md:flex-col md:justify-center  px-12   md:text-xl text-sm text-center md:text-start">
          <p>{about.description}</p>
          <br />
          <p>{about.secondDescription}</p>
          <br />
          <p>{about.placeholder}</p>
          <br />
          <p>{about.thirdDescription}</p>
          <br />

          <ul className="flex justify-evenly ">
            {about.hobbys.map((content, i) => (
              <div>
                <li
                  key={i}
                  className="text-4xl p-4 rounded-full hover:scale-110">
                  {content.icon}
                </li>
                <p>{content.description}</p>
              </div>
            ))}
          </ul>
        </div>

        <div className="hidden md:h-screen md:flex md:justify-center md:items-center relative">
          <div className="bg-gray-50 rounded-md md:h-[48rem] h-[20rem] md:w-[30rem] w-[10rem] flex justify-center items-start absolute pt-10">
            <img
              src={about.image}
              alt="person profile"
              className="mx-auto bg-gradient-to-b from-sky-300 to-blue-900 rounded-sm max-w-full h-auto object-cover"
            />
            <div className="bg-gray-100 md:h-[46rem] md:w-[30rem] rotate-12 absolute rounded-md -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
