import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  const techs = [
    {
      id: 1,
      icon: <BiLogoGmail className="w-10 h-10 mx-auto text-white" />, 
      link: "mailto:deepakjangid6593@gmail.com",
      style: "shadow-red-500",
    },
    {
      id: 2,
      icon: <FaGithub className="w-10 h-10 mx-auto text-white" />, 
      link: "https://github.com/ideepakjangid",
      style: "shadow-white",
    },
    {
      id: 3,
      icon: <FaLinkedin className="w-10 h-10 mx-auto text-white" />, 
      link: "https://www.linkedin.com/in/ideepakjangid/",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pt-72 sm:pt-60">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <div className="flex items-center gap-3 pt-6">
            {techs.map(({ id, icon, link, style }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`shadow-md hover:scale-110 w-[40px] h-[40px] flex justify-center items-center duration-300 p-3 rounded-full ${style}`}
              >
                {icon}
              </a>
            ))}
          </div>
          <p className="py-6 text-center">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/amdkrvpb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              required
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              required
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
