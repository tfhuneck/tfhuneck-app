/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false
}

module.exports = nextConfig

const withVideos = require('next-videos')

module.exports = withVideos()