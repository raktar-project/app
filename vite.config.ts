import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginRewriteAll from "vite-plugin-rewrite-all";
import tsconfigpaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), pluginRewriteAll(), tsconfigpaths()],
  envDir: "env/",
});
