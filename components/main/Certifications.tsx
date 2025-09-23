"use client";

import { motion } from "framer-motion";
import { containerStagger, riseIn } from "@/utils/motion";
import CertificationCard from "../sub/CertificationCard";

export default function Certifications() {
  return (
    <section id="certifications">
      <motion.section
        variants={containerStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center justify-center py-20 px-6"
      >
        <motion.h2
          variants={riseIn}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
        >
          Certifications
        </motion.h2>

        <div className="flex flex-col items-center gap-6 w-full">
          <CertificationCard
            name="AWS Certified Cloud Practitioner – Foundational"
            certId="7HKYMW0C7M41QR3W"
            index={0}
          />
          <CertificationCard
            name="AWS Certified Solutions Architect – Associate"
            certId="8106a343a5d546c79d94514d7d2f6ce1"
            index={1}
          />
        </div>
      </motion.section>
    </section>
  );
}
