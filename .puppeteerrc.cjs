const { join } = require("node:path");

// Download Chromium into a project-local cache so the same browser is available
// to both `npm install` and the build-time prerender step on Vercel/CI.
module.exports = {
  cacheDirectory: join(__dirname, ".cache", "puppeteer"),
};
