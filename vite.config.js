import { defineConfig } from "vite";

export default defineConfig({
  base: "/absproxy/3000",
  server: {
    host: "0.0.0.0", // Change this to a valid IP address if needed
    port: 3000, // Optional otherwise your app will start on default port
  },
});
