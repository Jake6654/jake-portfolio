import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative z-10 cursor-pointer
        overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg
        transition-transform duration-300 ease-out transform-gpu will-change-transform
        hover:scale-105 hover:shadow-2xl hover:z-30
        active:scale-[0.98]
      "
    >
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={700}
          className="
            w-full object-contain
            transition-transform duration-300 ease-out
            group-hover:scale-105
          "
        />
      </div>

      <div className="relative p-4 transition-transform duration-300 ease-out group-hover:translate-y-[-2px]">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
