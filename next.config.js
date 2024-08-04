/** @type {import('next').NextConfig} */
require("dotenv/config");

const nextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

module.exports = nextConfig;
