/** @type {import('next').NextConfig} */
require('dotenv').config()
const webpack = require('webpack')
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'a.storyblok.com'],
    
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
}

