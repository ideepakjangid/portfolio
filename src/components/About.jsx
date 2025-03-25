import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-48 sm:pt-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="flex flex-col gap-4 text-xl">
          <h1 className="text-2xl">Hey, I'm <span className="font-bold text-3xl">Deepak Jangid!</span> </h1>
          <p>
            I'm a passionate <strong>Full-Stack MERN Developer</strong> who
            loves building modern, scalable, and user-friendly web applications.
            I specialize in{" "}
            <strong>
              React, Next.js, Tailwind CSS, Node.js, Express.js, and MongoDB
            </strong>
            , creating efficient and dynamic digital experiences.
          </p>
          <p>
            I have a{" "}
            <strong>Bachelor’s degree in Computer Applications (BCA)</strong>{" "}
            and have further honed my skills by completing a
            <strong>Full-Stack MERN course from WsCube Tech</strong>. This has
            helped me gain expertise in designing, developing, and deploying
            high-quality web applications.
          </p>
          <p>
            I enjoy solving real-world problems through code and constantly
            exploring new technologies to improve my development skills. My
            focus is on writing clean, maintainable code and delivering
            high-quality web applications.
          </p>
          <p>
            I'm always excited to collaborate on innovative projects and
            contribute to the developer community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
