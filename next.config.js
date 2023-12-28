/**
 * Copyright (c) 2023 Cory Ginsberg
 * MIT License
 */

/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    logger: {
      warn: (message) => {
        console.warn(message);
      },
      debug: (message) => {
        console.log(message);
      },
    },
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.optimization.providedExports = true;
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, './app/components/**'),
      sections: path.resolve(__dirname, './app/sections/**'),
      '@styles': path.resolve(__dirname, './app/styles'),
      '@public': path.resolve(__dirname, './public/**'),
    };
    return config;
  },
};
