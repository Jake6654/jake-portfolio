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
        group relative z-10 cursor-pointer h-full
        flex flex-col overflow-hidden rounded-lg border border-[#2A0E61] shadow-lg
        transition-transform duration-300 ease-out transform-gpu will-change-transform
        hover:scale-105 hover:shadow-2xl hover:z-30 active:scale-[0.98]
      "
    >
      {/* 고정 비율 이미지 영역 */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* 콘텐츠 */}
      <div className="relative p-4 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 line-clamp-3">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
