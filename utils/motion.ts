import type { Variants } from "framer-motion";

export const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, when: "beforeChildren" },
  },
};

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
// ✅ Custom(index:number)를 받는 variants (delay에 index 사용)
export const slideInFromLeftIndexed: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 20,
      delay: (custom ?? 0) * 0.1,
    },
  }),
};

// 헤더 살짝 뜨기
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};
