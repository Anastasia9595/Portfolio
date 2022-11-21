import React from "react";
import home_image from "../../assets/home_image.png";

const Home = () => {
  const soial_media = ["logo-linkedin", "logo-xing", "logo-github"];
  return (
    <section
      id="home"
      className="bg-[#22085a] min-h-screen flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={home_image}
          alt="home_image"
          className="md:w-11/12 h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div>
          <div className="md:text-left text-center ">
            <h1 className="md:text-4xl text-4xl md:leading-normal leading-10 text-white font-bold  ">
              <span className="text-[#ab20fd] md:text-6xl text-4xl ">
                {" "}
                Hello{" "}
              </span>
              my name is <br />
              <span className="md:text-5xl text-2xl">
                <span className="text-[#ab20fd]">Anastasia </span>
                Osipisen
              </span>
            </h1>
          </div>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-4 px-4 md:px-0 md:text-left text-center mt-4 font-bold">
            I am a{" "}
            <span className="text-[#ab20fd] md:text-4xl text-2xl">Mobile</span>{" "}
            and{" "}
            <span className="text-[#ab20fd] md:text-4xl text-2xl">
              Frontend
            </span>{" "}
            Developer{" "}
          </h4>
          <div className="flex justify-center">
            <a href="#contact">
              <button className="btn-primary mt-8">Contact me</button>
            </a>
          </div>

          <div className="mt-8 md:mt-0 text-3xl flex md:flex-col flex-row px-8 md:items-end justify-center gap-5">
            {soial_media.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer">
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
