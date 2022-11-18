import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "Anastasia9595@googlemail.com" },
    { logo: "logo-whatsapp", text: "0174 5216021" },
    {
      logo: "location",
      text: "Fritzlar, Germany",
    },
  ];
  return (
    <section id="contact" className="min-h-screen text-white px-4 py-10">
      <div className="text-center mt-8">
        <h3 className="md:text-7xl text-4xl font-semibold uppercase">
          Contact <span className="text-[#1EEFFD]">Me</span>
        </h3>
        <div className="mt-16 flex md:flex-row flex-col gap-6 may-w-5xl bg-gray-800 md:p-6 rounded-lg mx-auto p-4 w-5/6">
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center">
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-[#572db1] rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
