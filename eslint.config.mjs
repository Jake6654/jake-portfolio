import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  // 👉 규칙 추가
  {
    files: ["**/*.{ts,tsx,js,jsx}"], // 적용할 파일 확장자
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // any 허용
      "@typescript-eslint/ban-ts-comment": "off", // @ts-expect-error 설명 없어도 허용
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];

export default eslintConfig;
