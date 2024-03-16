/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  rewrites: () => [
    {
      source: "/job-openings",
      destination: "http://study-now-pink.vercel.app/job-openings",
    },
  ],
};
