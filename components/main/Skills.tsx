import { Backend_skill, Frontend_skill, Full_stack } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillsText from "../sub/SkillsText";

const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 pb-90"
        style={{ transform: "scale(0.9)" }}
      >
        <SkillsText />
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
              className={image.skill_name === "Three.js" ? "invert" : ""}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src={"/cards-video.webm"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
