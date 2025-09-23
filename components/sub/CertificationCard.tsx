"use client";

import { motion } from "framer-motion";
import React from "react";
import { slideInFromLeftIndexed } from "@/utils/motion";

interface Props {
  name: string;
  certId: string;
  index: number; // 순서 전달
}

const CertificationCard = ({ name, certId, index }: Props) => {
  return (
    <motion.div
      variants={slideInFromLeftIndexed}
      custom={index}
      className="
        group relative w-full md:w-[900px] max-w-[1100px]
        rounded-xl border border-[#7042f88b] bg-[#0b0b14]/60
        px-6 py-5 shadow-lg
        transition-transform duration-300 ease-out transform-gpu
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
      <div className="flex items-center justify-between gap-6">
        <div className="min-w-0">
          <h3 className="text-2xl md:text-3xl font-semibold text-white truncate">
            {name}
          </h3>
          <p className="mt-1 text-sm md:text-base text-gray-400">
            Certification ID: <span className="font-mono">{certId}</span>
          </p>
        </div>
        <div className="hidden md:block rounded-lg border border-[#7042f88b] px-3 py-1 text-xs text-gray-300 opacity-80 group-hover:opacity-100">
          Verified
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;
