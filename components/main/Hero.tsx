import React from "react";
import HeroContent from "../sub/HeroContent";
const Hero = () => {
  return (
    // 부모의 height 을 명시적으로 보여줘야지 자식도 부모의 높이를 따라감 otherwise, h = 0px
    <section id="about-me" className="relative flex flex-col h-full w-full">
      {" "}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0-z-[1] w-full h-full object-cover"
      >
        {" "}
        <source src="/blackhole.webm" type="video/webm" />{" "}
      </video>{" "}
      <HeroContent />
    </section>
  );
};
export default Hero;
