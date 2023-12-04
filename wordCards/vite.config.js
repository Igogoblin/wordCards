import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/wordCards/",
  plugins: [react()],
  // esbuild: {
  //   jsxInject: `import React from "react"`,
  // },
});

// npm run dev for local
// npm run build for predeploy
// npm run deploy for deploy
