const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'github.com', 'zawatech.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
