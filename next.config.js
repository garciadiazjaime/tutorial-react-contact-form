/** @type {import('next').NextConfig} */
require("dotenv/config");

const nextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH,
};

module.exports = nextConfig;
