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

    // use svgr instead of Next.js built-in SVG viewer
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { 
          not: [...fileLoaderRule.resourceQuery.not, /url/] // exclude if *.svg?url
        }, 
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: true,
              typescript: true,
              ref: true,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: { removeViewBox: false, cleanupIds: false },
                    },
                  },
                  {
                    name: "cleanupIds",
                    params: {
                      remove: true,
                      minify: true,
                      preserve: ['colorToggle'],
                      preservePrefixes: [],
                      force: false
                    }
                  }
                ],
              },
              titleProp: true,
            },
          }
        ],
      },
    )
    fileLoaderRule.exclude = /\.svg$/i

    return config;
  },
};
