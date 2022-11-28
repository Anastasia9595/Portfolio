import React from "react";
import { content } from "../../Content";

const Start = () => {
  const { hero } = content;
  return (
    <section
      id="home"
      className="min-h-screen flex  md:flex-row flex-col items-center justify-center">
      <div className="text-center">
        <p className="uppercase md:text-lg hidden tracking-widest text-gray-200">
          Let's build something together
        </p>
        <h1 className="py-4 font-bold md:text-8xl text-3xl">
          Hi, I'm <span className="text-[#1EEFFD]">{hero.name}</span>
        </h1>

        <h1 className="py-4 font-bold md:text-4xl text-2xl">
          I'm <span className="text-[#1EEFFD]">Front-End</span> and{" "}
          <span className="text-[#1EEFFD]">Mobile</span> Developer
        </h1>
        <p className="py-4 text-gray-200 md:max-w-[40%] max-w-xs m-auto md:text-lg text-sm">
          {hero.description}{" "}
        </p>
        <div className="flex justify-center space-x-8">
          <a href="#contact">
            <button className=" bg-purple-600 hover:bg-purple-800 text-white font-semibold md:mx-0 mx-auto rounded-2xl py-4 px-8 flex items-center gap-2 mt-2 ">
              {hero.firstbtnText}
            </button>
          </a>

          <a href="#projects">
            <button className="bg-purple-600 hover:bg-purple-800 text-white font-semibold md:mx-0 mx-auto rounded-2xl py-4 px-8 flex items-center gap-2 mt-2 ">
              {hero.secondbtnText}
            </button>
          </a>
        </div>
        <div className="flex items-center justify-between max-w-[20.6rem] m-auto py-4">
          {hero.soial_media.map((content, i) => (
            <div key={i} className="cursor-pointer">
              <ion-icon name={content}></ion-icon>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Start;
