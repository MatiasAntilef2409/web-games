import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Esto permite que el servidor esté disponible en la red local
    port: 3000, // Puedes cambiar el puerto si lo deseas
  },
});
