import me from "./assets/me.png";

//icons
import { IoGameController } from "react-icons/io5";
import { MdMovie } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaPaintBrush } from "react-icons/fa";

export const content = {
  nav: [
    {
      link: "/",
      name: "home",
    },
    {
      link: "/",
      name: "about",
    },
    {
      link: "/",
      name: "skills",
    },
    {
      link: "/",
      name: "about",
    },
    {
      link: "/",
      name: "projects",
    },
    {
      link: "/",
      name: "contact",
    },
  ],

  hero: {
    name: "Anastasia",
    description:
      "I'm mobile and front-end web developer. I love building interactive apps as well as websites. It is very important to me that my application are all resposive. Currently, I'm focused on building responsive front-end web application with react while learning back-end technologies.",
    firstbtnText: "Hire Me",
    secondbtnText: "My Projects",
    soial_media: ["mail", "logo-linkedin", "logo-xing", "logo-github"],
  },

  about: {
    title: ["About", "me"],
    description:
      " Hi Everyone, I am Anastasia Osipisen from Fritzlar, Germany. I recently graduated as a computer scientist and am now looking for suitable position in this field.",
    secondDescription: "I love Coding and implementing project with it.",
    thirdDescription: "Apart from coding I have the following hobbies:",
    icons: [],
    placeholder:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    image: me,
    hobbys: [
      { icon: <MdMovie className="icons" />, description: "Watching Movies" },
      {
        icon: <IoGameController className="icons" />,
        description: "Playing Videogames",
      },
      { icon: <ImBooks className="icons" />, description: "Reading books" },
      { icon: <FaPaintBrush className="icons" />, description: "Drawing" },
    ],
  },

  Footer: {
    text: `All © Copy Right Reserved ${new Date().getFullYear()}`,
  },
};
