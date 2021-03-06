const config = {
  use: {
    baseURL: 'http://localhost:3000',
    browserName: 'chromium',
  },
  reporter: process.env.CI ? 'github' : 'list',
  webServer: {
    command: 'node src/index.js',
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
};

module.exports = config;