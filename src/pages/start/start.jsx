import React from "react";

const Start = () => {
  const soial_media = ["logo-linkedin", "logo-xing", "logo-github"];
  return (
    <section className="min-h-screen flex py-10 md:flex-row flex-col items-center justify-center">
      <div className="text-center">
        <p className="uppercase text-lg tracking-widest text-gray-200">
          Let's build something together
        </p>
        <h1 className="py-4 font-bold text-6xl">
          Hi, I'm <span className="text-[#1EEFFD]">Anastasia</span>
        </h1>
        <h1 className="py-4 font-bold text-4xl">
          I'm <span className="text-[#1EEFFD]">Front-End</span> and{" "}
          <span className="text-[#1EEFFD]">Mobile</span> Developer
        </h1>
        <p className="py-4 text-gray-200 max-w-[40%] m-auto">
          I'm mobile and front-end web developer. I love building interactive
          apps as well as websites. It is very important to me that my
          application are all resposive. Currently, I'm focused on building
          responsive front-end web application with react while learning
          back-end technologies.{" "}
        </p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          {soial_media.map((icon) => (
            <div className="bg-white p-6 rounded-full shadow-gray-400 ">
              <div key={icon} className=" cursor-pointer">
                <ion-icon name={icon}></ion-icon>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Start;
