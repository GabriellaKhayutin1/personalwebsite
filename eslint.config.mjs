import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
].map((config) => {
  if (config.languageOptions?.parser && !config.languageOptions.parser.meta) {
    config.languageOptions.parser = {
      ...config.languageOptions.parser,
      meta: {
        name: "next-babel-eslint-parser",
        version: "15.1.6",
      },
    };
  }

  return config;
});

export default eslintConfig;
