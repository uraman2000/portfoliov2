import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { VitePluginRadar } from "vite-plugin-radar"
import { yearsOfExperience } from "./src/data/career.js"

// index.html is static, so its years of experience are filled in when the site is built
const yearsInHtml = {
  name: "years-of-experience",
  transformIndexHtml: html => html.replaceAll("__YEARS_OF_EXPERIENCE__", String(yearsOfExperience())),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    yearsInHtml,
    VitePluginRadar({
      analytics: {
        id: "G-FH10136QC5", // Replace with your Google Analytics ID
      },
    }),
  ],
})
