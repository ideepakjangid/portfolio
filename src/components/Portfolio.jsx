import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import quizango from "../assets/portfolio/Quizango.png"
import ContactVault from "../assets/portfolio/ContactVault.png"
import ishop from "../assets/portfolio/ishop.png"
import backgroundAttachment from "../assets/portfolio/backgroundAttachment.png"
import easeShop from "../assets/portfolio/EaseShop.png"
import quizApp from "../assets/portfolio/quizApp.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ishop,
      link:"#"
    },
    {
      id: 2,
      src: ContactVault,
      link:"https://contactvault.vercel.app/"
    },
    {
      id: 3,
      src: quizango,
      link:"https://quizango.vercel.app/"
    },
    {
      id: 4,
      src: quizApp,
      link:"https://quizz-app-smoky.vercel.app/"
    },
    {
      id: 5,
      src: backgroundAttachment,
      link:"https://wscubetech-one.vercel.app/"
    },
    {
      id: 6,
      src: easeShop,
      link:"https://easeshopp.vercel.app/"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-48 sm:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link} target="_blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
