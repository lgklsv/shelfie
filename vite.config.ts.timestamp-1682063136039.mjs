// vite.config.ts
import { defineConfig } from "file:///Users/olegkolosov/Developer/rs-react/node_modules/vite/dist/node/index.js";
import react from "file:///Users/olegkolosov/Developer/rs-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///Users/olegkolosov/Developer/rs-react/node_modules/vite-tsconfig-paths/dist/index.mjs";
import mdx from "file:///Users/olegkolosov/Developer/rs-react/node_modules/@mdx-js/rollup/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["istanbul"]]
      }
    }),
    mdx(),
    tsconfigPaths()
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    css: true,
    coverage: {
      include: ["src/**/*"],
      exclude: [
        "src/const/*",
        "**/*/@(index|config).@(tsx|ts)",
        "**/*/*.@(icon|asset).@(tsx|ts)",
        "src/entry-client.tsx",
        "src/entry-server.tsx"
      ],
      enabled: true,
      provider: "istanbul",
      reporter: ["text"],
      all: true
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvb2xlZ2tvbG9zb3YvRGV2ZWxvcGVyL3JzLXJlYWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvb2xlZ2tvbG9zb3YvRGV2ZWxvcGVyL3JzLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9vbGVna29sb3Nvdi9EZXZlbG9wZXIvcnMtcmVhY3Qvdml0ZS5jb25maWcudHNcIjsvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZS9jbGllbnRcIiAvPlxuXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmltcG9ydCBtZHggZnJvbSAnQG1keC1qcy9yb2xsdXAnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KHtcbiAgICAgIGJhYmVsOiB7XG4gICAgICAgIHBsdWdpbnM6IFtbJ2lzdGFuYnVsJ11dLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBtZHgoKSxcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gIF0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6IFsnLi9zcmMvc2V0dXBUZXN0cy50cyddLFxuICAgIGNzczogdHJ1ZSxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgaW5jbHVkZTogWydzcmMvKiovKiddLFxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAnc3JjL2NvbnN0LyonLFxuICAgICAgICAnKiovKi9AKGluZGV4fGNvbmZpZykuQCh0c3h8dHMpJyxcbiAgICAgICAgJyoqLyovKi5AKGljb258YXNzZXQpLkAodHN4fHRzKScsXG4gICAgICAgICdzcmMvZW50cnktY2xpZW50LnRzeCcsXG4gICAgICAgICdzcmMvZW50cnktc2VydmVyLnRzeCcsXG4gICAgICBdLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHByb3ZpZGVyOiAnaXN0YW5idWwnLFxuICAgICAgcmVwb3J0ZXI6IFsndGV4dCddLFxuICAgICAgYWxsOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFJQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBR2hCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLE9BQU87QUFBQSxRQUNMLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztBQUFBLE1BQ3hCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsSUFDSixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVksQ0FBQyxxQkFBcUI7QUFBQSxJQUNsQyxLQUFLO0FBQUEsSUFDTCxVQUFVO0FBQUEsTUFDUixTQUFTLENBQUMsVUFBVTtBQUFBLE1BQ3BCLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFVBQVUsQ0FBQyxNQUFNO0FBQUEsTUFDakIsS0FBSztBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
