import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    ignores: [".next/**", "out/**", "build/**", "dist/**", "next-env.d.ts"],
  },
  {
    files: ["src/components/common/CommandPalette.tsx"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  {
    files: ["src/components/ui/TypingAnimation.tsx"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
]);
