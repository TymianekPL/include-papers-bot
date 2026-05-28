import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
     {
          files: ["**/*.{ts,mts,cts}"],
          plugins: {
               js,
          },
          extends: ["js/recommended"],
          languageOptions: {
               globals: globals.node,
          },
          rules: {
               indent: ["error", 5],
               quotes: ["error", "double"],
               semi: ["error", "always"],
          },
     },
     {
          files: ["**/*.{ts,mts,cts}"],
          languageOptions: {
               globals: globals.node,
          },
          plugins: {
               "@typescript-eslint": tseslint.plugin,
          },
          extends: [...tseslint.configs.recommended],
          rules: {
               indent: [
                    "error",
                    5,
                    {
                         SwitchCase: 1,
                    },
               ],
               quotes: ["error", "double"],
               semi: ["error", "always"],
               "@typescript-eslint/no-explicit-any": "error",
               "@typescript-eslint/no-unused-vars": "error",
               "@typescript-eslint/consistent-type-imports": "error",
          },
     },
]);
