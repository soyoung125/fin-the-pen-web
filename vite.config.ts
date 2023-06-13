import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fin-the-pen-web/",
  server: {
    proxy: {
      // 문자열만: http://localhost:5173/foo -> http://localhost:4567/foo
      "/guest": "",
      // 옵션과 함께: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      "/real": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/real/, ""),
      },
    },
  },
});
