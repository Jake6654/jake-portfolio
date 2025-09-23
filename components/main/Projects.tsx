import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10 items-stretch">
        <ProjectCard
          src="/TravelLog.png"
          title="Travel log"
          href="https://devpost.com/software/travel-log-7yckum"
          description="Travel recommendation website that lets users track trips and discover destinations powered by AI suggestions."
        />
        <ProjectCard
          src="/emotional.png"
          title="Emotional Diary"
          href="https://emotion-diary-pied-five.vercel.app/"
          description="This is my first Next.js project. It’s a simple webpage built using basic React features such as useState and useMemo."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Jake's Portfolio"
          href="https://jake-portfolio-one.vercel.app/"
          description="A frontend-focused portfolio using Three.js and Framer Motion to deliver interactive 3D visuals and smooth animations."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Test2"
          href="https://devpost.com/software/travel-log-7yckum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Test3"
          href="https://devpost.com/software/travel-log-7yckum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Test4"
          href="https://devpost.com/software/travel-log-7yckum"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  );
};

export default Projects;
