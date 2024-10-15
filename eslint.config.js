import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        CustomEvent: "readonly",
        setTimeout: "readonly",
      },
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    rules: {
      semi: ["warn", "always"],
    },
  },
];
