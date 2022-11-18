import React from "react";
import controller_img from "../../assets/game-console.png";
import anime_img from "../../assets/anime.png";
import book_img from "../../assets/book.png";
import drawing_img from "../../assets/drawing.png";
import cv from "../../assets/CV.pdf";
import profileImg from "../../assets/profile.jpg";
import about_me_img from "../../assets/about_me.png";

const About = () => {
  const info = [
    { text: "Playing Video Games", Image: controller_img },
    { text: "Watching Anime", Image: anime_img },
    { text: "Reading Books", Image: book_img },
    { text: "Drawing", Image: drawing_img },
  ];
  return (
    <section
      id="about"
      className="bg-[#22085a] min-h-screen flex justify-center items-center py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="md:text-7xl text-4xl font-semibold uppercase">
          About <span className="text-[#1EEFFD]">Me</span>
        </h3>

        <img src={about_me_img} alt="img" />
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className=" text-justify leading-7 w-11/12 mx-auto">
                Hi Everyone, I am Anastasia Osipisen from Fritzlar, Germany. I
                recently graduated as a computer scientist and am now looking
                for suitable position in this field.
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto mt-4">
                I love Coding and implementing project with it.
              </p>
              <p className="text-justify mt-4  leading-7 mx-auto w-11/12">
                Apart from coding I have the following hobbies:
              </p>

              <div className="grid grid-items md:grid-cols-4 grid-cols-2 gap-7 mt-8 ">
                {info.map((content) => (
                  <div key={content.text}>
                    <div className="bg-slate-100/10 p-3 rounded-full mb-4">
                      <img
                        className="my-5 mx-auto md:h-16 h-14"
                        src={content.Image}
                        alt={content.text}
                      />
                    </div>

                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />

              <a href={cv} download="Anastasia Osipisen CV.pdf">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full  relative sm:w-10/12 w-11/12 max-w-sm profileImg ">
              <img
                src={profileImg}
                alt="profile"
                className="w-full object-cover rounded-full md:h-full h-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
